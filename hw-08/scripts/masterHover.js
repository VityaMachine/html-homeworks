const teamListRef = document.querySelector(".team-list");
teamListRef.addEventListener("mouseover", onItemHover);
teamListRef.addEventListener("mouseout", onItemLeft);

const masterRefs = [...document.querySelectorAll(".team-item")];

function onItemHover(e) {
  const hoveredElement = e.target;

  if (!hoveredElement.className.includes("master")) {
    return;
  }

  const hoveredId = hoveredElement.parentNode.id;

  masterRefs.map((item) => {
    if (item.id !== hoveredId) {
      item.classList.add("non-hovered");
    } else {
      item.children[1].classList.add("hovered-name");
    }
  });
}

function onItemLeft(e) {
  const hoveredElement = e.target;

  if (!hoveredElement.className.includes("master")) {
    return;
  }

  masterRefs.map((item) => {
    item.classList.remove("non-hovered");
    item.children[1].classList.remove("hovered-name");
  });
}
