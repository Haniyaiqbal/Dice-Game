

var randomNumber1 = Math.floor(Math.random()*6) +1; //will generate 1-6;

var randomDiceimage = "dice" + randomNumber1 + ".png"; //making up img names, as dice1.png, dice2.png

var randomImgsrc = "images/" +randomDiceimage; //making up the src to putinto src in img tage

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgsrc);

//for second dice

var randomNumber2 = Math.floor(Math.random()*6) +1; 

var randomDiceimage2 = "dice" + randomNumber2 + ".png";

var randomImgsrc2 = "images/" +randomDiceimage2; //making up the src to putinto src in img tage

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImgsrc2);


//winner

if (randomNumber1>randomNumber2)
{
	document.querySelector("h1").innerHTML = "Player 1 wins!";
} 
else if (randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else 
{ 
	 document.querySelector("h1").innerHTML = "Draw.";

}