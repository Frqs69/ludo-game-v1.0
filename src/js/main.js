import Cube from "./cube.js";
import yellowPawns from "./yellowPawns.js";
import greenPawns from "./greenPawns.js";
import redPawns from "./redPawns.js";
import bluePawns from "./bluePawns.js";
import gameRoles from "./gameRoles.js";
import board from "./board.js";
const throwCubeBtn = document.querySelector(".btn_throw_cube");
const menuBtns = document.querySelectorAll(".btn");
const CUBE_MIN_VALUE = 1;
const CUBE_MAX_VALUE = 6;
let suma = 0;

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

//! DELETE IT TO GAME WORK
gameRoles.startGame(3);

throwCubeBtn.addEventListener("click", () => {
	//! UNCOMENT IT TO GAME WORK
	// const random = rand(CUBE_MIN_VALUE, CUBE_MAX_VALUE);
	const random = 3;
	yellowPawns.random = random;
	greenPawns.random = random;
	redPawns.random = random;
	bluePawns.random = random;
	Cube.renderCubeResult(random);

	gameRoles.checkAllMoves(gameRoles.PLAYERS, random);
	// throwCubeBtn.disabled = true;
	// board.fields.forEach((el) => {
	// 	if (el.childNodes.length === 0) {
	// 		suma += el.childNodes.length
	// 	}
	// });
	// console.log(suma);
	// if (suma === 0) {
	// 	console.log("tak");
	// 	console.log(suma);
	// }
});

// greenPawns.load();
// yellowPawns.load();
// bluePawns.load();
// redPawns.load();
