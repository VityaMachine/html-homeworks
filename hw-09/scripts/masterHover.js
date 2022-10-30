window.addEventListener("load", winListenersHandler);
window.addEventListener("resize", winListenersHandler);

const teamListRef = document.querySelector(".team-list");

const masterRefs = [...document.querySelectorAll(".team-item")];

function winListenersHandler() {
  if (window.innerWidth > 768) {
    // console.log(`winWidth is ${window.innerWidth}. MouseOverOut Events`);

    teamListRef.addEventListener("mouseover", onItemHover);
    teamListRef.addEventListener("mouseout", onItemLeft);

    teamListRef.removeEventListener("mousedown", onItemHover);
    teamListRef.removeEventListener("mouseup", onItemLeft);
  } else {
    // console.log(`winWidth is ${window.innerWidth}. MouseDownUp Events`);

    teamListRef.addEventListener("mousedown", onItemHover);
    teamListRef.addEventListener("mouseup", onItemLeft);

    teamListRef.removeEventListener("mouseover", onItemHover);
    teamListRef.removeEventListener("mouseout", onItemLeft);
  }
}

function onItemHover(e) {
  const hoveredElement = e.target;

  if (!hoveredElement.className.includes("master")) {
    return;
  }

  const hoveredId = hoveredElement.parentNode.id;

  if (window.innerWidth > 768) {
    masterRefs.map((item) =>
      item.id !== hoveredId
        ? item.classList.add("non-hovered")
        : item.children[1].classList.add("hovered-name")
    );
  } else {
    masterRefs.map((item) => {
      item.id === hoveredId && item.children[1].classList.add("hovered-name");
    });
  }
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
