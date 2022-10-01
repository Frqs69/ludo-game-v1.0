import Pawns from "./pawns.js";
import Board from "./board";
import greenPawns from "./greenPawns.js";
import yellowPawns from "./yellowPawns.js";
import redPawns from "./redPawns.js";
import { renderCommunicate } from "./helpers";

class BluePawns extends Pawns {
	home = document.querySelectorAll("#blue-home");
	color = "bluePawn";
	homeField = Board.fields[17]; //17
	actualField = Board.fields[17]; //17
	endOfFields = Board.fields[15];
	winnerScreen = document.querySelector(".endGameScreen");
	winnerScreenDescription = document.querySelector(
		".endGameScreen_winnerColor"
	);

	//dodaje ruch pionkowi o podaną liczbę z kostki oraz o wybrany target
	//number - liczba wylosowanych oczek
	//target - klikany target
	move = (number, target) => {
		const actualBoard = target.closest(".board_field");
		if (actualBoard === null) return;
		//Odnowienie wielkości tablicy, aby pionek nie wyszedł poza planszę
		if (parseInt(actualBoard.id) + number >= Board.fields.length) {
			const math = Board.fields.length - actualBoard.id - number;
			this.moveBoard = Board.fields[Math.abs(math)];
		} else {
			//ruch pionka po planszy
			const blueMath = parseInt(this.endOfFields.id) - parseInt(actualBoard.id);
			if (
				parseInt(actualBoard.id) + number > parseInt(this.endOfFields.id) &&
				parseInt(actualBoard.id) > parseInt(this.endOfFields.id) - 6 &&
				parseInt(actualBoard.id) <= parseInt(this.endOfFields.id)
			) {
				this.moveBoard =
					Board.blueExitFields[6 - (number - Math.abs(blueMath))];
			} else {
				//dodanie ruchu po reszcie planszy lub w polach domowych
				if (actualBoard.classList.contains("blueExit")) {
					if (parseInt(actualBoard.id) - number < 0) return;
					this.moveBoard =
						Board.blueExitFields[parseInt(actualBoard.id) - number];
				} else {
					this.moveBoard = Board.fields[parseInt(actualBoard.id) + number];
				}
			}
		}

		//sprawdzenie, czy następne pole jest zajmowane przez jakiegoś pionka przeciwnika, jeżeli tak, to zbija pionka
		// prettier-ignore
		if (this.moveBoard.childNodes[0] != undefined && this.moveBoard.childNodes[0].classList.contains("bluePawn") === false) {
			if(this.moveBoard.classList.contains("board_field_yellow") || this.moveBoard.classList.contains("board_field_blue") || this.moveBoard.classList.contains("board_field_red") || this.moveBoard.classList.contains("board_field_green")){
				this.moveBoard.insertAdjacentHTML("afterbegin",`<button class="pawn ${this.color} outOfHome"></button>`);
				this.disableFieldElements();
			} else if (this.moveBoard.childNodes[0].classList.contains("yellowPawn") === true) {
				this.checkIfPawnReturnHome("yellow", yellowPawns);
				this.moveBoard.innerHTML = `<button class="pawn ${this.color} outOfHome"></button>`;
			} else if (this.moveBoard.childNodes[0].classList.contains("greenPawn") === true) {
				this.checkIfPawnReturnHome("green", greenPawns);
				this.moveBoard.innerHTML = `<button class="pawn ${this.color} outOfHome"></button>`;
			} else if (this.moveBoard.childNodes[0].classList.contains("redPawn") === true) {
				this.checkIfPawnReturnHome("red", redPawns);
				this.moveBoard.innerHTML = `<button class="pawn ${this.color} outOfHome"></button>`;
			}
		} else {
			if(this.moveBoard.childNodes[0] != undefined && this.moveBoard.childNodes[0].classList.contains("bluePawn") === true){
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

		if (Board.blueExitFields[0].childNodes.length === 4) {
			this.winnerScreenDescription.textContent = "Blue";
			this.winnerScreenDescription.style.color = "rgb(47, 0, 255)";
			this.winnerScreen.style.display = "flex";
		}
		target.remove();
	};
}

export default new BluePawns();
