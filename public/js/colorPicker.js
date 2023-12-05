function expandHexColor(hex) {
  if (hex.length === 3) {
      return hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  else {
      return hex;
  }
}

const colorPicker = document.getElementById('color');
const selectedColor = document.getElementById('selected-color');

colorPicker.addEventListener('input', function() {
  selectedColor.value = colorPicker.value.substring(1);
});

selectedColor.addEventListener('input', function(event) {
  const input = event.target;
  const currentValue = input.value;
  const filteredValue = currentValue.replace(/[^0-9a-fA-F]+/g, '');

  if (currentValue !== filteredValue) {
    input.value = filteredValue;
  }

  const isHexadecimal = /^([0-9A-F]{3}){1,2}$/i.test(expandHexColor(input.value));
  
  if (isHexadecimal) {
      colorPicker.value = "#"+expandHexColor(input.value);
  }
});

const colorPicker2 = document.getElementById('update-color');
const selectedColor2 = document.getElementById('update-selected-color');

colorPicker2.addEventListener('input', function() {
  selectedColor2.value = colorPicker2.value.substring(1);
});

selectedColor2.addEventListener('input', function(event) {
  const input = event.target;
  const currentValue = input.value;
  const filteredValue = currentValue.replace(/[^0-9a-fA-F]+/g, '');

  if (currentValue !== filteredValue) {
    input.value = filteredValue;
  }

  const isHexadecimal = /^([0-9A-F]{3}){1,2}$/i.test(expandHexColor(input.value));
  
  if (isHexadecimal) {
      colorPicker2.value = "#"+expandHexColor(input.value);
  }
});