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
const baseURL = "https://rickandmortyapi.com/api/character";

// States
let maxPage = 1; //characterData.info.pages
let page = 1;
let searchQuery = "";

const queryPage = `/?page=${page}`;
const queryName = `/?name=${searchQuery}`;
console.log("combiURL", baseURL + queryName);

// Fetch and render data
async function fetchAndRenderData() {
  cardContainer.innerHTML = ``; // empty card container

  try {
    // fetching data
    if (searchQuery !== "") {
      const response = await fetch(baseURL + queryName); // `https://rickandmortyapi.com/api/character/?page=${page}`
      console.log("response: ", response);
    } else {
      const response = await fetch(baseURL + queryPage);
      console.log("response: ", response);
    }
    if (!response.ok) {
      console.error("Bad request ->", response.status);
      return;
    }

    // parsing data
    const characterData = await response.json();
    console.log("data", characterData);

    // pagination
    maxPage = characterData.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
    // const pageNav = createPagination(page, maxPage);
    // render pagination

    // prevButton.append(pButton);
    // navigation.appendChild(pageNav);
    // nextButton.append(nButton);

    // pagination.textContent = `${page} / ${maxPage}`;

    // compile cards
    characterData.results.forEach((character) => {
      const charId = character.id;
      const charImage = character.image;
      const charName = character.name;
      const charStatus = character.status;
      const charType = character.type;
      const charOccurences = character.episode.length;
      console.log("charId: ", charId);
      console.log("charImg: ", charImage);
      console.log("charName: ", charName);
      console.log("charStatus: ", charStatus);
      console.log("charType: ", charType);
      console.log("charOccurences: ", charOccurences);
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

// fetchAndRenderData();

// compile & render search bar
searchBarContainer.append(searchBar);
const [inputElement, buttonElement, imgElement] = createSearchBar();
console.log("inputElement: ", inputElement);
console.log("buttonElement: ", buttonElement);
console.log("imgElement: ", imgElement);

// append imgElement to the buttonElement
buttonElement.appendChild(imgElement);

// append inputElement and buttonElement to the searchBar
searchBar.appendChild(inputElement);
searchBar.appendChild(buttonElement);

fetchAndRenderData();

// search input
inputElement.addEventListener("input", (e) => {
  e.preventDefault();
  searchQuery = e.target.value;
  console.log("searchQuery", searchQuery);
  fetchAndRenderData();
});

// Button
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    pagination.textContent = `${page} / ${maxPage}`;
    fetchAndRenderData();
  } else {
    page = 1;
  }
});
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    pagination.textContent = `${page} / ${maxPage}`;
    fetchAndRenderData();
  } else {
    page = maxPage;
  }
});
