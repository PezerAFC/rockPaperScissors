let winnerC = 0;
let winnerP = 0;
let pobjednik = '';
let guns = [ 'Rock', 'Paper', 'Scissors' ];

function computerPlay() {
	let compRandom = guns[Math.floor(Math.random() * guns.length)];
	return compRandom;
}
let igrac = document.querySelector('#Rock');
let igrac1 = document.querySelector('#Paper');
let igrac2 = document.querySelector('#Scissors');

document.addEventListener('click', function(e) {
	if (e.target == igrac) {
		playerSelection = igrac;
		computerSelection = computerPlay();

		if (computerSelection == e.target.id) {
			pobjednik = 'Draw';
			//let para = document.createElement('p');
			para.style = "background-color: white; border: black 1px solid';";
			para.innerText = "Rock can't beat Rock, it's a DRAW";
			//div.appendChild(para);
			console.log('Draw');
		}
		else if (computerSelection == 'Paper' && playerSelection == igrac) {
			pobjednik = 'Computer wins!';
			winnerC += 1;
			console.log('Computer wins!');
			//let para = document.createElement('p');
			para.style = "background-color: red; border: black 1px solid';";
			para.innerText = 'Comp use PAPER: ' + winnerC + ':' + winnerP + ' :ROCK used by Player';
			//div.appendChild(para);
		}
		else if (computerSelection == 'Scissors' && playerSelection == igrac) {
			pobjednik = 'Player wins!';
			winnerP += 1;
			console.log('Player wins!');
			//let para = document.createElement('p');
			para.style = "background-color: green; border: black 1px solid';";
			para.innerText = 'Comp use SCISSORS: ' + winnerC + ':' + winnerP + ' :ROCK used by Player';
			//div.appendChild(para);
		}
	}
	else if (e.target == igrac1) {
		playerSelection = igrac1;
		computerSelection = computerPlay();
		if (computerSelection == e.target.id) {
			pobjednik = 'Draw';
			para.style = "background-color: white; border: black 1px solid';";
			//let para = document.createElement('p');
			para.innerHTML = "Paper can't beat Paper, it's a DRAW";
			//div.appendChild(para);
			console.log('Draw');
		}
		else if (computerSelection == 'Scissors' && playerSelection == igrac1) {
			pobjednik = 'Computer wins!';
			winnerC += 1;
			console.log('Computer wins!');
			//let para = document.createElement('p');
			para.style = "background-color: red; border: black 1px solid';";
			para.innerHTML = 'Comp use SCISSORS: ' + winnerC + ':' + winnerP + ' :PAPER used by Player';
			//div.appendChild(para);
		}
		else if (computerSelection == 'Rock' && playerSelection == igrac1) {
			pobjednik = 'Player wins!';
			winnerP += 1;
			console.log('Player wins!');
			//let para = document.createElement('p');
			para.style = "background-color: green; border: 1px solid';";
			para.innerHTML = 'Comp use ROCK: ' + winnerC + ':' + winnerP + ' :PAPER used by Player';
			//div.appendChild(para);
		}
	}
	else if (e.target == igrac2) {
		playerSelection = igrac2;
		computerSelection = computerPlay();
		if (computerSelection == e.target.id) {
			pobjednik = 'Draw';
			para.style = "background-color: white; border: black 1px solid';";
			//let para = document.createElement('p');
			para.innerHTML = "Scissors can't beat Scissors, it's a DRAW";
			//div.appendChild(para);
			console.log('Draw');
		}
		else if (computerSelection == 'Rock' && playerSelection == igrac2) {
			pobjednik = 'Computer wins!';
			winnerC += 1;
			console.log('Computer wins!');
			//let para = document.createElement('p');
			para.style = "background-color: red; border: black 1px solid';";
			para.innerHTML = 'Comp use ROCK: ' + winnerC + ':' + winnerP + ' :SCISSORS used by Player';
			//div.appendChild(para);
		}
		else if (computerSelection == 'Paper' && playerSelection == igrac2) {
			pobjednik = 'Player wins!';
			winnerP += 1;
			console.log('Player wins!');
			//let para = document.createElement('p');
			para.style = "background-color: green; border: 1px solid';";
			para.innerHTML = 'Comp use PAPER: ' + winnerC + ':' + winnerP + ' :SCISSORS used by Player';
			//div.appendChild(para);
		}
	}
	if (winnerP == 5) {
		//let para = document.createElement('p');
		para.style = "background-color: green; border: black 1px solid';";
		para.innerHTML = 'Winner is player, and result is: ' + winnerP + ':' + winnerC;
		//div.appendChild(para);
		alert('Winner is player, and result is: ' + winnerP + ':' + winnerC);
		winnerC = 0;
		winnerP = 0;
	}
	else if (winnerC == 5) {
		//let para = document.createElement('p');
		para.innerHTML = 'Winner is computer, and result is: ' + winnerC + ':' + winnerP;
		para.style = "background-color: red; border: black 1px solid';";
		//div.appendChild(para);
		alert('Winner is computer, and result is: ' + winnerC + ':' + winnerP);
		winnerC = 0;
		winnerP = 0;
	}
});
const body = document.querySelector('#body');
let div = document.createElement('div');
div.classList.add('result');
body.appendChild(div);
let para = document.createElement('p');
para.textContent = 'GREEN color is for PLAYER win, RED is for COMPUTER win';
div.appendChild(para);
