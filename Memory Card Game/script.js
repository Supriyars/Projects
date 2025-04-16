const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let flippedCards = [];
let matchedCards = 0;
let score = 0;
let timer = 0;
let gameInterval;
let flipCount = 0;

const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Shuffle the card values
function shuffleCards() {
    for (let i = cardValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardValues[i], cardValues[j]] = [cardValues[j], cardValues[i]];
    }
}

// Create cards
function createCards() {
    shuffleCards();
    for (let i = 0; i < cardValues.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = cardValues[i];
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    }
}

// Flip the card
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.textContent = this.dataset.value;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Check if the two flipped cards match
function checkMatch() {
    flipCount++;
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.dataset.value === secondCard.dataset.value) {
        matchedCards++;
        score++;
        scoreElement.textContent = score;
        flippedCards = [];

        if (matchedCards === cardValues.length / 2) {
            clearInterval(gameInterval);
            alert('You Win! Total flips: ' + flipCount);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
            flippedCards = [];
        }, 1000);
    }
}

// Timer function
function startTimer() {
    gameInterval = setInterval(() => {
        timer++;
        timerElement.textContent = timer;
    }, 1000);
}

// Start the game
function startGame() {
    createCards();
    startTimer();
}

startGame();
