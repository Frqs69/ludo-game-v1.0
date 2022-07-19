import Cube from "./cube.js";
import yellowPawns from "./yellowPawns.js";
import greenPawns from "./greenPawns.js";
import redPawns from "./redPawns.js";
import bluePawns from "./bluePawns.js";
const throwCubeBtn = document.querySelector(".btn_throw_cube");
const CUBE_MIN_VALUE = 1;
const CUBE_MAX_VALUE = 6;

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
});

yellowPawns.load();
greenPawns.load();
redPawns.load();
bluePawns.load();
