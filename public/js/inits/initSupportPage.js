import sendSupport from '../requests/post/sendSupport.js';

const formElement = document.querySelector('.support__form');

function initButtons() {
  const submitButton = document.querySelector('.support__is-success');

  submitButton.addEventListener('click', async (event) => {
    try {
      event.preventDefault();
      const userId = formElement.dataset.id;
      const isSuccess = await sendSupport(userId);
      if (isSuccess) {
        formElement.reset();
      }
    } catch (error) {
      console.error('Error', error);
    }
  });

  const resetButton = document.querySelector('.support__is-cancel');

  resetButton.addEventListener('click', () => {
    formElement.reset();
  });
}

initButtons();
