import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";
export default class Pawns {
	html;
	pawns;
	random;
	moveBoard;
	throwCubeBtn = document.querySelector(".btn_throw_cube");
	pawnsOnField;

	//wykonuje funkcje renderujące
	async load() {
		await this.renderPawnInHome();
		await this.loadPawns();
	}

	//nadaje wszystkim pionkom w domu listenera, który nadaje ruch po planszy
	loadPawns() {
		this.pawns = document.querySelectorAll(`.${this.color}`);
		this.pawns.forEach((element) => {
			element.addEventListener("click", () => {
				element.classList.add("outOfHome");
				if (true) {
					// this.random === 1 || this.random === 6
					this.renderOut(element);
					// 	//!ADDED FOR TESTING
						//  this.addmove();
					// 	return;
				}
				this.disableHomeElements();
			});
		});
	}

	enableHomeElements() {
		this.pawns.forEach((element) => {
			element.disabled = false;
		});
	}

	disableHomeElements() {
		this.pawns.forEach((element) => {
			element.disabled = true;
		});
	}

	//dodaje listenera do każdego z pionków, które mają klasę outOfHome
	addmove() {
		this.pawnsOnField = document.querySelectorAll(`.${this.color}`);
		console.log(this.color);

		this.pawnsOnField.forEach((el) => {
			el.addEventListener("click", (e) => {
				this.move(this.random, e.target);
				this.throwCubeBtn.disabled = false;
				this.disableFieldElements();
			});
		});
	}

	//dodaje możliość kliknięcia pionka na planszy
	enableFieldElements() {
		this.pawnsOnField.forEach((el) => {
			el.disabled = false;
		});
	}
	//wyłącza możliość kliknięcia pionka na planszy
	disableFieldElements() {
		this.pawnsOnField.forEach((el) => {
			el.disabled = true;
		});
	}

	//renderuje pionki poza domem
	renderOut(element) {
		if (this.home.innerHTML != "") {
			this.html = `<button class="pawn ${this.color} outOfHome"></button>`;
			if (this.homeField.innerHTML === "") {
				this.homeField.innerHTML = this.html;
			} else if (this.homeField.innerHTML != "") {
				this.homeField.insertAdjacentHTML("afterbegin", this.html);
			}
		}
		element.remove();
	}

	//renderuje pionki w domu
	renderPawnInHome() {
		this.home.forEach((el, i) => {
			el.innerHTML = `<button class='pawn ${this.color}' id=${i}></button>`;
		});
	}
}
