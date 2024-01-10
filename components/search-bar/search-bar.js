export function createSearchBar() {
  // create input element
  const inputElement = document.createElement("input");
  inputElement.name = "query";
  inputElement.classList.add("search-bar__input");
  inputElement.type = "text";
  inputElement.placeholder = "search characters";
  inputElement.setAttribute("aria-label", "character name");

  // create button element
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("search-bar__button");
  buttonElement.setAttribute("aria-label", "search for character");

  // create img element for the button
  const imgElement = document.createElement("img");
  imgElement.classList.add("search-bar__icon");
  imgElement.src = "assets/magnifying-glass.png";
  imgElement.alt = "";

  return [inputElement, buttonElement, imgElement];
}
