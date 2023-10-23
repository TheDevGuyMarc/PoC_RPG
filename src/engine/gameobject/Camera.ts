import GameObject from "../core/GameObject";
import Vector2 from "../math/Vector2";

export default class Camera extends GameObject {
  constructor() {
    super(new Vector2(0, 0));
  }

  public setPosition(x: number, y: number): void {
    this.position = new Vector2(x, y);
  }
}
