const card = document.getElementById('card');
const cardButton = document.getElementById('cardButton');
const cardSuccess = document.getElementById('cardSuccess');
const emailInput = document.getElementById('email');
const successEmail = document.getElementById('successEmail');
const successButton = document.getElementById('successButton');
const hiddenLabel = document.getElementById('hiddenLabel');

// Validar correo electrónico
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Manejar la suscripción
const handleSubscription = () => {
    const emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
        showEmailError();
        return; // Detener la ejecución si el correo no es válido
    }

    showSuccessMessage(emailValue);
};

// Mostrar error de email
const showEmailError = () => {
    emailInput.classList.add('card__input-danger');
    hiddenLabel.classList.remove('hidden');
};

// Mostrar mensaje de éxito
const showSuccessMessage = (email) => {
    card.classList.add('hidden');
    cardSuccess.classList.remove('hidden');
    emailInput.classList.remove('card__input-danger');
    successEmail.textContent = email; // Usar textContent en lugar de innerHTML
};

// Manejar el botón de éxito
const handleSuccessDismiss = () => {
    card.classList.remove('hidden');
    cardSuccess.classList.add('hidden');
    emailInput.classList.remove('card__input-danger');
    emailInput.value = '';
    hiddenLabel.classList.add('hidden'); // Ocultar el mensaje de error
};

// Añadir manejadores de eventos
document.addEventListener('DOMContentLoaded', () => {
    cardButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleSubscription();
    });

    successButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleSuccessDismiss();
    });
});
