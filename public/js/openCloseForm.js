export function openCloseForm() {
  document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const addServerForm = document.getElementById("addForm");
    const cancelButton = document.getElementById("cancelAdd");

    addButton.addEventListener("click", function () {
      addServerForm.classList.toggle("hidden");
      addButton.classList.toggle("hidden");
    });

    cancelButton.addEventListener("click", function () {
      addServerForm.classList.toggle("hidden");
      addButton.classList.toggle("hidden");
    });
  });
}
