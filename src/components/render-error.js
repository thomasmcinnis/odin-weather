export default function renderError(value) {
    const dialog = document.querySelector('dialog');
    const closeButton = document.querySelector('dialog button');
    const errorMessage = document.querySelector('dialog p');
    const message = `Couldn't find a result when searching ${value}.`;
    errorMessage.textContent = message;

    dialog.showModal();

    closeButton.addEventListener('click', () => {
        dialog.close();
    });
}
