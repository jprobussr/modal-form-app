const openModalBtn = document.querySelector('.open-modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-modal-btn');

const modalForm = document.getElementById('modalForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modalOverlay.classList.add('hidden');
  }
});

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (!nameValue || !emailValue || !messageValue) {
    alert('Please fill out all fields.');
    return;
  }

  alert('Form submitted successfully!');
  modalForm.reset();
  modalOverlay.classList.add('hidden');
});
