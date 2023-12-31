// When the start game button pressed 2 random cards will be generated.

let firstCard;
let secondCard;

let cards;

let cardsSum;


let statusPara = document.getElementById("game-status");
let cardsPara = document.getElementById("cards-recieved");
let sumPara = document.getElementById("cards-sum");


let startButton = document.getElementById("start-btn");
let newCardButton = document.getElementById("newcard-btn");

startButton.addEventListener("click", startGame);
newCardButton.addEventListener("click", getNewCard);

function startGame() {

    firstCard = randomCard();
    secondCard = randomCard();

    cards = [];

    function randomCard() {
        return (Math.floor(Math.random() * 13) + 1);
    }

    cards.push(firstCard);
    cards.push(secondCard);

    cardsSum = firstCard + secondCard;
    
    if (cardsSum === 21){
        statusPara.textContent = "You've got blackjack!";
        sumPara.textContent = "Sum: " + cardsSum;
    } else if (cardsSum < 21) {
        statusPara.textContent = "Do you want a new card?";
        sumPara.textContent = "Sum: " + cardsSum;
    } else {
        statusPara.textContent = "You're out of the game!";
        sumPara.textContent = "Sum: " + cardsSum;
    }

    console.log(firstCard, secondCard);

    cardsPara.textContent = "Card: "

    for (let i=0; i < cards.length; i++) {
        cardsPara.textContent += cards[i] + " ";
    }

}

function getNewCard() {
    console.log("New Card Button");
}

// If the sum of those 2 cards are less than 21, then the player will be able to request another card.

// If the sum of those 2 cards is equal to 21, he wins.

// If the sum of those 2 cards exceeds 21, then he's out of the game.

// The game stops if the sum reaches 21 or more.


// Random cards will be shown in the cards paragraph.

// Sum of the all cards will be shown in the sum paragraph.


// Player can request a new card only if the sum is below 21. If the sum is 21 or more, the new button won't work.