/*import Canvas from "../src/engine/rendering/Canvas";*/

import Game from "../engine/core/Game";
import {GameState} from "../engine/core/GameState";
import Level from "../engine/rendering/Level";

describe("Game Class", () => {
  let game: Game;

  beforeEach(() => {
    game = new Game(800, 600);
  });

  /*it("should have a canvas with the specified width and height", () => {
    const canvas = game["canvas"];
    expect(canvas instanceof Canvas).toBe(true);
    expect(canvas.canvas.width).toBe(800);
    expect(canvas.canvas.height).toBe(600);
  });*/

  /*it("should have an INITIALIZING state when created", () => {
    expect(game["state"]).toBe(GameState.INITIALIZING);
  });*/

  /*it("should have an empty levels array when created", () => {
    const levels = game["levels"];
    expect(Array.isArray(levels)).toBe(true);
    expect(levels.length).toBe(0);
  });*/

  /*it("should add a new level to the levels array", () => {
    game.addLevel("Level1");
    const levels = game["levels"];
    expect(levels.length).toBe(1);
    expect(levels[0] instanceof Level).toBe(true);
    expect(levels[0].levelName).toBe("Level1");
  });*/

  /*it("should activate a level by name", () => {
    game.addLevel("Level1");
    game.addLevel("Level2");
    game.activateLevel("Level2");

    const levels = game["levels"];
    levels.forEach((level) => {
      if (level.levelName === "Level2") {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(level.isActive).toBe(true);
      } else {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(level.isActive).toBe(false);
      }
    });
  });*/

  /*it("should start the game", () => {
    game.start();
    expect(game["state"]).toBe(GameState.RUNNING);
  });*/

  /*it("should end the game", () => {
    game.end();
    expect(game["state"]).toBe(GameState.END);
  });*/

  /*it("should run the game loop", () => {
    game.addLevel("Level1");
    const activateLevelSpy = jest.spyOn(game, "activateLevel");
    const renderSpy = jest.spyOn(Level.prototype, "render");

    game.start();

    expect(activateLevelSpy).toHaveBeenCalledWith("Level1");
    expect(renderSpy).toHaveBeenCalledTimes(1);
  });*/
});
