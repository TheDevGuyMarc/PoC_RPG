export default class Vector2 {
  private _x: number;
  private _y: number;

  constructor(x: number = 0, y: number = 0) {
    this._x = x;
    this._y = y;
  }
  
  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  public clone(): Vector2 {
    return new Vector2(this._x, this._y)
  }

  public add(other: Vector2): Vector2 {
    return new Vector2(this._x + other.x, this._y + other.y);
  }

  public subtract(other: Vector2): Vector2 {
    return new Vector2(this._x - other.x, this._y - other.y);
  }

  public multiplyScalar(scalar: number): Vector2 {
    return new Vector2(this._x * scalar, this._y * scalar);
  }

  public magnitude(): number {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }

  public normalize(): Vector2 {
    const mag = this.magnitude();
    if (mag === 0) {
      return new Vector2(0, 0);
    }
    return new Vector2(this._x / mag, this._y / mag);
  }

  public dot(other: Vector2): number {
    return this._x * other.x + this._y * other.y;
  }

  public angleTo(other: Vector2): number {
    return Math.atan2(other.y - this._y, other.x - this._x);
  }

  public static angleBetween(vector1: Vector2, vector2: Vector2): number {
    return Math.atan2(vector2.y - vector1.y, vector2.x - vector1.x);
  }
}
