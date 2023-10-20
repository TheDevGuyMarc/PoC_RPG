import IGame from "./IGame";
import {GameState} from "./GameState";
import CanvasConfig from "../rendering/CanvasConfig";
import Canvas from "../rendering/Canvas";
import Level from "../rendering/Level";

/**
 * Usage:
 * const game = new Game(800, 600);
 *
 * game.start();
 *
 * // If Site is left or other site is visited
 * game.end();
 */
export default class Game implements IGame {
  private canvas: Canvas;
  private state: GameState;
  private levels: Level[];

  constructor(width: number, height: number) {
    const config: CanvasConfig = {
      width: width,
      height: height
    }
    this.canvas = new Canvas("game-canvas", config);
    this.state = GameState.INITIALIZING;
    this.levels = [];
  }

  /**
   * Adds a new level to the level hierarchy
   * @param levelName
   */
  public addLevel(levelName: string): void {
    const level = new Level(levelName);
    this.levels.push(level);
  }

  /**
   * Activates a new level for rendering
   * @param levelName
   */
  public activateLevel(levelName: string): void {
    this.levels.forEach((level) => {
      if (level.levelName === levelName) {
        // Build in a Loading Screen for 5 seconds
        level.activate();
        // Resume Game
      } else {
        level.deactivate();
      }
    });
  }

  public start(): void {
    this.state = GameState.RUNNING;
    this.gameLoop();
  }

  public end(): void {
    this.state = GameState.END
  }

  private gameLoop() {
    // 0. Load Resources

    // 1. Load Input
    // 2. Load Sound

    // Activate the desired level
    this.activateLevel("Level1")

    // Render active level
    this.levels.forEach((level) => {
      level.render();
    })

    // 4. Load GameObjekts
  }
}
