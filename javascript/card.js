import { Game } from "./game.js";
export class Card {
  constructor(name) {
    this.uncovered = false;
    this.name = name;
    this.cardEl = document.createElement("img");
    this.index = null;
  }

  render(index) {
    this.index = index;
    this.cardEl.setAttribute("src", "../images/background.png");
    this.cardEl.setAttribute("data-id", index);
    return this.cardEl;
  }

  uncover() {
    this.uncovered = true;
    this.cardEl.setAttribute("src", `../images/${this.name}.png`);
  }

  cover() {
    this.uncovered = false;
    this.cardEl.setAttribute("src", "../images/background.png");
  }

  take() {
    this.cardEl.setAttribute("src", "../images/blank.png");
  }

  isMatch(secondCard) {
    return this.name === secondCard.name;
  }
}
