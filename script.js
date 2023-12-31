let firstCard;
let secondCard;

let cards;
let cardsSum;

let isAlive = false;
let isBlackjack = false;


let statusPara = document.getElementById("game-status");
let cardsPara = document.getElementById("cards-recieved");
let sumPara = document.getElementById("cards-sum");

let startButton = document.getElementById("start-btn");
let newCardButton = document.getElementById("newcard-btn");

startButton.addEventListener("click", startGame);
newCardButton.addEventListener("click", getNewCard);

function startGame() {

    isAlive = true;
    isBlackjack = false;

    firstCard = randomCard();
    secondCard = randomCard();

    cards = [firstCard, secondCard];

    cardsSum = firstCard + secondCard;

    gameProcess();
    
}

function gameProcess() {
    
    if (cardsSum === 21){
        statusPara.textContent = "You've got blackjack!";
        sumPara.textContent = "Sum: " + cardsSum;
        isBlackjack = true;
    } else if (cardsSum < 21) {
        statusPara.textContent = "Do you want a new card?";
        sumPara.textContent = "Sum: " + cardsSum;
    } else {
        statusPara.textContent = "You're out of the game!";
        sumPara.textContent = "Sum: " + cardsSum;
        isAlive = false;
    }

    console.log(firstCard, secondCard);

    cardsPara.textContent = "Card: "

    for (let i=0; i < cards.length; i++) {
        cardsPara.textContent += cards[i] + " ";
    }

}

function randomCard() {
    return (Math.floor(Math.random() * 13) + 1);
}

function getNewCard() {
    if (isAlive === true && isBlackjack === false) {
        let additionalCard = randomCard();
        console.log(additionalCard);
        cards.push(additionalCard);
        cardsSum += additionalCard;
        gameProcess();
    }
}