function removeAccentsAndReplaceSpaces(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
}

export function searchDragodindesUpdate() {
  const breedListUpdateElem = document.querySelector('#update-breed-list');
  const inputSearchUpdate = document.querySelector('#search-dd-update');
  const dragodindeElements = document.querySelectorAll('.update-figure-dd');
  const clearElem = breedListUpdateElem.querySelector('.clear-search');

  inputSearchUpdate.addEventListener('input', function handleInput() {
    const inputValue = removeAccentsAndReplaceSpaces(this.value.toLowerCase());

    dragodindeElements.forEach((element) => {
      const name = element.getAttribute('data-color').toLowerCase();

      if (name.includes(inputValue)) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });

    clearElem.addEventListener('click', () => {
      inputSearchUpdate.value = '';
      dragodindeElements.forEach((element) => {
        element.style.display = 'block';
      });
    });
  });
}

export function searchDragodindesCreate() {
  const breedListCreateElem = document.querySelector('#breed-list');
  const inputSearchCreate = document.querySelector('#search-dd');
  const dragodindeElements = document.querySelectorAll('.figure-dd');
  const clearElem = breedListCreateElem.querySelector('.clear-search');

  inputSearchCreate.addEventListener('input', function handleInput() {
    const inputValue = removeAccentsAndReplaceSpaces(this.value.toLowerCase());

    dragodindeElements.forEach((element) => {
      const name = element.getAttribute('data-color').toLowerCase();

      if (name.includes(inputValue)) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });

    clearElem.addEventListener('click', () => {
      inputSearchCreate.value = '';
      dragodindeElements.forEach((element) => {
        element.style.display = 'block';
      });
    });
  });
}
