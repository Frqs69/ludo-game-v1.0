import Pawns from "./pawns.js";
import Board from "./board";

class YellowPawns extends Pawns {
	home = document.querySelectorAll("#yellow-home");
	color = "yellowPawn";
	homeField = Board.fields[3];
	actualField = Board.fields[3];

	//dodaje ruch pionkowi o podaną liczbę z kostki oraz o wybrany target
	//number - liczba wylosowanych oczek
	//target - klikany target
	move = (number, target) => {
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

		this.moveBoard.insertAdjacentHTML(
			"afterbegin",
			`<div class="pawn ${this.color} outOfHome" id="3"></div>`
		);
		target.remove();
		this.addmove();
	};
}

export default new YellowPawns();
