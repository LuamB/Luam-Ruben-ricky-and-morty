/* Imports */
import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

/* Global variables */
const body = document.querySelector("body");
const main = document.querySelector("main");
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const cardContainer = document.querySelector("ul");
const navigation = document.querySelector('[data-js="navigation"]');

/* States */
let maxPage = 1;
let page = 1;
let searchQuery = "";

/* FETCH API DATA */
export async function fetchCharacters() {
  cardContainer.innerHTML = ``; // empty card container

  let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
  console.log(`URL: ${url}`);

  try {
    // fetching data
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// function call
const data = await fetchCharacters();
console.log("data", data);
console.log("page", page);

/* CARDS */
data.results.forEach((character) => {
  const card = createCharacterCard(
    character.id,
    character.image,
    character.name,
    character.status,
    character.type,
    character.episode.length
  );
  // render cards
  cardContainer.append(card);
});

/* SEARCH BAR */
const searchBar = createSearchBar(); // create search bar
searchBarContainer.append(searchBar); // append to container

/* PAGINATION */
maxPage = data.info.pages;
console.log(`page: ${page} | maxPage:${maxPage}`);

// create page navigation buttons
const [prevButton, nextButton] = createButton(page, maxPage); // create navigation buttons

// add button functionality
prevButton.addEventListener("click", async () => {
  page > 1 && (page--, await fetchCharacters()); // Update the page number and fetch the data again
});
nextButton.addEventListener("click", async () => {
  page < maxPage && (page++, await fetchCharacters());
});

console.log("page", page);

const pagination = createPagination(page, maxPage); // create pagination element
console.log("page", page);
// pagination.textContent = `${page} / ${maxPage}`;
navigation.append(prevButton, pagination, nextButton); // append to nav element

/* RENDER */
document.addEventListener("DOMContentLoaded", () => {
  main.append(searchBarContainer, cardContainer);
  body.appendChild(main, navigation);
});
