export function sortDragodindes(){
  const dragodindeElements = document.querySelectorAll(".update-figure-dd");
  dragodindeElements.forEach(dragodinde => {
    const stade = dragodinde.dataset.stade;
    document.querySelector(`.stade__breed-container[data-stade='${stade}']`)
    .appendChild(dragodinde);
 });
}

// export function searchDragodindes(){

// }