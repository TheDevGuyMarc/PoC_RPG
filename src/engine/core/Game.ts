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
  private _canvas: Canvas;
  private _state: GameState;
  private _levels: Level[];

  constructor(width: number, height: number) {
    const config: CanvasConfig = {
      width: width,
      height: height
    }
    this._canvas = new Canvas("game-canvas", config);
    this._state = GameState.INITIALIZING;
    this._levels = [];
  }

  get canvas(): Canvas {
    return this._canvas;
  }

  set canvas(value: Canvas) {
    this._canvas = value;
  }

  get state(): GameState {
    return this._state;
  }

  set state(value: GameState) {
    this._state = value;
  }

  get levels(): Level[] {
    return this._levels;
  }

  set levels(value: Level[]) {
    this._levels = value;
  }

  /**
   * Adds a new level to the level hierarchy
   * @param levelName
   */
  public addLevel(levelName: string): void {
    const level = new Level(levelName);
    this._levels.push(level);
  }

  /**
   * Activates a new level for rendering
   * @param levelName
   */
  public activateLevel(levelName: string): void {
    this._levels.forEach((level) => {
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
    this._state = GameState.RUNNING;
    this.gameLoop();
  }

  public end(): void {
    this._state = GameState.END
  }

  private gameLoop() {
    // 0. Load Resources

    // 1. Load Input
    // 2. Load Sound

    // Activate the desired level
    this.activateLevel("Level1")

    // Render active level
    this._levels.forEach((level) => {
      level.render(this.canvas);
    })

    // 4. Load GameObjects

    requestAnimationFrame(this.gameLoop.bind(this));
  }
}
