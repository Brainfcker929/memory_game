import { Card } from "./card.js";
import { Game } from "./game.js";

const onDomReady = () => {
  const game = new Game(10, 5);
  game.render(".grid");
};

document.addEventListener("DOMContentLoaded", onDomReady);
