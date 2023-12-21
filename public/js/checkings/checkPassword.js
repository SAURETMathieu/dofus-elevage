const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('passwordconfirm');
const passwordIndicators = document.querySelectorAll(
  '.valid-indicator-password',
);

function checkPasswordsMatch() {
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  if (password === passwordConfirm) {
    passwordIndicators.forEach((indicator) => {
      indicator.style.display = 'inline';
    });
  } else {
    passwordIndicators.forEach((indicator) => {
      indicator.style.display = 'none';
    });
  }
}

passwordInput.addEventListener('input', checkPasswordsMatch);
passwordConfirmInput.addEventListener('input', checkPasswordsMatch);
