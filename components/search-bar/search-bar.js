export function createSearchBar() {
  // create search bar container
  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("search-bar-container");

  // create search bar element
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");

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

  // rendering
  buttonElement.append(imgElement);
  searchBar.appendChild(buttonElement);
  searchBar.appendChild(inputElement);
  searchBarContainer.append(searchBar);

  // handle search event
  searchBar.addEventListener("submit", handleSearch);

  return searchBarContainer;
}

function handleSearch(e) {
  e.preventDefault();
  searchQuery = ""; // empty search
  searchQuery = e.target.elements.query.value;
  // nameURL = `/?name=${searchQuery}`;
  // console.log(e);
  // const combiURL = baseURL + nameURL;
  // console.log("searchQuery", searchQuery);
  // console.log("url", combiURL);
  fetchCharacters();
}
