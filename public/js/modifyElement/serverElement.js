export default function updateServerElement(element, character) {
  element.querySelector('.td-server').style.backgroundColor = character.account_id.color;

  element.querySelector('.td-server img').src = `/images/${character.account_id.server.img}`;

  element.querySelector('.td-server img').alt = `logo du serveur dofus ${character.account_id.server.img}`;

  element.querySelector('.link-server').href = `/accounts?server=${character.account_id.server.id}`;
}
