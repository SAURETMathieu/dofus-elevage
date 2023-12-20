// variable pour savoir si on choisit la race pour le male ou la femelle
document.addEventListener('DOMContentLoaded', () => {
  let currentSelectedBreed = 0;

  const openMaleButton = document.getElementById('update-open-breed-male');
  const openFemaleButton = document.getElementById('update-open-breed-female');
  const closeBreed = document.getElementById('update-close-breed');

  const breedList = document.getElementById('update-breed-list');
  const breedFemaleValue = document.getElementById('update-breed-female-value');
  const breedMaleValue = document.getElementById('update-breed-male-value');

  // Récupère tout les figures et les images dans la liste des races
  const figures = document.querySelectorAll('.update-figure-dd');
  figures.forEach((figure) => {
    figure.addEventListener('click', () => {
      const img = figure.querySelector('img');
      const selectedImageUrl = img.src;
      const selectedImageAlt = img.alt;
      const figcaption = figure.dataset.id;

      // on insere l'image dans le formulaire
      // on récupère la valeur que l'on veut envoyer dans la base de données
      if (currentSelectedBreed === 2) {
        openFemaleButton.innerHTML = `<img src='${selectedImageUrl}' alt='${selectedImageAlt}'>`;
        breedFemaleValue.value = figcaption;
      }
      if (currentSelectedBreed === 1) {
        openMaleButton.innerHTML = `<img src='${selectedImageUrl}' alt='${selectedImageAlt}'>`;
        breedMaleValue.value = figcaption;
      }
      // on remet invisible la liste des races
      breedList.classList.toggle('hidden');
    });
  });

  openMaleButton.addEventListener('click', () => {
    currentSelectedBreed = 1;
    breedList.classList.toggle('hidden');
  });

  openFemaleButton.addEventListener('click', () => {
    currentSelectedBreed = 2;
    breedList.classList.toggle('hidden');
  });

  closeBreed.addEventListener('click', () => {
    breedList.classList.toggle('hidden');
  });
});
