class Board {
	pawns;
	//pobieramy pola ruchu nie po kolei
	boardField = document.querySelectorAll(".board_field");

	//pobieramy pola domowe każdego z pionków
	yellowExit = document.querySelectorAll(".yellowExit");
	greenExit = document.querySelectorAll(".greenExit");
	blueExit = document.querySelectorAll(".blueExit");
	redExit = document.querySelectorAll(".redExit");

	//wczytuje wszystkie pola ruchu po kolei
	fields = [
		this.boardField[0],
		this.boardField[1],
		this.boardField[2],
		this.boardField[5],
		this.boardField[8],
		this.boardField[11],
		this.boardField[14],
		this.boardField[17],
		this.boardField[26],
		this.boardField[27],
		this.boardField[28],
		this.boardField[29],
		this.boardField[30],
		this.boardField[31],
		this.boardField[32],
		this.boardField[47],
		this.boardField[62],
		this.boardField[61],
		this.boardField[60],
		this.boardField[59],
		this.boardField[58],
		this.boardField[57],
		this.boardField[56],
		this.boardField[65],
		this.boardField[68],
		this.boardField[71],
		this.boardField[74],
		this.boardField[77],
		this.boardField[80],
		this.boardField[79],
		this.boardField[78],
		this.boardField[75],
		this.boardField[72],
		this.boardField[69],
		this.boardField[66],
		this.boardField[63],
		this.boardField[54],
		this.boardField[53],
		this.boardField[52],
		this.boardField[51],
		this.boardField[50],
		this.boardField[49],
		this.boardField[48],
		this.boardField[33],
		this.boardField[18],
		this.boardField[19],
		this.boardField[20],
		this.boardField[21],
		this.boardField[22],
		this.boardField[23],
		this.boardField[24],
		this.boardField[15],
		this.boardField[12],
		this.boardField[9],
		this.boardField[6],
		this.boardField[3],
	];

	//przekazanie pól do tablic
	yellowExitFields = [...this.yellowExit];

	greenExitFields = [...this.greenExit];

	blueExitFields = [...this.blueExit];

	redExitFields = [...this.redExit];

	//nadanie polom ID
	constructor() {
		this.fields.forEach((element, i) => {
			element.setAttribute("id", i);
		});
	}
}

export default new Board();
