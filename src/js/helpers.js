//zarządza komunikatem informującym graczy
export const renderCommunicate = (
	color,
	text = "Wybierz pionka do wykonania ruchu, jeżeli nie masz pionka na planszy następny gracz rzuca kostką"
) => {
	const infoText = document.querySelector(".comunicateBox_text");
	infoText.style.color = color;
	infoText.textContent = text;
};
