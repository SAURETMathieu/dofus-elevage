const openModalBtn = document.querySelectorAll('.input-update-account');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');
const updateServerForm = document.getElementById('updateForm');
const cancelButton = document.getElementById('update-cancel');
const submitButton = modal.querySelector(".submit");

openModalBtn.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

cancelButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  // TODO patch account
});