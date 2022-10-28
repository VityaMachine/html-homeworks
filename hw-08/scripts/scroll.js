const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

const menuRef = document.getElementById("main-menu");
menuRef.addEventListener("click", scrollHandler);

const screensRef = {
  gallery: document.getElementById("gallery"),
  services: document.getElementById("services"),
  team: document.getElementById("team"),
  contact: document.getElementById("contact"),
};

function scrollHandler(e) {
  e.preventDefault();

  if (!e.target.href) {
    return;
  }

  const splitedLink = e.target.href.split("#");
  const clickedLinkName = splitedLink[splitedLink.length - 1];
  const isPropReal = screensRef.hasOwnProperty(clickedLinkName);

  if (!isPropReal) {
    return;
  }

  window.scrollTo({
    top: screensRef[clickedLinkName].offsetTop - headerHeight,
    behavior: "smooth",
  });
}
