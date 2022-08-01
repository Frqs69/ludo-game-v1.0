import Pawns from "./pawns.js";
import Board from "./board";

class BluePawns extends Pawns {
	home = document.querySelectorAll("#blue-home");
	color = "bluePawn";
	//!!NEED TO BE 17 TO GAME WORKS FINE
	homeField = Board.fields[48]; //17
	actualField = Board.fields[48]; //17
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

		this.moveBoard.insertAdjacentHTML(
			"afterbegin",
			`<button class="pawn ${this.color} outOfHome" id="3"></button>`
		);

		if (Board.blueExitFields[0].childNodes.length === 4) {
			console.log("WINNER");
			this.winnerScreenDescription.textContent = "Blue";
			this.winnerScreenDescription.style.color = "rgb(47, 0, 255)";
			this.winnerScreen.style.display = "flex";
		}
		target.remove();
	};
}

export default new BluePawns();
