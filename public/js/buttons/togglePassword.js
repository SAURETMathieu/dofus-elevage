export default function tooglePassword() {
  const toggleButtons = document.querySelectorAll('.password-toggle');
  toggleButtons.forEach((button) => {
    const passwordContainer = button.closest('.password-input-container');
    const inputPassword = passwordContainer.querySelector('input');
    button.addEventListener('click', () => {
      const iconeElement = button.querySelector('i');
      if (iconeElement.classList.contains('fa-eye-slash')) {
        inputPassword.type = 'text';
        iconeElement.classList.remove('fa-eye-slash');
        iconeElement.classList.add('fa-eye');
      } else {
        inputPassword.type = 'password';
        iconeElement.classList.remove('fa-eye');
        iconeElement.classList.add('fa-eye-slash');
      }
    });
  });
}
