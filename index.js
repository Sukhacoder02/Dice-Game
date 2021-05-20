function getRandomNumber () {
	return (Math.floor(Math.random() * 10) % 6) + 1;
}

function changeImage (image,randomNumber) {
	randomDiceImage = "images/dice"+randomNumber+".png";
	imageClassName = ".img"+image;
	document.querySelector(imageClassName).setAttribute("src",randomDiceImage)
}

function getWinner(number1,number2){
	var title = document.querySelector(".refresh");
	if(number1 === number2)
		title.textContent = "Game Drawn";
	else if(number1 > number2)
		title.textContent = "Player 1 Wins";
	else
		title.textContent = "Player 2 Wins";

}
var number1 = getRandomNumber();
var number2 = getRandomNumber();
changeImage(1,number1);
changeImage(2,number2);
getWinner(number1,number2);




