export default function initClosedCharacters() {
  const charactersElement = document.querySelectorAll('.article__character');
  charactersElement.forEach((element) => {
    if (element.classList.contains('closed')) {
      const elementsToDisplay = element
        .querySelectorAll('.character__breed-img, .character__genre, .character__container-logos button:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3))');
      elementsToDisplay.forEach((elementToDisplay) => {
        elementToDisplay.style.display = 'none';
      });
    }
  });
}
