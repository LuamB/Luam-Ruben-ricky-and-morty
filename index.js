import { createCharacterCard } from "./components/card/card.js";
import {
  createButton,
  handlePrevButton,
  handleNextButton,
} from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const body = document.querySelector("body");
// const title = document.createElement("h1");
const main = document.querySelector("main");
const cardContainer = document.createElement("ul");
cardContainer.classList.add("card-container");

// const navigation = document.querySelector('[data-js="navigation"]');
// const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// let pageURL = `/?page=${page}`;
// let nameURL = `/?name=${searchQuery}`;

//FETCH CHARACTER DATA
export async function fetchCharacters(page) {
  let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
  console.log("URL", url);

  cardContainer.innerHTML = ``; // empty card container

  try {
    // fetching data
    const response = await fetch(url);

    // parsing data
    const characterData = await response.json();
    console.log("data", characterData);

    maxPage = characterData.info.pages;
    console.log("maxPage_in", maxPage);

    // create character cards
    characterData.results.forEach((character) => {
      const card = createCharacterCard(
        character.image,
        character.name,
        character.status,
        character.type,
        character.episode.length
      );
      // render cards
      cardContainer.append(card);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchCharacters();

//PAGINATION
console.log("maxPage_out & page", maxPage, page);

// create navigation element
const navigation = document.createElement("nav");
navigation.classList.add("navigation");

// create previous & next button
const [prevButton, nextButton] = createButton();
// handle navigation
prevButton.addEventListener("click", () => handlePrevButton(page));
nextButton.addEventListener("click", () => handleNextButton(page, maxPage));

navigation.append(prevButton);
navigation.append(nextButton);

// create pagination element
const pagination = createPagination(page, maxPage);

// render
navigation.append(prevButton, pagination, nextButton);

//SEARCH BAR
const searchBarContainer = createSearchBar();

document.addEventListener("DOMContentLoaded", () => {
  //RENDER
  body.append(main);
  main.append(searchBarContainer, cardContainer);
  body.append(navigation);
});
