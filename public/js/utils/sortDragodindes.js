export function sortDragodindes() {
  const dragodindeElements = document.querySelectorAll('.update-figure-dd');
  dragodindeElements.forEach((dragodinde) => {
    const { stade } = dragodinde.dataset;
    document
      .querySelector(`.stade__breed-container[data-stade='${stade}']`)
      .appendChild(dragodinde);
  });
}

export function sortCreateDragodindes() {
  const dragodindeElements = document.querySelectorAll('.figure-dd');
  dragodindeElements.forEach((dragodinde) => {
    const { stade } = dragodinde.dataset;
    document
      .querySelector(`.stade__breed-container[data-stade='${stade}'].create`)
      .appendChild(dragodinde);
  });
}
