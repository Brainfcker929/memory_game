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
  }

  render(domSelector) {
    const grid = document.querySelector(domSelector);
    this.board.forEach((card, index) => {
      grid.appendChild(card.render(index));
    });
  }

  createBoard() {
    const playingCards = this.creatures.concat(this.creatures);
    playingCards.sort(() => 0.5 - Math.random());
    return playingCards.map((creatureName) => {
      return new Card(creatureName);
    });
  }
}
