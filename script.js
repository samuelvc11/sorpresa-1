const messages = [
    "¿Estás segura?",
    "¿¿Segurísima??",
    "No te creo...",
    "Mi amor por favor",
    "Te invito a pensarlo nuevamente...",
    "Amor me vas a hacer sentir triste...",
    "Voy a llorar ;(",
    "El que diga que no es gay",
    "Bueno, respeto tu decisión, no vuelvo a molestar...",
    "Tan mk, yo sé que vas a decir que sí ❤️",
    ""
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.sí-button');

    // Cambiar el texto del botón "No"
    noButton.textContent = messages[messageIndex];
    
    // Verificar si es el último mensaje
    if (messageIndex === messages.length - 1) {
        yesButton.classList.add("expand");
        yesButton.textContent = "SÍ ❤️";
    } else {
        // Aumentar el tamaño del botón "Sí" progresivamente
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.45}px`;
    }

    // Pasar al siguiente mensaje
    messageIndex = Math.min(messageIndex + 1, messages.length - 1);
}

function handleYesClick() {
    window.location.href = "yes.html";
}
