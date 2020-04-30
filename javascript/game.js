import { Card } from "./card.js";
export class Game {
  constructor() {
    this.creatures = [
      "Ampharos",
      "Arkani",
      "Bisasam",
      "Endivie",
      "Feurigel",
      "Gengar",
      "Karnimani",
      "Keifel",
      "Lapras",
      "Relaxo",
    ];
    this.board = this.createBoard();
    this.cardsWon = [];
    this.cardsChosen = [];
  }
  createBoard() {
    const playingCards = this.creatures.concat(this.creatures);
    playingCards.sort(() => 0.5 - Math.random());
    return playingCards.map((creatureName) => {
      return new Card(creatureName);
    });
  }

  render(domSelector) {
    const grid = document.querySelector(domSelector);
    this.board.forEach((card, index) => {
      let cardEl = card.render(index);
      cardEl.addEventListener("click", this.onCardClick.bind(this));
      grid.appendChild(cardEl);
    });
  }

  onCardClick(event) {
    let cardIndex = event.target.dataset.id;
    let card = this.board[cardIndex];

    if (this.shouldIgnoreClick(card)) {
      return;
    }

    if (this.cardsChosen.length < 2) {
      this.cardsChosen.push(card);
      card.uncover();
    }

    if (this.cardsChosen.length === 2) {
      this.takeOrCover();
    }
  }

  isCardChosen(secondCard) {
    return this.cardsChosen.some((firstCard) => firstCard.index === secondCard.index);
  }

  resultDisplay(domSelector) {
    const resultDisplay = document.querySelector(domSelector);
    resultDisplay.textContent = this.cardsWon;
    if (this.cardsWon === this.creatures.length) {
      resultDisplay.textContent = "Winner winner chicken dinner!";
    }
  }

  isMatch() {
    return this.cardsChosen[0].isMatch(this.cardsChosen[1]);
  }

  shouldIgnoreClick(card) {
    return this.isCardChosen(card) || this.cardsChosen.length === 2 || card.uncovered;
  }

  takeOrCover() {
    setTimeout(() => {
      if (this.isMatch()) {
        this.cardsWon += 1;
        this.cardsChosen[0].take();
        this.cardsChosen[1].take();
      } else {
        this.cardsChosen[0].cover();
        this.cardsChosen[1].cover();
      }
      this.cardsChosen = [];
      this.resultDisplay("#result");
    }, 1000);
  }
}
