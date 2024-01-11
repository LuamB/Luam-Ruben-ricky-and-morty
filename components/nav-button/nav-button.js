import { fetchCharacters } from "../../index.js";

export function createButton(page, maxPage) {
  // previous button element
  const prevButton = document.createElement("button");
  prevButton.classList.add("button--prev");
  prevButton.textContent = "previous";

  // next button element
  const nextButton = document.createElement("button");
  nextButton.classList.add("button--next");
  nextButton.textContent = "next";

  // add button functionality
  //   function handlePrevButton(page) {
  //     if (page > 1) {
  //       page--;
  //       fetchCharacters(page, searchQuery);
  //     }
  //   }

  function handlePrevButton(page) {
    page > 1 && (page--, fetchCharacters(page, searchQuery));
  }

  //   function handleNextButton(page, maxPage) {
  //     if (page < maxPage) {
  //       page++;
  //       fetchCharacters(page, searchQuery);
  //     }
  //   }

  function handleNextButton(page, maxPage) {
    page < maxPage && (page++, fetchCharacters(page, searchQuery));
  }
  prevButton.addEventListener("click", handlePrevButton);
  nextButton.addEventListener("click", handleNextButton);

  return [prevButton, nextButton];
}
