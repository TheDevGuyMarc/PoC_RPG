import Vector2 from "./Vector2";

export default class LineSegment {
  private startPoint: Vector2;
  private endPoint: Vector2;

  constructor(startPoint: Vector2, endPoint: Vector2) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  /**
   * 
   * @param other 
   * @returns 
   */
  public intersects(other: LineSegment): boolean {
    // Line segment intersection logic
    // A line segment (p1, p2) intersects with another line segment (p3, p4) if and only if
    // the orientation of (p1, p2, p3) is different from (p1, p2, p4) and
    // the orientation of (p3, p4, p1) is different from (p3, p4, p2).

    const p1 = this.startPoint;
    const p2 = this.endPoint;
    const p3 = other.startPoint;
    const p4 = other.endPoint;

    const orientation1 = this.getOrientation(p1, p2, p3);
    const orientation2 = this.getOrientation(p1, p2, p4);
    const orientation3 = this.getOrientation(p3, p4, p1);
    const orientation4 = this.getOrientation(p3, p4, p2);

    return orientation1 !== orientation2 && orientation3 !== orientation4;
  }

  /**
   * 
   * @param point 
   * @returns 
   */
  public distanceTo(point: Vector2): number {
    // Point-to-line distance calculation logic
    const p1 = this.startPoint;
    const p2 = this.endPoint;
    const p3 = point;

    const numerator = Math.abs(
        (p2.y - p1.y) * p3.x - (p2.x - p1.x) * p3.y + p2.x * p1.y - p2.y * p1.x
    );
    const denominator = Math.sqrt((p2.y - p1.y) ** 2 + (p2.x - p1.x) ** 2);

    return numerator / denominator;
  }

  private getOrientation(p1: Vector2, p2: Vector2, p3: Vector2): number {
    const val = (p2.y - p1.y) * (p3.x - p2.x) - (p2.x - p1.x) * (p3.y - p2.y);

    if (val === 0) return 0; // Collinear
    return val > 0 ? 1 : 2; // Clockwise or counterclockwise
  }
}
