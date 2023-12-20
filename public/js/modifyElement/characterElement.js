export default function updateCharacterElement(element, character) {
  element.querySelector('.table__character').textContent = character.name;

  element.querySelector('.td-name').style.backgroundColor = character.account_id.color;

  element.querySelector('.table__account').textContent = character.account_id.name;
}
