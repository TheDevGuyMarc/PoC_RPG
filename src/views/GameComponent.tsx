import React, {useEffect} from "react";
import Game from "../engine/core/Game";

export default function GameComponent() {
  useEffect(() => {
    const game = new Game(1920, 1080);
    game.start();
  });

  return(
      <>
        <h1>Title</h1>
        <canvas id="game-canvas"></canvas>
      </>
  )
}
