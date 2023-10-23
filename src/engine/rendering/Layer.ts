import GameObject from "../core/GameObject";
import Canvas from "./Canvas";


export default class Layer {
  private readonly _layerName: string;
  private _objects: GameObject[] = [];

  constructor(layerName: string) {
    this._layerName = layerName;
  }

  get layerName(): string {
    return this._layerName;
  }

  get objects(): GameObject[] {
    return this._objects;
  }

// Method to add a game object to the layer
  public addObject(gameObject: GameObject): void {
    this._objects.push(gameObject);
  }

  // Method to remove a game object from the layer
  public removeObject(gameObject: GameObject): void {
    const index = this._objects.indexOf(gameObject);
    if (index !== -1) {
      this._objects.splice(index, 1);
    }
  }

  // Method to render the objects in the layer
  public render(canvas: Canvas): void {
    this._objects.forEach((gameObject) => {
      gameObject.render(canvas);
    });
  }
}
