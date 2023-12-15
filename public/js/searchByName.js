export function searchByNameTable(elements, inputElem, clearElem){
  inputElem.addEventListener("input", function () {
    const input = this.value.toLowerCase();

    elements.forEach((element) => {
      const name = element.getAttribute("data-name").toLowerCase();
      const childElements = element.querySelectorAll("*");
      if (name.includes(input)) {
        element.style.display = "";
        childElements.forEach(child => {
          child.style.display = "";
        });
      } else {
        element.style.display = "none";
        childElements.forEach(child => {
          child.style.display = "none";
        });
      }
    });

    clearElem.addEventListener("click", function () {
      inputElem.value = "";
      elements.forEach((element) => {
        const childElements = element.querySelectorAll("*");
        childElements.forEach(child => {
          child.style.display = "";
        });
        element.style.display = "";
      });
    });
  });
}

export function searchByName(elements, inputElem, clearElem){
  inputElem.addEventListener("input", function () {
    const input = this.value.toLowerCase();

    elements.forEach((element) => {
      const name = element.getAttribute("data-name").toLowerCase();
      if (name.includes(input)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });

    clearElem.addEventListener("click", function () {
      inputElem.value = "";
      elements.forEach((element) => {
        const childElements = element.querySelectorAll("*");
        element.style.display = "block";
      });
    });
  });
}

