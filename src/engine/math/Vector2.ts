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

  set x(value: number) {
    this._x = value;
  }

  set y(value: number) {
    this._y = value;
  }

  /**
   * 
   * @returns 
   */
  public clone(): Vector2 {
    return new Vector2(this._x, this._y)
  }

  /**
   * 
   * @param other 
   * @returns 
   */
  public equals(other: Vector2): boolean {
    return this.x === other.x && this.y === other.y;
  }

  /**
   * 
   * @param other 
   * @returns 
   */
  public add(other: Vector2): Vector2 {
    return new Vector2(this._x + other.x, this._y + other.y);
  }

  /**
   * 
   * @param other 
   * @returns 
   */
  public subtract(other: Vector2): Vector2 {
    return new Vector2(this._x - other.x, this._y - other.y);
  }

  /**
   * 
   * @param scalar 
   * @returns 
   */
  public multiplyScalar(scalar: number): Vector2 {
    return new Vector2(this._x * scalar, this._y * scalar);
  }

  /**
   * 
   * @returns 
   */
  public magnitude(): number {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }

  /**
   * 
   * @returns 
   */
  public normalize(): Vector2 {
    const mag = this.magnitude();
    if (mag === 0) {
      return new Vector2(0, 0);
    }
    return new Vector2(this._x / mag, this._y / mag);
  }

  /**
   * 
   * @param other 
   * @returns 
   */
  public dot(other: Vector2): number {
    return this._x * other.x + this._y * other.y;
  }

  /**
   * 
   * @param other 
   * @returns 
   */
  public angleTo(other: Vector2): number {
    return Math.atan2(other.y - this._y, other.x - this._x);
  }

  /**
   * 
   * @param other 
   * @returns 
   */
  public distanceTo(other: Vector2): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * 
   * @param vector1 
   * @param vector2 
   * @returns 
   */
  public static angleBetween(vector1: Vector2, vector2: Vector2): number {
    return Math.atan2(vector2.y - vector1.y, vector2.x - vector1.x);
  }
}
