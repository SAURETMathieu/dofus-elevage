//variable pour savoir si on choisit la race pour le male ou la femelle
document.addEventListener("DOMContentLoaded", function () {
  let currentSelectedBreed = 0;

  const openMaleButton = document.getElementById("open-breed-male");
  const openFemaleButton = document.getElementById("open-breed-female");
  const closeBreed = document.getElementById("close-breed");

  const breedList = document.getElementById("breed-list");
  const breedFemaleValue = document.getElementById("breed-female-value");
  const breedMaleValue = document.getElementById("breed-male-value");

  //Récupère tout les figures et les images dans la liste des races
  const figures = document.querySelectorAll(".figure-dd");
  figures.forEach((figure) => {
    figure.addEventListener("click", function () {
      const img = figure.querySelector("img");
      const selectedImageUrl = img.src;
      const selectedImageAlt = img.alt;
      const figcaption = figure.querySelector(".figcaption-dd");
      
      //on insere l'image dans le formulaire 
      //on récupère la valeur que l'on veut envoyer dans la base de données
      if(currentSelectedBreed === 2){
        openFemaleButton.innerHTML = `<img src='${selectedImageUrl}' alt='${selectedImageAlt}'>`; 
        breedFemaleValue.value = figcaption.textContent;
      }
      if(currentSelectedBreed === 1){
        openMaleButton.innerHTML = `<img src='${selectedImageUrl}' alt='${selectedImageAlt}'>`;
        breedMaleValue.value = figcaption.textContent;
      }
      
     
      // on remet invisible la liste des races
      breedList.classList.toggle("hidden");
    });
  });

  openMaleButton.addEventListener("click", function () {
    currentSelectedBreed = 1;
    breedList.classList.toggle("hidden");
  });

  openFemaleButton.addEventListener("click", function () {
    currentSelectedBreed = 2;
    breedList.classList.toggle("hidden");
  });

  closeBreed.addEventListener("click", function () {
    breedList.classList.toggle("hidden");
  });
});
