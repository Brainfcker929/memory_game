import { Card } from "./card.js";
export class Game {
  constructor(x, y) {
    this.x = x;
    this.y = y;
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

    if (this.cardsChosen.length <= 2) {
      this.cardsChosen.push(card);

      card.uncover();
      if (this.cardsChosen.length === 2) {
        this.takeOrCover();
      }
    }
  }

  result(domSelector) {
    const resultDisplay = document.querySelector(domSelector);
    resultDisplay.textContent = this.cardsWon.length;
  }
  isMatch() {
    return this.cardsChosen[0].isMatch(this.cardsChosen[1]);
  }

  takeOrCover() {
    setTimeout(() => {
      if (this.isMatch()) {
        this.cardsWon.push(this.cardsChosen);
        this.cardsChosen[0].take();
        this.cardsChosen[1].take();
      } else {
        this.cardsChosen[0].cover();
        this.cardsChosen[1].cover();
      }
      this.cardsChosen = [];
      this.result("#result");
    }, 1000);
  }
}
