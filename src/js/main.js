import Cube from "./cube.js";
import yellowPawns from "./yellowPawns.js";
import greenPawns from "./greenPawns.js";
import redPawns from "./redPawns.js";
import bluePawns from "./bluePawns.js";
import gameRoles from "./gameRoles.js";
const throwCubeBtn = document.querySelector(".btn_throw_cube");
const menuBtns = document.querySelectorAll(".btn");
const CUBE_MIN_VALUE = 1;
const CUBE_MAX_VALUE = 6;

//nadaje listenera każdemu przyciskowi i renderuje plansze według ilości graczy przy pomocy funkcji startGame
menuBtns.forEach((el) => {
	el.addEventListener("click", () => {
		console.log("click", el);
		gameRoles.startGame(el);
	});
});

const rand = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

throwCubeBtn.addEventListener("click", () => {
	const random = rand(CUBE_MIN_VALUE, CUBE_MAX_VALUE);
	yellowPawns.random = random;
	greenPawns.random = random;
	redPawns.random = random;
	bluePawns.random = random;
	Cube.renderCubeResult(random);

	gameRoles.checkAllMoves(gameRoles.PLAYERS);
	throwCubeBtn.disabled = true;
});

// greenPawns.load();
// yellowPawns.load();
// bluePawns.load();
// redPawns.load();
