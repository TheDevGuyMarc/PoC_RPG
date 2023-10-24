import Vector2 from "./Vector2";

export default class BezierCurve {
  private start: Vector2;
  private controlPoint1: Vector2;
  private controlPoint2: Vector2;
  private end: Vector2;

  constructor(start: Vector2, controlPoint1: Vector2, controlPoint2: Vector2, end: Vector2) {
    this.start = start;
    this.controlPoint1 = controlPoint1;
    this.controlPoint2 = controlPoint2;
    this.end = end;
  }

  /**
   * Implement curve evaluation logic using the Bernstein basis polynomial for cubic Bezier curves
   * @param t 
   * @returns 
   */
  public evaluate(t: number): Vector2 {
    const t1 = 1 - t;
    const t2 = t1 * t1;
    const t3 = t2 * t1;

    const p0 = this.start;
    const p1 = this.controlPoint1;
    const p2 = this.controlPoint2;
    const p3 = this.end;

    const x = t3 * p0.x + 3 * t2 * t * p1.x + 3 * t1 * t * t * p2.x + t3 * p3.x;
    const y = t3 * p0.y + 3 * t2 * t * p1.y + 3 * t1 * t * t * p2.y + t3 * p3.y;

    return new Vector2(x, y);
  }

  /**
   * Implement tangent calculation using the derivative of the Bernstein basis polynomial
   * @param t 
   * @returns 
   */
  public tangentAt(t: number): Vector2 {
    const t1 = 1 - t;

    const p0 = this.start;
    const p1 = this.controlPoint1;
    const p2 = this.controlPoint2;
    const p3 = this.end;

    const x = -3 * p0.x * t1 * t1 + 3 * p1.x * (3 * t1 * t1 - 2 * t1 * t) + 3 * p2.x * (2 * t1 * t - 3 * t * t) + 3 * p3.x * t * t;
    const y = -3 * p0.y * t1 * t1 + 3 * p1.y * (3 * t1 * t1 - 2 * t1 * t) + 3 * p2.y * (2 * t1 * t - 3 * t * t) + 3 * p3.y * t * t;

    return new Vector2(x, y);
  }
}
