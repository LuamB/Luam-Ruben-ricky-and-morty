/* Imports */
import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

/* Global variables */
const body = document.querySelector("body");
// const title = document.querySelector("h1");
const main = document.querySelector("main");
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const cardContainer = document.querySelector("ul");
const navigation = document.querySelector('[data-js="navigation"]');

// const pagination = document.querySelector('[data-js="pagination"]');

/* States */
let maxPage = 1;
let page = 1;
let searchQuery = "";
// let pageQuery = `/?page=${page}`;
// let nameQuery = `/?name=${searchQuery}`;

/* FETCH API DATA */
export async function fetchCharacters(page, searchQuery) {
  let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
  console.log(`URL: ${url}`);

  cardContainer.innerHTML = ``; // empty card container

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
let data = await fetchCharacters(page, searchQuery);
console.log("data", data);

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

const [prevButton, nextButton] = createButton(); // create navigation buttons

const pagination = createPagination(page, maxPage); // create pagination element
navigation.append(prevButton, pagination, nextButton); // append to nav element

/* RENDER */
document.addEventListener("DOMContentLoaded", () => {
  main.append(searchBarContainer, cardContainer);
  body.appendChild(main, navigation);
  // body.appendChild(navigation);
});
