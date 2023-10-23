import {performance} from "perf_hooks";

/**
 * Usage:
 * const timer = new Timer();
 *
 * timer.startFrame();
 *
 * // Game logic
 *
 * timer.endFrame();
 * requestAnimationFrame(gameLoop);
 */
export default class Timer {
  private _lastTime: number;
  private _deltaTime: number;
  private _fps: number;
  private _frameCount: number;
  private _timeAccumulator: number;
  private _sleepTime: number;

  constructor() {
    this._lastTime = 0;
    this._deltaTime = 0;
    this._fps = 60;
    this._frameCount = 0;
    this._timeAccumulator = 0;
    this._sleepTime = 0;
  }

  get lastTime(): number {
    return this._lastTime;
  }

  get deltaTime(): number {
    return this._deltaTime;
  }

  get fps(): number {
    return this._fps;
  }

  get frameCount(): number {
    return this._frameCount;
  }

  get timeAccumulator(): number {
    return this._timeAccumulator;
  }

  /**
   * Call this method at the beginning of each frame
   */
  public startFrame(): void {
    const currentTime = performance.now();
    this._deltaTime = (currentTime - this._lastTime) / 1000; // Delta time in seconds
    this._lastTime = currentTime;
  }

  /**
   * Call this method at the end of each frame
   */
  public endFrame(): void {
    this._frameCount++;
    this._timeAccumulator += this._deltaTime;

    if (this._timeAccumulator >= 1) {
      this._fps = this._frameCount;
      this._frameCount = 0;
      this._timeAccumulator -= 1;
    }
  }

  public capFrameRate(targetFPS: number): void {
    const targetFrameTime = 1000 / targetFPS;
    const currentTime = performance.now();
    const elapsedTime = currentTime - this._lastTime;

    if (elapsedTime < targetFrameTime) {
      this._sleepTime = targetFrameTime - elapsedTime;
      // Use a sleep function or requestAnimationFrame with a delay to control frame rate.
    }

    this._lastTime = currentTime + this._sleepTime;
  }

  public calculateAverageFPS(intervalInSeconds: number): number {
    return (this._frameCount / this._timeAccumulator) * intervalInSeconds;
  }

  public detectFrameRateSpikes(threshold: number): boolean {
    return this._frameCount > threshold;
  }

  public detectFrameRateDrops(threshold: number): boolean {
    return this._frameCount < threshold;
  }
}
