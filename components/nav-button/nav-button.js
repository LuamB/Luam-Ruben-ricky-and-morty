import { fetchCharacters } from "../../index.js";

// export function createButton(page, maxPage) {
//   // previous button element
//   const prevButton = document.createElement("button");
//   prevButton.classList.add("button--prev");
//   prevButton.textContent = "previous";

//   // next button element
//   const nextButton = document.createElement("button");
//   nextButton.classList.add("button--next");
//   nextButton.textContent = "next";

//   // add button functionality
//   //   function handlePrevButton(page) {
//   //     if (page > 1) {
//   //       page--;
//   //       fetchCharacters();
//   //     }
//   //   }

//   function handlePrevButton(page) {
//     page > 1 && (page--, fetchCharacters(page));
//   }

//   //   function handleNextButton(page, maxPage) {
//   //     if (page < maxPage) {
//   //       page++;
//   //       fetchCharacters();
//   //     }
//   //   }

//   function handleNextButton(page, maxPage) {
//     page < maxPage && (page++, fetchCharacters(page));
//   }
//   prevButton.addEventListener("click", handlePrevButton);
//   nextButton.addEventListener("click", handleNextButton);

//   return [prevButton, nextButton];
// }

export function createButton(page, maxPage) {
  const prevButton = document.createElement("button");
  prevButton.className = "button--prev";
  prevButton.textContent = "previous";

  const nextButton = document.createElement("button");
  nextButton.className = "button--prev";
  nextButton.textContent = "next";

  prevButton.addEventListener("click", () => {
    if (page > 1) {
      page--;
      // Update the page number and fetch the data again
      fetchCharacters();
    }
  });

  nextButton.addEventListener("click", () => {
    if (page < maxPage) {
      page++;
      // Update the page number and fetch the data again
      fetchCharacters();
    }
  });
  return [prevButton, nextButton];
}
