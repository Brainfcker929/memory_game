import { Card } from "./card.js";
import { Game } from "./game.js";

const onDomReady = () => {
  const game = new Game();
  game.render(".grid");
};

document.addEventListener("DOMContentLoaded", onDomReady);
