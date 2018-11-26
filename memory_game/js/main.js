console.log("Up and running!");

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

var checkForMatch = function () {
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[2])
		alert("You found a match!"); 
		} else { 
			alert("Sorry, try again"); 
		}
}


//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";