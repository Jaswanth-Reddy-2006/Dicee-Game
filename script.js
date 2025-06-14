var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = "/images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",image1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = "/images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",image2);


var h1 = document.querySelector("h1")

if (randomNumber1 === randomNumber2){
    h1.innerHTML = "Draw !"
}else if(randomNumber1 > randomNumber2){
    h1.innerHTML = "🚩Player 1 Wins !"
}else{
    h1.innerHTML = "Player 2 Wins !🚩"
}