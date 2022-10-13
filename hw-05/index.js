import data from "./src/data/places.json" assert { type: "json" };

const ref = document.querySelector(".js-test-selector");


const mkData = data[3];

const markup = `
<div class="title">${mkData.title}</div>
<div class="descr">${mkData.description}</div>
<img src="${mkData.image}" alt="${mkData.title}">
`;



ref.innerHTML = markup;


