export function pageNavigation(page, maxPage) {
  const pageNav = document.createElement("span");
  pageNav.innerHTML = `<span class="navigation__pagination" data-js="pagination">${page} / ${maxPage}</span>`;
  return pageNav;
}
