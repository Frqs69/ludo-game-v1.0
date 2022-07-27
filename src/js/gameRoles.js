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
	checkAllMoves(players) {
		switch (players) {
			case 1:
				this.onePlayerMovement();
				return;
			case 2:
				this.twoPlayersMovement();
				return;
			case 3:
				this.threePlayersMovement();
				return;
			case 4:
				this.fourPlayersMovement();
				return;
			default:
				return;
		}
	}

	//ustawia ruchygraczy edług ilości graczy
	onePlayerMovement() {
		greenPawns.addmove();
		greenPawns.enableHomeElements();
		greenPawns.enableFieldElements();
		renderCommunicate(this.colors.green);
	}

	twoPlayersMovement() {
		if (this.turns.greenTurn === true) {
			greenPawns.addmove();
			greenPawns.enableHomeElements();
			greenPawns.enableFieldElements();
			this.turns.greenTurn = false;
			this.turns.yellowTurn = true;
			renderCommunicate(this.colors.green);
		} else {
			yellowPawns.addmove();
			yellowPawns.enableHomeElements();
			yellowPawns.enableFieldElements();
			this.turns.yellowTurn = false;
			this.turns.greenTurn = true;
			renderCommunicate(this.colors.yellow);
		}
	}

	threePlayersMovement() {
		if (this.turns.greenTurn === true) {
			greenPawns.addmove();
			greenPawns.enableHomeElements();
			greenPawns.enableFieldElements();
			this.turns.greenTurn = false;
			this.turns.yellowTurn = true;
			renderCommunicate(this.colors.green);
		} else if (this.turns.yellowTurn === true) {
			yellowPawns.addmove();
			yellowPawns.enableHomeElements();
			yellowPawns.enableFieldElements();
			this.turns.yellowTurn = false;
			this.turns.blueTurn = true;
			renderCommunicate(this.colors.yellow);
		} else if (this.turns.blueTurn === true) {
			bluePawns.addmove();
			bluePawns.enableHomeElements();
			yellowPawns.enableFieldElements();
			bluePawns.enableFieldElements();
			this.turns.blueTurn = false;
			this.turns.greenTurn = true;
			renderCommunicate(this.colors.blue);
		}
	}

	fourPlayersMovement() {
		if (this.turns.greenTurn === true) {
			greenPawns.addmove();
			greenPawns.enableHomeElements();
			greenPawns.enableFieldElements();
			this.turns.greenTurn = false;
			this.turns.yellowTurn = true;
			renderCommunicate(this.colors.green);
		} else if (this.turns.yellowTurn === true) {
			yellowPawns.addmove();
			yellowPawns.enableHomeElements();
			yellowPawns.enableFieldElements();
			this.turns.yellowTurn = false;
			this.turns.blueTurn = true;
			renderCommunicate(this.colors.yellow);
		} else if (this.turns.blueTurn === true) {
			bluePawns.addmove();
			bluePawns.enableHomeElements();
			bluePawns.enableFieldElements();
			this.turns.blueTurn = false;
			this.turns.redTurn = true;
			renderCommunicate(this.colors.blue);
		} else if (this.turns.redTurn === true) {
			redPawns.addmove();
			redPawns.enableHomeElements();
			redPawns.enableFieldElements();
			this.turns.redTurn = false;
			this.turns.greenTurn = true;
			renderCommunicate(this.colors.red);
		}
	}
}

export default new GameRoles();
