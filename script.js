// Things we need to interact with
const cellEl = document.querySelectorAll('.cell');
const resetBtn = document.querySelector('.reset-button');

// Add event listeners
resetBtn.addEventListener('click', reloadPage);

// Functions
function reloadPage() {
	document.location.reload();
}

function playGame() {
	// Initialize board
}
