export default function toggleForm() {
  const addButton = document.getElementById('addButton');
  const addServerForm = document.getElementById('addServerForm');
  const cancelButton = document.getElementById('cancelAdd');

  addButton.addEventListener('click', () => {
    addServerForm.classList.toggle('hidden');
    addButton.classList.toggle('hidden');
  });

  cancelButton.addEventListener('click', () => {
    addServerForm.classList.toggle('hidden');
    addButton.classList.toggle('hidden');
  });
}
