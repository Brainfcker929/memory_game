document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
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

  const playingCards = cardArray.concat(cardArray);

  playingCards.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < playingCards.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/background.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    var cardId = this.getAttribute("data-id");

    if (this.getAttribute("src") === "images/blank.png") {
      alert("Wähl eine Karte");
    } else if (this.getAttribute("src") === "images/background.png") {
      cardsChosen.push(playingCards[cardId]);

      if (cardsChosenId.indexOf(cardId) === -1) cardsChosenId.push(cardId);
      this.setAttribute("src", "images/" + playingCards[cardId] + ".png");

      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 1000);
      }
    } else {
      alert("Du kannst nicht die gleiche Karte wählen");
    }
  }

  //images blank

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/background.png");
      cards[optionTwoId].setAttribute("src", "images/background.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length) {
      resultDisplay.textContent = "Winner winner chicken dinner!";
    }
  }

  createBoard();
});
