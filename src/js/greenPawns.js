import Pawns from "./pawns.js";
import Board from "./board";

class GreenPawns extends Pawns {
	home = document.querySelectorAll("#green-home");
	color = "greenPawn";
	homeField = Board.fields[45];
	actualField = Board.fields[45];
	endOfFields = Board.fields[43];

	//dodaje ruch pionkowi o podaną liczbę z kostki oraz o wybrany target
	//number - liczba wylosowanych oczek
	//target - klikany target
	move(number, target) {
		const actualBoard = target.closest(".board_field");
		if (actualBoard === null) return;
		//Odnowienie wielkości tablicy, aby pionek nie wyszedł poza planszę
		if (parseInt(actualBoard.id) + number >= Board.fields.length) {
			const math = Board.fields.length - actualBoard.id - number;
			this.moveBoard = Board.fields[Math.abs(math)];
		} else {
			//ruch pionka po planszy
			const greenMath =
				parseInt(this.endOfFields.id) - parseInt(actualBoard.id);
			if (
				parseInt(actualBoard.id) + number > parseInt(this.endOfFields.id) &&
				parseInt(actualBoard.id) > parseInt(this.endOfFields.id) - 6 &&
				parseInt(actualBoard.id) <= parseInt(this.endOfFields.id)
			) {
				this.moveBoard =
					Board.greenExitFields[number - Math.abs(greenMath) - 1];
			} else {
				//dodanie ruchu po reszcie planszy lub w polach domowych
				if (actualBoard.classList.contains("greenExit")) {
					if (parseInt(actualBoard.id) + number > 5) return;
					this.moveBoard =
						Board.greenExitFields[parseInt(actualBoard.id) + number];
				} else {
					this.moveBoard = Board.fields[parseInt(actualBoard.id) + number];
				}
			}
		}

		this.moveBoard.insertAdjacentHTML(
			"afterbegin",
			`<div class="pawn ${this.color} outOfHome"></div>`
		);
		target.remove();
	}
}

export default new GreenPawns();
