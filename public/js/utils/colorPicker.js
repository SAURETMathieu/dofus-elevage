const colorPicker = document.getElementById('color');
const selectedColor = document.getElementById('selected-color');

export function rgbToHex(rgb) {
  const rgbArray = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  const hex = (x) => (`0${parseInt(x, 10).toString(16)}`).slice(-2);
  return `#${hex(rgbArray[1])}${hex(rgbArray[2])}${hex(rgbArray[3])}`;
}

function convertToHexadecimal(hex) {
  if (hex.length === 3) {
    return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  return hex;
}

function removeHashTag() {
  colorPicker.addEventListener('input', () => {
    selectedColor.value = colorPicker.value.substring(1);
  });
}

function colorPickerValue() {
  selectedColor.addEventListener('input', (event) => {
    const input = event.target;
    const currentValue = input.value;
    const filteredValue = currentValue.replace(/[^0-9a-fA-F]+/g, '');

    if (currentValue !== filteredValue) {
      input.value = filteredValue;
    }

    const isHexadecimal = /^([0-9A-F]{3}){1,2}$/i.test(
      convertToHexadecimal(input.value),
    );

    if (isHexadecimal) {
      colorPicker.value = `#${convertToHexadecimal(input.value)}`;
    }
  });
}

export function initColorPicker() {
  removeHashTag();
  colorPickerValue();
}
