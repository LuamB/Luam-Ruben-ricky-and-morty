import { createCharacterCard } from "./components/card/card.js";
import { pageNavigation } from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1; //characterData.info.pages
let page = 1;
const searchQuery = "";

// Fetch and render data
async function fetchAndRenderData() {
  cardContainer.innerHTML = ``; // empty card container

  try {
    // fetching data
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}}`
    );
    console.log("response: ", response);
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
      cardContainer.append(card);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchAndRenderData();
