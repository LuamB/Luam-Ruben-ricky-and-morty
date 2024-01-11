import { fetchCharacters } from "../../index.js";

export function createButton() {
  // create previous button element
  const prevButton = document.createElement("button");
  prevButton.classList.add("button--prev");

  // create next button element
  const nextButton = document.createElement("button");
  nextButton.classList.add("button--next");

  return [prevButton, nextButton];
}

export function handlePrevButton(page) {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  }
}

export function handleNextButton(page, maxPage) {
  console.log("page", page);
  if (page < maxPage) {
    page++;
    fetchCharacters(page);
  }
}
