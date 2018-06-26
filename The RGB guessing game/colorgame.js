var numSquares = 6;
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");

//utility functions to get random colors
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randcolor(box) {
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);
    box.style.background = "rgb(" + r + "," + g + "," + b + ")";
}
//initialising...
init();

function init()
{
	setupModeButtons();
	setupSquares();
	reset();

}
function setupSquares()
{

for (var i = 0; i < numSquares; i++) {
	 randcolor(squares[i]);

	squares[i].addEventListener("click", function(){
	 	var clicked = this.style.background;
	 	if(clicked === picked)
	 	{
	 		foundit();
	 		messageDisplay.innerHTML = "CORRECT!"
	 		document.querySelector("#reset").textContent = "New Colors"
	 	}
	 	else{
	 		this.style.background = "#232323"
	 		messageDisplay.innerHTML = "TRY AGAIN";
	 		document.querySelector("#reset").textContent = "Play Again ? "
	 	}

	 });

}
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent == "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}//pick a color;
 var picked = pickacolor();
 function pickacolor(){
 	return squares[Math.floor(Math.random()*numSquares)].style.background;
 }

//when u hit the bullseye ;)
function foundit(){
	for(var i = 0; i<numSquares; i++)
	{
		squares[i].style.background = picked;
	}
	document.querySelector(".header").style.background = picked;

}
//reseting the game
function reset() {
	// body...
	document.querySelector(".specify").innerHTML = picked;
		for (var i = 0; i < numSquares; i++) {
	 randcolor(squares[i]);
	 if (numSquares === 3) {
	 	for (var j = numSquares; j < 6; j++){
	 		squares[j].style.background = "#232323";
	 	}
	 }
	 	
	 document.querySelector(".header").style.background = "steelblue";
	 picked = pickacolor();
	 document.querySelector(".specify").innerHTML = picked;
	 };
	 document.querySelector("#message").textContent = "";
}
document.querySelector("#reset").addEventListener("click", function () {
	reset();
});
