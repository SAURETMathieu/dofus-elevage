// export function initCustomSelect() {
//   document.addEventListener("DOMContentLoaded", function () {
//     const classeSelect = document.getElementById("classe");
//     customizeSelect(classeSelect);

//     const updateClasseSelect = document.getElementById("updateClasse");
//     customizeSelect(updateClasseSelect);
//   });
// }

// function customizeSelect(selectElement) {
//   selectElement.addEventListener("change", function () {
//     const selectedOption = this.options[this.selectedIndex];
//     const imgSrc = selectedOption.getAttribute("data-img");

//     if (imgSrc) {
//       const imgElement = document.createElement("img");
//       imgElement.src = imgSrc;
//       imgElement.classList.add("select-img");

//       const textNode = document.createTextNode(selectedOption.textContent);

//       const spanElement = document.createElement("span");
//       spanElement.appendChild(imgElement);
//       spanElement.appendChild(textNode);

//       selectedOption.innerHTML = "";
//       selectedOption.appendChild(spanElement);
//     }
//   });
// }

export function initCustomSelect() {

$(document).ready(function () {
  $("#classe").select2({
    templateResult: function (data) {
      const $option = $(data.element);
      const $img = $option.attr("data-img");
      if ($img) {
        return $(
          '<span><img src="' +
            $img +
            '" class="select-img" /> ' +
            data.text +
            "</span>"
        );
      }
      return data.text;
    },
  });
});

$(document).ready(function () {
  $("#updateClasse").select2({
    templateResult: function (data) {
      const $option = $(data.element);
      const $img = $option.attr("data-img");
      if ($img) {
        return $(
          '<span><img src="' +
            $img +
            '" class="select-img" /> ' +
            data.text +
            "</span>"
        );
      }
      return data.text;
    },
  });
});

}