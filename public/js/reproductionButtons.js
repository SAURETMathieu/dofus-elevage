import { updateReproOfCharacter } from "./requestUpdate.js";

const daysInFrench = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

export function initReproductionButtons() {
  const reproductionButtons = document.querySelectorAll(
    ".table__td-button-reproduction"
  );
  reproductionButtons.forEach((button) => {
    button.addEventListener("click", async function (event) {
      const tdElement = event.target.closest("tr");
      const characterId = tdElement.dataset.id;
      const nbReproElement = tdElement.querySelector(".nb-repro");
      const dateReproElement = tdElement.querySelector(".date-repro");
      const dateBirthElement = tdElement.querySelector(".date-birth");

      const nbReproValue = parseInt(nbReproElement.dataset.repro, 10);
      const gestationTime = parseInt(dateBirthElement.dataset.gestation,10);

      let newNbRepro = nbReproValue + 1;
      if (newNbRepro > 20) {
        newNbRepro = 20;
      }

      const character = await updateReproOfCharacter(newNbRepro, gestationTime, characterId);

      if (character) {
        const conditionElement = tdElement.querySelector(".condition");

        nbReproElement.dataset.repro = character.reproduction;
        conditionElement.classList.remove("feconde");

        if (character.reproduction > 19) {
          nbReproElement.textContent = "Stérile";
          nbReproElement.style.color = "red";
          conditionElement.textContent = "Stérile";
        } else {
          nbReproElement.textContent = character.reproduction + " / 20";
          conditionElement.textContent = "Fecondée";
          conditionElement.classList.add("fecondee");
        }

        const characterDate = new Date(character.date);

        const dayRepro = daysInFrench[characterDate.getDay()];

        const dateRepro = characterDate.toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        });

        const hour = characterDate.getHours().toString().padStart(2, "0");
        const minutes = characterDate.getMinutes().toString().padStart(2, "0");
        const hourRepro = hour + "h" + minutes;

        dateReproElement.children[0].textContent = dayRepro;
        dateReproElement.children[1].textContent = dateRepro;
        dateReproElement.children[2].textContent = hourRepro;

        const characterBirth = new Date(character.date);
        characterBirth.setMinutes(characterBirth.getMinutes() + gestationTime);

        const dayBirth = daysInFrench[characterBirth.getDay()];

        const dateBirth = characterBirth.toLocaleDateString("fr-FR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        });

        const hoursBirth = characterBirth.getHours().toString().padStart(2, "0");
        const minutesBirth = characterBirth.getMinutes().toString().padStart(2, "0");
        const hourBirth = hoursBirth + "h" + minutesBirth;

        dateBirthElement.children[0].textContent = dayBirth;
        dateBirthElement.children[1].textContent = dateBirth;
        dateBirthElement.children[2].textContent = hourBirth;


        // TODO modifier l'ordre du tableau
      }
    });
  });
}
