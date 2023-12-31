// When the start game button pressed 2 random cards will be generated.

let firstCard = 10;
let secondCard = 10;


let statusPara = document.getElementById("game-status");
let cardsPara = document.getElementById("cards-recieved");
let sumPara = document.getElementById("cards-sum");

let startButton = document.getElementById("start-btn");
let newCardButton = document.getElementById("newcard-btn");

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Start Game Button Clicked!");
}

// If the sum of those 2 cards are less than 21, then the player will be able to request another card.

// If the sum of those 2 cards is equal to 21, he wins.

// If the sum of those 2 cards exceeds 21, then he's out of the game.

// The game stops if the sum reaches 21 or more.


// Random cards will be shown in the cards paragraph.

// Sum of the all cards will be shown in the sum paragraph.


// Player can request a new card only if the sum is below 21. If the sum is 21 or more, the new button won't work.