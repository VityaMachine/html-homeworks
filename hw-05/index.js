import data from "./src/data/places.json" assert { type: "json" };

import { listItems } from "./src/templates/listItemsMarkup.js";

const listRef = document.querySelector(".places-list");
const lineBtnRef = document.querySelector(".select-btn-line");
const listArrowBtn = document.querySelector(".btn-line-icon");
const btnUp = document.querySelector(".btn-up");

listRef.addEventListener("click", onStarClick);
lineBtnRef.addEventListener("click", onListOpenClick);
btnUp.addEventListener("click", onUpClick);
window.addEventListener("scroll", showUpBtn);

showUpBtn();

let favoriteStars;
let isListOpened = false;

if (localStorage.getItem("openedList")) {
  isListOpened = JSON.parse(localStorage.getItem("openedList"));
}

openCloseList();

listRef.innerHTML = listItems(data);

const listStarsArray = [...document.querySelectorAll(".star-icon")];

favoriteStars = listStarsArray.map((item) => ({
  id: item.dataset.idx,
  inFavorites: false,
}));

if (JSON.parse(localStorage.getItem("stars"))) {
  favoriteStars = JSON.parse(localStorage.getItem("stars"));

  listStarsArray.map((item) => {
    const itemId = item.dataset.idx;
    const itemData = favoriteStars.find(
      (item) => item.id === itemId
    ).inFavorites;

    itemData
      ? item.classList.add("favorite")
      : item.classList.remove("favorite");
  });
}

function onStarClick(e) {
  console.log(window.scrollY);

  const clickedId = e.target.parentNode.dataset.idx || e.target.dataset.idx;

  const result = favoriteStars.map((item) =>
    item.id !== clickedId
      ? item
      : {
          ...item,
          inFavorites: !item.inFavorites,
        }
  );

  favoriteStars = result;

  localStorage.setItem("stars", JSON.stringify(favoriteStars));

  changeFill(clickedId);
}

function changeFill(id) {
  const targetElementData = favoriteStars.find((item) => item.id === id);
  const targetElement = listStarsArray.find((item) => item.dataset.idx === id);

  targetElementData.inFavorites
    ? targetElement.classList.add("favorite")
    : targetElement.classList.remove("favorite");
}

function onListOpenClick() {
  isListOpened = !isListOpened;

  localStorage.setItem("openedList", isListOpened);

  openCloseList();
}

function openCloseList() {
  if (isListOpened) {
    listRef.hidden = false;
    listArrowBtn.classList.add("btn-icon-opened");
  } else {
    listRef.hidden = true;
    listArrowBtn.classList.remove("btn-icon-opened");
  }
}

function onUpClick(e) {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function showUpBtn() {
  btnUp.style.visibility = window.scrollY > 0 ? "visible" : "hidden";
}
