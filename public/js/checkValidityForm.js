export function createAccountCheck() {
  const nameInput = document.getElementById("name");
  const colorInput = document.getElementById("color");
  const selectedColorInput = document.getElementById("selected-color");
  const serverSelect = document.getElementById("server");
  const nameIndicator = document.getElementById("nameIndicator");
  const colorIndicator = document.getElementById("colorIndicator");
  const serverIndicator = document.getElementById("serverIndicator");

  colorIndicator.style.display = "inline";

  nameInput.addEventListener("input", () =>
    checkValidityAndDisplayIndicator(nameInput, nameIndicator)
  );
  colorInput.addEventListener("input", () =>
    checkValidityAndDisplayIndicator(colorInput, colorIndicator)
  );
  selectedColorInput.addEventListener("input", () =>
    checkValidityAndDisplayIndicator(selectedColorInput, colorIndicator)
  );
  serverSelect.addEventListener("input", () =>
    checkValidityAndDisplayIndicator(serverSelect, serverIndicator)
  );
}

export function updateAccountCheck() {
  const nameInput = document.getElementById("update-name");
  const colorInput = document.getElementById("update-color");
  const selectedColorInput = document.getElementById("update-selected-color");
  const serverSelect = document.getElementById("update-server");
  const nameIndicator = document.getElementById("updateNameIndicator");
  const colorIndicator = document.getElementById("updateColorIndicator");
  const serverIndicator = document.getElementById("updateServerIndicator");

  nameIndicator.style.display = "inline";
  colorIndicator.style.display = "inline";
  serverIndicator.style.display = "inline";

  nameInput.addEventListener("input", () =>
    checkValidityAndDisplayIndicator(nameInput, nameIndicator)
  );
  colorInput.addEventListener("input", () =>
    checkValidityAndDisplayIndicator(colorInput, colorIndicator)
  );
  selectedColorInput.addEventListener("input", () =>
    checkValidityAndDisplayIndicator(selectedColorInput, colorIndicator)
  );
  serverSelect.addEventListener("input", () =>
    checkValidityAndDisplayIndicator(serverSelect, serverIndicator)
  );
}

function checkValidityAndDisplayIndicator(input, indicator) {
    if (input.checkValidity()) {
      indicator.style.display = "inline"; 
    } else {
      indicator.style.display = "none";
    }
}