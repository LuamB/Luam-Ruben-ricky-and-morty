export function createPagination(page, maxPage) {
  const pageNav = document.createElement("span");
  pageNav.innerHTML = `<span class="navigation__pagination" data-js="pagination">${page} / ${maxPage}</span>`;
  return pageNav;
}

// export function paginationDisplay(page, maxPage) {
//   pagination.textContent = `${page} / ${maxPage}`;
// }
