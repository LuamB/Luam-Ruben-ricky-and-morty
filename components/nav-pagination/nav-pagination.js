// import { createButton } from "../nav-button/nav-button.js";

export function createPagination(page, maxPage) {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.textContent = `${page} / ${maxPage}`;
  return pagination;
}
