const button = document.getElementById('modalBtn');     // Get the modal button
const modal = document.getElementById('simpleModal');   // Get the modal element
const closeBtn = document.getElementById('modalCloseBtn');   // Get the close button

button.addEventListener('click', openModal);    // Added the event listener for opening the modal.

// function for opening the modal
function openModal() {
    console.log('Modal Opened');
    modal.style.display = 'block';
}