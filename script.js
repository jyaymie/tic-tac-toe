// Things we need to interact with
const cellsEl = document.querySelectorAll('.cell');
const resetBtnEl = document.querySelector('.reset-button');
const playerNameEl = document.querySelector('.player-name');

// Constants
let PLAYER_X_TURN = true;
let PLAYER_O_TURN = false;
let playerXCells = [];
let playerOCells = [];
const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

// Functions
// Give the user an option to replay the game
resetBtnEl.addEventListener('click', reloadPage);

function reloadPage() {
	document.location.reload();
}

// What happens when the user selects a cell
function userAction() {
	cellsEl.forEach(function (cell) {
		// Each cell will only respond to the initial click
		cell.addEventListener('click', handleClick, { once: true });
	});
}

function handleClick(event) {
	if (PLAYER_X_TURN) {
		// Mark the player's token in the selected cell
		event.target.innerText = 'X';
		// Use an array to keep track of the player's selected cells
		playerXCells.push(parseInt(event.target.id));
		PLAYER_X_TURN = !PLAYER_X_TURN;
		playerNameEl.innerHTML = 'O';
		// checkIfXWins();
	} else {
		event.target.innerText = 'O';
		playerOCells.push(parseInt(event.target.id));
		PLAYER_X_TURN = true;
		playerNameEl.innerHTML = 'X';
		// checkIfOWins();
	}
}

userAction();

let xHasWinCondition;
function checkIfXWins() {
	if (playerXCells.length === 3) {
		winConditions.find(function (element) {
			return (
				element[0] == playerXCells[0] &&
				element[1] == playerXCells[1] &&
				element[2] == playerXCells[2]
			);
		});
	}

	const currentWinCondition = winConditions[i];
	xHasWinCondition = currentWinCondition.find((element) => {
		return playerXCells.includes(element);
	});
	console.log(xHasWinCondition);
}

let oHasWinCondition;
function checkIfOWins() {
	for (let i = 0; i < winConditions.length - 1; i++) {
		const currentWinCondition = winConditions[i];
		oHasWinCondition = currentWinCondition.find((element) => {
			return playerOCells.includes(element);
		});
	}
}



