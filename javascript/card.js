import { Game } from "./game.js";
export class Card {
  constructor(name) {
    this.facedup = false;
    this.name = name;
    this.cardEl = document.createElement("img");
  }

  render(index) {
    this.cardEl.setAttribute("src", "../images/background.png");
    this.cardEl.setAttribute("data-id", index);
    return this.cardEl;
  }

  uncover() {
    this.facedup = !this.facedup;

    if (this.facedup) {
      this.cardEl.setAttribute("src", `../images/${this.name}.png`);
    }
  }

  cover() {
    this.facedup = !this.facedup;
    if (this.facedup === false)
      this.cardEl.setAttribute("src", "../images/background.png");
  }

  take() {
    this.cardEl.setAttribute("src", "../images/blank.png");
  }

  isMatch(secondCard) {
    return this.name === secondCard.name;
  }
}
