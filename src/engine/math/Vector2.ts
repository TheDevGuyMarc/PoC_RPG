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
}
