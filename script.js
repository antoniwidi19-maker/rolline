document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('actionBtn');
    const message = document.getElementById('message');

    actionBtn.addEventListener('click', () => {
        message.classList.toggle('hidden');
    });
});
