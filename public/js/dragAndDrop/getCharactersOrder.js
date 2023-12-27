export default function getCharactersOrder(container) {
  const accountId = container.dataset.id;
  const characters = container.querySelectorAll('li');
  const objectToSend = { accountId };
  const charactersOrder = [];
  characters.forEach((character) => {
    const characterId = parseInt(character.dataset.id, 10);
    charactersOrder.push({ characterId });
  });
  objectToSend.charactersOrder = charactersOrder;
  return objectToSend;
}
