import yellowPawns from "./yellowPawns.js";
import greenPawns from "./greenPawns.js";
import redPawns from "./redPawns.js";
import bluePawns from "./bluePawns.js";

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
		this.infoText.style.color = "rgb(0, 255, 64)";
		this.infoText.textContent =
			"Wybierz pionka do wykonania ruchu lub wyjścia z domu";
	}

	twoPlayersMovement() {
		if (this.turns.greenTurn === true) {
			greenPawns.addmove();
			greenPawns.enableHomeElements();
			greenPawns.enableFieldElements();
			this.turns.greenTurn = false;
			this.turns.yellowTurn = true;
			this.infoText.style.color = "rgb(0, 255, 64)";
			this.infoText.textContent =
				"Wybierz pionka do wykonania ruchu lub wyjścia z domu";
		} else {
			yellowPawns.addmove();
			yellowPawns.enableHomeElements();
			yellowPawns.enableFieldElements();
			this.turns.yellowTurn = false;
			this.turns.greenTurn = true;
			this.infoText.style.color = "rgb(225, 255, 0)";
		}
	}

	threePlayersMovement() {
		if (this.turns.greenTurn === true) {
			greenPawns.addmove();
			greenPawns.enableHomeElements();
			greenPawns.enableFieldElements();
			this.turns.greenTurn = false;
			this.turns.yellowTurn = true;
			this.infoText.style.color = "rgb(0, 255, 64)";
			this.infoText.textContent =
				"Wybierz pionka do wykonania ruchu lub wyjścia z domu";
		} else if (this.turns.yellowTurn === true) {
			yellowPawns.addmove();
			yellowPawns.enableHomeElements();
			yellowPawns.enableFieldElements();
			this.turns.yellowTurn = false;
			this.turns.blueTurn = true;
			this.infoText.style.color = "rgb(225, 255, 0)";
		} else if (this.turns.blueTurn === true) {
			bluePawns.addmove();
			bluePawns.enableHomeElements();
			yellowPawns.enableFieldElements();
			bluePawns.enableFieldElements();
			this.turns.blueTurn = false;
			this.turns.greenTurn = true;
			this.infoText.style.color = "rgb(47, 0, 255)";
		}
	}

	fourPlayersMovement() {
		if (this.turns.greenTurn === true) {
			greenPawns.addmove();
			greenPawns.enableHomeElements();
			greenPawns.enableFieldElements();
			this.turns.greenTurn = false;
			this.turns.yellowTurn = true;
			this.infoText.style.color = "rgb(0, 255, 64)";
			this.infoText.textContent =
				"Wybierz pionka do wykonania ruchu lub wyjścia z domu";
		} else if (this.turns.yellowTurn === true) {
			yellowPawns.addmove();
			yellowPawns.enableHomeElements();
			yellowPawns.enableFieldElements();
			this.turns.yellowTurn = false;
			this.turns.blueTurn = true;
			this.infoText.style.color = "rgb(225, 255, 0)";
		} else if (this.turns.blueTurn === true) {
			bluePawns.addmove();
			bluePawns.enableHomeElements();
			bluePawns.enableFieldElements();
			this.turns.blueTurn = false;
			this.turns.redTurn = true;
			this.infoText.style.color = "rgb(47, 0, 255)";
		} else if (this.turns.redTurn === true) {
			redPawns.addmove();
			redPawns.enableHomeElements();
			redPawns.enableFieldElements();
			this.turns.redTurn = false;
			this.turns.greenTurn = true;
			this.infoText.style.color = "rgb(255, 0, 17)";
		}
	}
}

export default new GameRoles();
