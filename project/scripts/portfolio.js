document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const backdrop = document.getElementById('backdrop');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
            backdrop.style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'none';
            backdrop.style.display = 'none';
        });
    });

    backdrop.addEventListener('click', function () {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        backdrop.style.display = 'none';
    });

    const selectedCardIndex = localStorage.getItem('selectedCardIndex');

    if (selectedCardIndex !== null) {
        const card = document.querySelectorAll('.portfolio-grid .card')[selectedCardIndex];

        if (card) {
            card.click();
        }

        localStorage.removeItem('selectedCardIndex');
    }
});
