export function listItems(itemsData) {
  return itemsData
    .map(
      (item) =>
        `
        <li class="list-item">
        <div class="item-content">
          <div class="item-img-box">
            <img
              src="${item.image}"
              alt="${item.title}"
              class="item-img"
            />
          </div>

          <div class="text-box">
            <h4 class="item-title">${item.title}</h4>
            <div class="title-underline"></div>
            <div class="item-text">
            ${item.description}
            </div>
          </div>

          <div class="star-box">
            <svg  class="star-icon" data-idx=${item.id}>
              <use href="./src/img/icons.svg#icon-star"></use>
            </svg>
          </div>

          <button class="detail-btn">Детальніше</button>
        </div>
      </li>
        `
    )
    .join("");
}
