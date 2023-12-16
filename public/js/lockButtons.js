import { updateTypeOfCharacter } from "./requestUpdate.js";

export function initLockButtons() {
  const lockButtons = document.querySelectorAll(
    "button.table__td-type[data-toggle='update-type']"
  );
  lockButtons.forEach((button) => {
    button.addEventListener("click", async function (event) {
      const tdElement = event.currentTarget.closest("td");
      const type = tdElement.dataset.type;
      const lockIcon = tdElement.querySelector(".lock-icon");
      const characterId = tdElement.closest("tr").dataset.id;

      lockIcon.classList.remove("fa-lock", "fa-lock-open");

      if (type === "public") {
        tdElement.dataset.type = "private";
        lockIcon.classList.add("fa-lock");
        lockIcon.style.color = "yellow";
        await updateTypeOfCharacter("private", characterId);
      } else {
        tdElement.dataset.type = "public";
        lockIcon.classList.add("fa-lock-open");
        lockIcon.style.color = "green";
        await updateTypeOfCharacter("public", characterId);
      }
    });
  });
}
