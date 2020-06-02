let guns = [ 'Rock', 'Paper', 'Scissors' ];
let winnerC = 0;
let winnerP = 0;
let pobjednik = '';
const div = document.createElement('div');
div.classList.add('result');
function computerPlay() {
	let compRandom = guns[Math.floor(Math.random() * guns.length)];

	return compRandom;
}

function playerSelect() {
	let playSelect = prompt('');
	let string = playSelect.charAt(0).toUpperCase() + playSelect.slice(1).toLowerCase();

	if (string == 'Rock' || string == 'Paper' || string == 'Scissors') {
		return string;
	}
	else {
		alert("Don't be so stupid pal! Pick Rock, Paper or Scissors");
	}
}

function playRound() {
	computerSelection = computerPlay();
	playerSelection = playerSelect();
	console.log('Comp: ' + computerSelection + ' vs ' + 'Player: ' + playerSelection);
	if (computerSelection == playerSelection) {
		console.log('Draw');
	}
	else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
		pobjednik = 'Player wins!';
		console.log('Player wins!');
	}
	else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
		pobjednik = 'Computer wins!';
		console.log('Computer wins!');
	}
	else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
		pobjednik = 'Player wins!';
		console.log('Player wins!');
	}
	else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
		pobjednik = 'Computer wins!';
		console.log('Computer wins!');
	}
	else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
		pobjednik = 'Computer wins!';
		console.log('Computer wins!');
	}
	else {
		pobjednik = 'Player wins!';
		console.log('Player wins!');
	}
	if (pobjednik == 'Player wins!') {
		winnerP += 1;
	}
	else {
		winnerC += 1;
	}
}

let i = 0;
function game() {
	while (i < 5) {
		playRound();
		++i;
	}
	if (winnerP > winnerC) {
		console.log('Player is a winner, he scored ' + winnerP + ' and computer scored ' + winnerC);
	}
	else {
		console.log('Computer is a winner, he scored ' + winnerC + ' and player scored ' + winnerP);
	}
}
game();
