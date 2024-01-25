export default function checkboxInit() {
  const checkbox = document.getElementById('closed-value');
  checkbox.addEventListener('change', (event) => {
    const charactersToHide = document.querySelectorAll('.closed');
    charactersToHide.forEach((characterToHide) => {
      if (event.target.checked) {
        characterToHide.style.display = '';
      } else {
        characterToHide.style.display = 'none';
      }
    });
  });
}
