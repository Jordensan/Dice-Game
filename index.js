
//Player 1 Die
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceimg = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceimg);

//Player 2 Die
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceimg2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceimg2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Win🏆";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 win🏆";
}else{
  document.querySelector("h1").innerHTML = "Draw";
}
