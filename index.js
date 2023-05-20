var diceImages = document.querySelectorAll(".dice img");

var dice1 = Math.floor(Math.random() * 6 + 1);
var dice2 = Math.floor(Math.random() * 6 + 1);


var src1 = "images/dice"+dice1+".png";
var src2 = "images/dice"+dice2+".png";

diceImages[0].setAttribute("src" , src1);
diceImages[1].setAttribute("src" , src2);

if(dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(dice1 < dice2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}