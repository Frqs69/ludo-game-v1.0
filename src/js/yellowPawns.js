import Pawns from "./pawns.js";
import Board from "./board";
import greenPawns from "./greenPawns.js";
import bluePawns from "./bluePawns.js";
import redPawns from "./redPawns.js";
import { renderCommunicate } from "./helpers";

class YellowPawns extends Pawns {
	home = document.querySelectorAll("#yellow-home");
	color = "yellowPawn";
	//!!NEED TO BE 3 TO GAME WORKS FINE
	homeField = Board.fields[3]; //3
	actualField = Board.fields[3]; //3
	winnerScreen = document.querySelector(".endGameScreen");
	winnerScreenDescription = document.querySelector(
		".endGameScreen_winnerColor"
	);

	//dodaje ruch pionkowi o podaną liczbę z kostki oraz o wybrany target
	//number - liczba wylosowanych oczek
	//target - klikany target
	move(number, target) {
		const actualBoard = target.closest(".board_field");
		if (actualBoard === null) return;

		//Odnowienie wielkości tablicy, aby pionek nie wyszedł poza planszę
		if (parseInt(actualBoard.id) + number >= Board.fields.length) {
			const math = Board.fields.length - actualBoard.id - number;

			//wejście pionka do wyjścia, jak jest przed nowym obiegiem planszy
			if (Math.abs(math) > 1) {
				this.moveBoard = Board.yellowExitFields[Math.abs(math) - 2];
			} else {
				this.moveBoard = Board.fields[Math.abs(math)];
			}
			//jeżeli aktualne pole pionka będzie nowym obiegu planszy na polu 2 to pionek wchodzi do domu
		} else if (actualBoard === Board.fields[1]) {
			this.moveBoard = Board.yellowExitFields[number - 1];
			//jeżeli aktualne pole pionka będzie na nowym obiegu planszy na polu 1 to pionek wchodzi do domu lub idzie na pole 2
		} else if (actualBoard === Board.fields[0]) {
			if (number === 1) {
				this.moveBoard = Board.fields[1];
			} else {
				this.moveBoard = Board.yellowExitFields[number - 2];
			}
		} else {
			//dodanie ruchu po reszcie planszy lub w polach domowych
			if (actualBoard.classList.contains("yellowExit")) {
				if (parseInt(actualBoard.id) + number > 5) return;
				this.moveBoard =
					Board.yellowExitFields[parseInt(actualBoard.id) + number];
			} else {
				this.moveBoard = Board.fields[parseInt(actualBoard.id) + number];
			}
		}

		//sprawdzenie, czy następne pole jest zajmowane przez jakiegoś pionka przeciwnika, jeżeli tak, to zbija pionka
		// prettier-ignore
		if (this.moveBoard.childNodes[0] != undefined && this.moveBoard.childNodes[0].classList.contains("yellowPawn") === false) {
			if(this.moveBoard.classList.contains("board_field_yellow") || this.moveBoard.classList.contains("board_field_blue") || this.moveBoard.classList.contains("board_field_red") || this.moveBoard.classList.contains("board_field_green")){
				this.moveBoard.insertAdjacentHTML("afterbegin",`<button class="pawn ${this.color} outOfHome"></button>`);
				this.disableFieldElements();
			} else if (this.moveBoard.childNodes[0].classList.contains("greenPawn") === true) {
				this.checkIfPawnReturnHome("green", greenPawns);
				this.moveBoard.innerHTML = `<button class="pawn ${this.color} outOfHome"></button>`;
			} else if (this.moveBoard.childNodes[0].classList.contains("bluePawn") === true) {
				this.checkIfPawnReturnHome("blue", bluePawns);
				this.moveBoard.innerHTML = `<button class="pawn ${this.color} outOfHome"></button>`;
			} else if (this.moveBoard.childNodes[0].classList.contains("redPawn") === true) {
				this.checkIfPawnReturnHome("red", redPawns);
				this.moveBoard.innerHTML = `<button class="pawn ${this.color} outOfHome"></button>`;
			}
		} else {
			if(this.moveBoard.childNodes[0] != undefined && this.moveBoard.childNodes[0].classList.contains("yellowPawn") === true){
				renderCommunicate(this.color,'Na jednym polu może stać tylko jeden pionek')
				return 
			}
			this.moveBoard.insertAdjacentHTML(
				"afterbegin",
				`<button class="pawn ${this.color} outOfHome"></button>`
			);

			this.throwCubeBtn.classList.add("btn_animation");
			this.disableFieldElements();
		}

		if (Board.yellowExitFields[5].childNodes.length === 4) {
			console.log("WINNER");
			this.winnerScreenDescription.textContent = "Yellow";
			this.winnerScreenDescription.style.color = "rgb(225, 255, 0)";
			this.winnerScreen.style.display = "flex";
		}

		target.remove();
	}
}

export default new YellowPawns();
