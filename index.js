var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "Images/dice" + randomNumber1 + ".png";

var firstImage = document.querySelectorAll("img")[0];
var changeImage = firstImage.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "Images/dice" + randomNumber2 + ".png";
var secondImage = document.querySelectorAll("img")[1];

secondImage.setAttribute("src", randomDiceImage2);

If(randomNumber1 > randomNumber2);
{
  document.querySelector("h1").innerHTML = "Player 1 Wins 🏆";
}
