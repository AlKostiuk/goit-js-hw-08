const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input');
const teatareaInput = feedbackForm.querySelector('textarea');

feedbackForm.addEventListener('input', handleSaveFormInput);
feedbackForm.addEventListener('submit', handleSubmit);

function handleSaveFormInput() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailInput.value, message: teatareaInput.value })
  );
}

if (localStorage.getItem('feedback-form-state')) {
  const formInput = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = formInput.email;
  teatareaInput.value = formInput.message;
}

function handleSubmit(event) {
  const localStorageObject = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  console.log(localStorageObject);
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
}
