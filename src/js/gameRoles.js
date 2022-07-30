import yellowPawns from "./yellowPawns.js";
import greenPawns from "./greenPawns.js";
import redPawns from "./redPawns.js";
import bluePawns from "./bluePawns.js";
import { renderCommunicate } from "./helpers";

class GameRoles {
	turns = {
		greenTurn: true,
		yellowTurn: false,
		blueTurn: false,
		redTurn: false,
	};
	PLAYERS;
	startScreen = document.querySelector(".startScreen");
	infoText = document.querySelector(".comunicateBox_text");
	colors = {
		green: "rgb(0, 255, 64)",
		yellow: "rgb(225, 255, 0)",
		blue: "rgb(47, 0, 255)",
		red: "rgb(255, 0, 17)",
	};
	communicate = "po wykonaniu ruchu możesz rzucić kostką jeszcze raz";

	//renderuje pionki na planszy według ilości graczy
	startGame(btn) {
		console.log("btn", btn);
		console.log(btn.classList.contains("onePlayer"));
		if (btn.classList.contains("onePlayer") === true) {
			greenPawns.load();
			this.PLAYERS = 1;
			this.startScreen.style.display = "none";
		} else if (btn.classList.contains("twoPlayers") === true) {
			greenPawns.load();
			yellowPawns.load();
			this.PLAYERS = 2;
			this.startScreen.style.display = "none";
		} else if (btn.classList.contains("threePlayers") === true) {
			greenPawns.load();
			yellowPawns.load();
			bluePawns.load();
			this.PLAYERS = 3;
			this.startScreen.style.display = "none";
		} else if (btn.classList.contains("fourPlayers") === true) {
			greenPawns.load();
			yellowPawns.load();
			bluePawns.load();
			redPawns.load();
			this.PLAYERS = 4;
			this.startScreen.style.display = "none";
		}
	}

	//sprawdza ruch graczy według ilości graczy, którzy zostali wybrani
	checkAllMoves(players, random) {
		switch (players) {
			case 1:
				this.onePlayerMovement(random);
				return;
			case 2:
				this.twoPlayersMovement(random);
				return;
			case 3:
				this.threePlayersMovement(random);
				return;
			case 4:
				this.fourPlayersMovement(random);
				return;
			default:
				return;
		}
	}

	//ustawia ruchygraczy edług ilości graczy
	onePlayerMovement(random) {
		greenPawns.addmove();
		greenPawns.enableHomeElements();
		greenPawns.enableFieldElements();
		if (random === 1 || random === 6) {
			renderCommunicate(this.colors.green, this.communicate);
		} else {
			renderCommunicate(this.colors.green);
		}
	}

	twoPlayersMovement(random) {
		if (this.turns.greenTurn === true) {
			greenPawns.addmove();
			greenPawns.enableHomeElements();
			greenPawns.enableFieldElements();

			if (random === 1 || random === 6) {
				renderCommunicate(this.colors.green, this.communicate);
			} else {
				renderCommunicate(this.colors.green);
				this.turns.greenTurn = false;
				this.turns.yellowTurn = true;
			}
		} else {
			yellowPawns.addmove();
			yellowPawns.enableHomeElements();
			yellowPawns.enableFieldElements();

			if (random === 1 || random === 6) {
				renderCommunicate(this.colors.yellow, this.communicate);
			} else {
				renderCommunicate(this.colors.yellow);
				this.turns.yellowTurn = false;
				this.turns.greenTurn = true;
			}
		}
	}

	threePlayersMovement(random) {
		if (this.turns.greenTurn === true) {
			greenPawns.addmove();
			greenPawns.enableHomeElements();
			greenPawns.enableFieldElements();

			if (random === 1 || random === 6) {
				renderCommunicate(this.colors.green, this.communicate);
			} else {
				renderCommunicate(this.colors.green);
				this.turns.greenTurn = false;
				this.turns.yellowTurn = true;
			}
		} else if (this.turns.yellowTurn === true) {
			yellowPawns.addmove();
			yellowPawns.enableHomeElements();
			yellowPawns.enableFieldElements();
			if (random === 1 || random === 6) {
				renderCommunicate(this.colors.yellow, this.communicate);
			} else {
				renderCommunicate(this.colors.yellow);
				this.turns.yellowTurn = false;
				this.turns.blueTurn = true;
			}
		} else if (this.turns.blueTurn === true) {
			bluePawns.addmove();
			bluePawns.enableHomeElements();
			yellowPawns.enableFieldElements();
			bluePawns.enableFieldElements();

			if (random === 1 || random === 6) {
				renderCommunicate(this.colors.blue, this.communicate);
			} else {
				renderCommunicate(this.colors.blue);
				this.turns.blueTurn = false;
				this.turns.greenTurn = true;
			}
		}
	}

	fourPlayersMovement(random) {
		if (this.turns.greenTurn === true) {
			greenPawns.addmove();
			greenPawns.enableHomeElements();
			greenPawns.enableFieldElements();

			if (random === 1 || random === 6) {
				renderCommunicate(this.colors.green, this.communicate);
			} else {
				renderCommunicate(this.colors.green);
				this.turns.greenTurn = false;
				this.turns.yellowTurn = true;
			}
		} else if (this.turns.yellowTurn === true) {
			yellowPawns.addmove();
			yellowPawns.enableHomeElements();
			yellowPawns.enableFieldElements();

			if (random === 1 || random === 6) {
				renderCommunicate(this.colors.yellow, this.communicate);
			} else {
				renderCommunicate(this.colors.yellow);
				this.turns.yellowTurn = false;
				this.turns.blueTurn = true;
			}
		} else if (this.turns.blueTurn === true) {
			bluePawns.addmove();
			bluePawns.enableHomeElements();
			bluePawns.enableFieldElements();

			if (random === 1 || random === 6) {
				renderCommunicate(this.colors.blue, this.communicate);
			} else {
				renderCommunicate(this.colors.blue);
				this.turns.blueTurn = false;
				this.turns.redTurn = true;
			}
		} else if (this.turns.redTurn === true) {
			redPawns.addmove();
			redPawns.enableHomeElements();
			redPawns.enableFieldElements();

			renderCommunicate(this.colors.red);
			if (random === 1 || random === 6) {
				renderCommunicate(this.colors.red, this.communicate);
			} else {
				renderCommunicate(this.colors.red);
				this.turns.redTurn = false;
				this.turns.greenTurn = true;
			}
		}
	}
}

export default new GameRoles();
