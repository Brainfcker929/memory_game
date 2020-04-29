export class Card {
  constructor(name) {
    this.facedup = false;
    this.name = name;
    this.cardEl = document.createElement("img");
  }

  render(index) {
    this.cardEl.setAttribute("src", "../images/background.png");
    this.cardEl.setAttribute("data-id", index);
    this.cardEl.addEventListener("click", () => {
      this.flip();
    });
    return this.cardEl;
  }

  flip() {
    this.facedup = !this.facedup;
    if (this.facedup) {
      this.cardEl.setAttribute("src", `../images/${this.name}.png`);
    }
  }

  isMatch(secondCard) {
    return this.name === secondCard.name;
  }
}
