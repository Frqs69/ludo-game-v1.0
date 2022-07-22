import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";
export default class Pawns {
	html;
	pawns;
	random;
	moveBoard;

	colors = {
		first: "greenPawn",
		second: "yellowPawn",
		third: "bluePawn",
		fourth: "redPawn",
	};

	turns = {
		greenTurn: true,
		yellowTurn: false,
		blueTurn: false,
		redTurn: false,
	};

	numberOfTurn = 0;

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
					//this.random === 1 || this.random === 6
					this.renderOut(element);
					// this.addmove();
					return;
				}
			});
		});
	}

	//dodaje listenera do każdego z pionków, które mają klasę outOfHome
	addmove() {
		const ypawn = document.querySelectorAll(`.${this.color}`);
		console.log(this.color);

		ypawn.forEach((el) => {
			el.addEventListener("click", (e) => {
				this.move(this.random, e.target);
			});
		});
	}
	//renderuje pionki poza domem
	renderOut(element) {
		if (this.home.innerHTML != "") {
			this.html = `<div class="pawn ${this.color} outOfHome"></div>`;
			if (this.homeField.innerHTML === "") {
				this.homeField.innerHTML = this.html;
			} else if (this.homeField.innerHTML != "") {
				this.homeField.insertAdjacentHTML("afterbegin", this.html);
				// this.addmove(this.color);
			}
		}
		element.remove();
	}

	//renderuje pionki w domu
	renderPawnInHome() {
		this.home.forEach((el, i) => {
			el.innerHTML = `<div class='pawn ${this.color}' id=${i}></div>`;
		});
	}
}
