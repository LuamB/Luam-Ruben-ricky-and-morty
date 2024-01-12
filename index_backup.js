import { createCharacterCard } from "./components/card/card.js";
// import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const baseUrl = "https://rickandmortyapi.com/api/character";
// Initaial State!

let maxPage; //data.info.pages
let page = 1;
let searchQuery = "";
let queryPage = `/?page=${page}`;
let queryUrl = baseUrl + queryPage;
// Fetch and Render data
async function fetchAndRenderData() {
  cardContainer.innerHTML = ""; // empty card container
  queryPage = `/?page=${page}`;
  let queryName = `&name=${searchQuery}`;
  queryUrl = baseUrl + queryPage + queryName;
  try {
    // fetching data
    const response = await fetch(queryUrl);
    console.log("response:", response);
    if (!response.ok) {
      console.error(`Bad request -> ${response.status}`);
      return;
    }
    // parsing data
    const data = await response.json();
    console.log("data", data);
    // pagination
    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
    // compile cards
    data.results.forEach((character) => {
      const charId = character.id;
      const charImage = character.image;
      const charName = character.name;
      const charStatus = character.status;
      const charType = character.type;
      const charOccurences = character.episode.length;
      // console.log("charId: ", charId);
      // console.log("charImg: ", charImage);
      // console.log("charName: ", charName);
      // console.log("charStatus: ", charStatus);
      // console.log("charType: ", charType);
      // console.log("charOccurences: ", charOccurences);
      const card = createCharacterCard(
        charImage,
        charName,
        charStatus,
        charType,
        charOccurences
      );
      // render cards
      cardContainer.append(card);
    });
  } catch (error) {
    console.log(error);
  }
}
fetchAndRenderData(); // call the function fetch first time
// compile & render search bar
searchBarContainer.append(searchBar);
const [inputElement, buttonElement, imgElement] = createSearchBar();
// append imgElement to the buttonElement
buttonElement.appendChild(imgElement);
// append inputElement and buttonElement to the searchBar
searchBar.appendChild(inputElement);
searchBar.appendChild(buttonElement);

// // Search input
// inputElement.addEventListener("input", (e) => {
//   e.preventDefault();
//   searchQuery = e.target.value;
//   fetchAndRenderData();
// });
// review INPUT AND STRINGS

// Search Button
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  // searchQuery = e.target.elements.query.value;
  searchQuery = e.target.querySelector("input").value;
  console.log(e.target.querySelector("input").value);
  fetchAndRenderData();
});
// Next Button
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchAndRenderData();
  }
});
// Previous Button
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchAndRenderData();
  }
});
