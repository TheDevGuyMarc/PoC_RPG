import Layer from "./Layer";
import Canvas from "./Canvas";

/**
 * Usage:
 *
 * // Create a new level
 * const level = new Level("Level 1");
 *
 * // Activate the level
 * level.activate();
 *
 * // Create layers for the level
 * const backgroundLayer = level.createLayer();
 * const mainLayer = level.createLayer();
 * const uiLayer = level.createLayer();
 *
 * // Create game objects and add them to specific layers
 * const backgroundObject = new GameObject();
 * backgroundLayer.addObject(backgroundObject);
 *
 * const playerObject = new GameObject();
 * mainLayer.addObject(playerObject);
 *
 * const enemyObject = new GameObject();
 * mainLayer.addObject(enemyObject);
 *
 * function gameLoop() {
 *   // Update game objects in the level
 *   level.updateGameObjects(deltaTime);
 *
 *   // Render the level and its layers
 *   level.render();
 *
 *   // Request the next frame
 *   requestAnimationFrame(gameLoop);
 * }
 */
export default class Level {
  private readonly _levelName: string;
  private _isActive: boolean;
  private _layers: Layer[] = [];

  constructor(levelName: string) {
    this._levelName = levelName;
    this._isActive = false;
  }

  get levelName(): string {
    return this._levelName;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  get layers(): Layer[] {
    return this._layers;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  set layers(value: Layer[]) {
    this._layers = value;
  }

  /**
   * Activate a level
   * Note: Additional logic to initialize the level can be added here if needed
   */
  public activate(): void {
    this._isActive = true;
  }

  /**
   * Deactivate a level
   * Note: Additional logic to clean up the level can be added here if needed
   */
  public deactivate(): void {
    this._isActive = false;
  }

  /**
   * Create a new layer and add it to the level
   */
  createLayer(layerName: string): Layer {
    const layer = new Layer(layerName);
    this._layers.push(layer);
    return layer;
  }

  /**
   * Remove a layer from the level
   */
  removeLayer(layer: Layer) {
    const index = this._layers.indexOf(layer);
    if (index !== -1) {
      this._layers.splice(index, 1);
    }
  }

  // Method to update all game objects in the level
  /**
   * Update all game objects that exist in the level
   * @param deltaTime
   */
  public updateGameObjects(deltaTime: number): void {
    if (this.isActive) {
      this._layers.forEach((layer) => {
        layer.objects.forEach((gameObject) => {
          gameObject.update(deltaTime);
        });
      });
    }
  }

  /**
   * Render the level
   */
  public render(canvas: Canvas): void {
    if (this._isActive) {
      console.log(`Rendering level: ${this._levelName}`);

      // Render layers
      this._layers.forEach((layer) => {
        layer.render(canvas);
      });
    }
  }
}
