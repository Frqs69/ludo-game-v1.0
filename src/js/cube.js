class Cube {
	cube = document.querySelector(".cube");

	//generuje kod potrzebny do wyświetlenia oczek na kostce
	_showCubeResults(result) {
		let html;
		if (result === 1) {
			html = `
            <div class="cube_result cube_result-forOne">
                <div class="cube_result-dot cube_result-forOne-one"></div>
            </div>
            `;
			return html;
		}
		if (result === 2) {
			html = `
            <div class="cube_result cube_result-forTwo">
                        <div class="cube_result-dot cube_result-forTwo-one"></div>
                        <div class="cube_result-dot cube_result-forTwo-two"></div>
                    </div>
            `;
			return html;
		}
		if (result === 3) {
			html = `
            <div class="cube_result cube_result-forThree">
                        <div class="cube_result-dot cube_result-forThree-one"></div>
                        <div class="cube_result-dot cube_result-forThree-two"></div>
                        <div class="cube_result-dot cube_result-forThree-three"></div>
                    </div>
            `;
			return html;
		}
		if (result === 4) {
			html = `
            <div class="cube_result cube_result-forFour">
                        <div class="cube_result-dot cube_result-forFour-one"></div>
                        <div class="cube_result-dot cube_result-forFour-two"></div>
                        <div class="cube_result-dot cube_result-forFour-three"></div>
                        <div class="cube_result-dot cube_result-forFour-four"></div>
                    </div>
            `;
			return html;
		}
		if (result === 5) {
			html = `
            <div class="cube_result cube_result-forFive">
                        <div class="cube_result-dot cube_result-forFive-one"></div>
                        <div class="cube_result-dot cube_result-forFive-two"></div>
                        <div class="cube_result-dot cube_result-forFive-three"></div>
                        <div class="cube_result-dot cube_result-forFour-four"></div>
                        <div class="cube_result-dot cube_result-forFive-five"></div>
                    </div>
            `;
			return html;
		}
		if (result === 6) {
			html = `
            <div class="cube_result cube_result-forSix">
                        <div class="cube_result-dot cube_result-forSix-one"></div>
                        <div class="cube_result-dot cube_result-forSix-two"></div>
                        <div class="cube_result-dot cube_result-forSix-three"></div>
                        <div class="cube_result-dot cube_result-forSix-four"></div>
                        <div class="cube_result-dot cube_result-forSix-five"></div>
                        <div class="cube_result-dot cube_result-forSix-six"></div>
                    </div>
            `;
			return html;
		}
	}

	//wyświetla wynik oczeka na kostce
	renderCubeResult(randNumber) {
		this.cube.innerHTML = "";
		this.cube.innerHTML = this._showCubeResults(randNumber);
	}
}

export default new Cube();
