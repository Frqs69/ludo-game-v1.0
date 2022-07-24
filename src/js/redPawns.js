import Pawns from "./pawns.js";
import Board from "./board";

class RedPawns extends Pawns {
	home = document.querySelectorAll("#red-home");
	color = "redPawn";
	homeField = Board.fields[31]; //31
	actualField = Board.fields[31]; //31
	endOfFields = Board.fields[29];
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
			const redMath = parseInt(this.endOfFields.id) - parseInt(actualBoard.id);
			if (
				parseInt(actualBoard.id) + number > parseInt(this.endOfFields.id) &&
				parseInt(actualBoard.id) > parseInt(this.endOfFields.id) - 6 &&
				parseInt(actualBoard.id) <= parseInt(this.endOfFields.id)
			) {
				this.moveBoard = Board.redExitFields[6 - (number - Math.abs(redMath))];
			} else {
				//dodanie ruchu po reszcie planszy lub w polach domowych
				if (actualBoard.classList.contains("redExit")) {
					if (parseInt(actualBoard.id) - number < 0) return;
					this.moveBoard =
						Board.redExitFields[parseInt(actualBoard.id) - number];
				} else {
					this.moveBoard = Board.fields[parseInt(actualBoard.id) + number];
				}
			}
		}

		this.moveBoard.insertAdjacentHTML(
			"afterbegin",
			`<button class="pawn ${this.color} outOfHome"></button>`
		);

		if (Board.redExitFields[0].childNodes.length === 4) {
			console.log("WINNER");
			this.winnerScreenDescription.textContent = "Red";
			this.winnerScreenDescription.style.color = "rgb(255, 0, 17)";
			this.winnerScreen.style.display = "flex";
		}
		target.remove();
	};
}

export default new RedPawns();
