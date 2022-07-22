import Cube from "./cube.js";
import yellowPawns from "./yellowPawns.js";
import greenPawns from "./greenPawns.js";
import redPawns from "./redPawns.js";
import bluePawns from "./bluePawns.js";
const throwCubeBtn = document.querySelector(".btn_throw_cube");
const menuBtns = document.querySelectorAll(".btn");
const startScreen = document.querySelector(".startScreen");
const CUBE_MIN_VALUE = 1;
const CUBE_MAX_VALUE = 6;
let PLAYERS;

//nadaje listenera każdemu przyciskowi i renderuje plansze według ilości graczy przy pomocy funkcji startGame
menuBtns.forEach((el) => {
	el.addEventListener("click", () => {
		console.log("click", el);
		startGame(el);
	});
});

//renderuje pionki na planszy według ilości graczy
const startGame = (btn) => {
	console.log("btn", btn);
	console.log(btn.classList.contains("onePlayer"));
	if (btn.classList.contains("onePlayer") === true) {
		greenPawns.load();
		PLAYERS = 1;
		startScreen.style.display = "none";
	} else if (btn.classList.contains("twoPlayers") === true) {
		greenPawns.load();
		yellowPawns.load();
		PLAYERS = 2;
		startScreen.style.display = "none";
	} else if (btn.classList.contains("threePlayers") === true) {
		PLAYERS = 3;
		greenPawns.load();
		yellowPawns.load();
		bluePawns.load();
		startScreen.style.display = "none";
	} else if (btn.classList.contains("fourPlayers") === true) {
		greenPawns.load();
		yellowPawns.load();
		bluePawns.load();
		redPawns.load();
		PLAYERS = 4;
		startScreen.style.display = "none";
	}
};

let turns = {
	greenTurn: true,
	yellowTurn: false,
	blueTurn: false,
	redTurn: false,
};

const rand = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkAllMoves = (players) => {
	switch (players) {
		case 1:
			onePlayerMovement();
			return;
		case 2:
			twoPlayersMovement();
			return;
		case 3:
			threePlayersMovement();
			return;
		case 4:
			fourPlayersMovement();
			return;
		default:
			return;
	}
};

const onePlayerMovement = () => {
	greenPawns.addmove();
};

const twoPlayersMovement = () => {
	if (turns.greenTurn === true) {
		greenPawns.addmove();
		turns.greenTurn = false;
		turns.yellowTurn = true;
	} else {
		yellowPawns.addmove();
		turns.yellowTurn = false;
		turns.greenTurn = true;
	}
};

const threePlayersMovement = () => {
	if (turns.greenTurn === true) {
		greenPawns.addmove();
		turns.greenTurn = false;
		turns.yellowTurn = true;
	} else if (turns.yellowTurn === true) {
		yellowPawns.addmove();
		turns.yellowTurn = false;
		turns.blueTurn = true;
	} else if (turns.blueTurn === true) {
		bluePawns.addmove();
		turns.blueTurn = false;
		turns.greenTurn = true;
	}
};

const fourPlayersMovement = () => {
	if (turns.greenTurn === true) {
		greenPawns.addmove();
		turns.greenTurn = false;
		turns.yellowTurn = true;
	} else if (turns.yellowTurn === true) {
		yellowPawns.addmove();
		turns.yellowTurn = false;
		turns.blueTurn = true;
	} else if (turns.blueTurn === true) {
		bluePawns.addmove();
		turns.blueTurn = false;
		turns.redTurn = true;
	} else if (turns.redTurn === true) {
		redPawns.addmove();
		turns.redTurn = false;
		turns.greenTurn = true;
	}
};

throwCubeBtn.addEventListener("click", () => {
	const random = rand(CUBE_MIN_VALUE, CUBE_MAX_VALUE);
	yellowPawns.random = random;
	greenPawns.random = random;
	redPawns.random = random;
	bluePawns.random = random;
	Cube.renderCubeResult(random);

	checkAllMoves(PLAYERS);
});

// greenPawns.load();
// yellowPawns.load();
// bluePawns.load();
// redPawns.load();
