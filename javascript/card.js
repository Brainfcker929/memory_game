export class Card {
  constructor(name) {
    this.uncovered = false;
    this.name = name;
    this.cardEl = this.createCard()
    this.index = null;
  }

  createCard() {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardInner = document.createElement("div");
    cardInner.setAttribute("class", "cardInner");

    let cardFront = document.createElement("img");
    cardFront.setAttribute("class", "cardFront");

    let cardBack = document.createElement("img");
    cardBack.setAttribute("class", "cardBack");

    cardFront.setAttribute("src", "../images/background.png");
    cardBack.setAttribute("src", `../images/${this.name}.png`);

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    card.appendChild(cardInner)
    return card;
  } 

  render(index) {
    this.index = index;
    this.cardEl.setAttribute("data-id", index);
    let childs = this.cardEl.children[0].children
    for(var i = 0; i< childs.length; i++) {
      childs[i].setAttribute("data-id", index);
    }
    return this.cardEl;
  }

  uncover() {
    this.uncovered = true;
    this.cardEl.classList.toggle("is-flipped")
  }

  cover() {
    this.uncovered = false;
    this.cardEl.classList.toggle("is-flipped")
  }

  take() {
    this.cardEl.setAttribute("src", "../images/blank.png");
    this.cardEl.setAttribute("style", "opacity: 0.5");
    this.cardEl.classList.toggle("is-flipped")
  }

  isMatch(secondCard) {
    return this.name === secondCard.name;
  }
}
