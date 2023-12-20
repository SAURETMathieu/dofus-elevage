export default function updateClasseElement(element, classe) {
  const classeElement = element.querySelector('.table__img-perso');
  classeElement.src = `/images/${classe}.png`;
  classeElement.alt = `classe du jeu dofus: ${classe}`;
}
