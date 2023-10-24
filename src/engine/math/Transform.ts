import Vector2 from "./Vector2";
import Matrix2D from "./Matrix2D";
import MathUtils from "./MathUtils";

export default class Transform {
  position: Vector2;
  rotation: number; // Angle in degrees
  scale: Vector2;

  constructor(position: Vector2, rotation: number = 0, scale: Vector2 = new Vector2(1, 1)) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }

  setScale(x: number, y: number): void {
    this.scale = new Vector2(x, y);
  }

  // Methods to calculate transformations
  getMatrix(): Matrix2D {
    const radians = MathUtils.degreesToRadians(this.rotation);
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);

    return new Matrix2D(
      this.scale.x * cos,
      this.scale.x * -sin,
      this.scale.y * sin,
      this.scale.y * cos,
      this.position.x,
      this.position.y
    );
  }

  /**
   * 
   * @param x 
   * @param y 
   */
  translate(x: number, y: number): void {
    this.position = this.position.add(new Vector2(x, y));
  }

  /**
   * 
   * @param degrees 
   */
  rotate(degrees: number): void {
    this.rotation += degrees;
  }
}
