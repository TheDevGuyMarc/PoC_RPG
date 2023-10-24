import MathUtils from "./MathUtils";

export default class Matrix2D {
  private a: number;
  private b: number;
  private c: number;
  private d: number;
  private tx: number;
  private ty: number;

  constructor(a: number, b: number, c: number, d: number, tx: number, ty: number) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
  }

  /**
   * 
   * @param x 
   * @param y 
   * @returns 
   */
  public translate(x: number, y: number): Matrix2D {
    return new Matrix2D(this.a, this.b, this.c, this.d, this.tx + x, this.ty + y);
  }

  /**
   * 
   * @param scaleX 
   * @param scaleY 
   * @returns 
   */
  public scale(scaleX: number, scaleY: number): Matrix2D {
    return new Matrix2D(this.a * scaleX, this.b, this.c, this.d * scaleY, this.tx, this.ty);
  }

  /**
   * 
   * @param degrees 
   * @returns 
   */
  public rotate(degrees: number): Matrix2D {
    const radians = MathUtils.degreesToRadians(degrees);
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    return new Matrix2D(
      this.a * cos - this.b * sin,
      this.a * sin + this.b * cos,
      this.c * cos - this.d * sin,
      this.c * sin + this.d * cos,
      this.tx,
      this.ty
    );
  }
}
