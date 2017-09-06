const button = document.getElementById('modalBtn');     // Get the modal button
const modal = document.getElementById('simpleModal');   // Get the modal element
const closeBtn = document.getElementById('modalCloseBtn');   // Get the close button

button.addEventListener('click', openModal);    // Added the event listener for opening the modal.

// function for opening the modal
function openModal() {
    console.log('Modal Opened');
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', closeModal);     // Added the event listener for closing the modal.

// function for closing the modal
function closeModal() {
    console.log('Modal Closed');
    modal.style.display = 'none';
}

window.addEventListener('click', clickOutside);     // Added listener to the window to listen to click event.

function clickOutside(e) {
    if (e.target == modal) {
        console.log('Clicked Outside');
        modal.style.display = 'none';
    }
}
