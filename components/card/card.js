export function createCharacterCard(
  charImage,
  charName,
  charStatus,
  charType,
  charOccurences
) {
  const cardElement = document.createElement("li"); // create new list item element = card
  cardElement.innerHTML = `
    <li class="card">
      <div class="card__image-container">
        <img
            class="card__image"
            src=${charImage}
            alt=${charName}
        />
        <div class="card__image-gradient"></div>
      </div>
      <div class="card__content">
        <h2 class="card__title">${charName}</h2>
        <dl class="card__info">
          <dt class="card__info-title">Status</dt>
          <dd class="card__info-description">${charStatus}</dd>
          <dt class="card__info-title">Type</dt>
          <dd class="card__info-description">${charType}</dd>
          <dt class="card__info-title">Occurrences</dt>
          <dd class="card__info-description">${charOccurences}</dd>
        </dl>
      </div>
    </li>`;
  return cardElement;
}
