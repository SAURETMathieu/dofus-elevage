const colorPicker2 = document.getElementById("update-color");
const selectedColor2 = document.getElementById("update-selected-color");

function convertToHexadecimal(hex) {
  if (hex.length === 3) {
    return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } else {
    return hex;
  }
}

function removeHashTag(){
  colorPicker2.addEventListener("input", function () {
  selectedColor2.value = colorPicker2.value.substring(1);
});
}

function colorPickerValue(){
  selectedColor2.addEventListener("input", function (event) {
  const input = event.target;
  const currentValue = input.value;
  const filteredValue = currentValue.replace(/[^0-9a-fA-F]+/g, "");

  if (currentValue !== filteredValue) {
    input.value = filteredValue;
  }

  const isHexadecimal = /^([0-9A-F]{3}){1,2}$/i.test(
    convertToHexadecimal(input.value)
  );

  if (isHexadecimal) {
    colorPicker2.value = "#" + convertToHexadecimal(input.value);
  }
});
}

export function initColorPicker2() {
  removeHashTag();
  colorPickerValue();
}
