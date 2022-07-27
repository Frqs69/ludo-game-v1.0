//zarządza komunikatem informującym graczy
export const renderCommunicate = (
	color,
	text = "Wybierz pionka do wykonania ruchu lub wyjścia z domu"
) => {
	const infoText = document.querySelector(".comunicateBox_text");
	infoText.style.color = color;
	infoText.textContent = text;
};
