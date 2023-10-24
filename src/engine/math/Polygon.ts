import Vector2 from "./Vector2";

export default class Polygon {
  points: Vector2[];

  constructor(points: Vector2[]) {
    this.points = points;
  }

  /**
   * 
   * @returns 
   */
  public area(): number {
    let area = 0;
    const n = this.points.length;

    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      area += this.points[i].x * this.points[j].y - this.points[j].x * this.points[i].y;
    }

    return Math.abs(area) / 2;
  }

  /**
   * Method to check if a point is inside the polygon (even-odd rule)
   * @param point 
   * @returns 
   */
  public contains(point: Vector2): boolean {
    let inside = false;
    const n = this.points.length;

    for (let i = 0, j = n - 1; i < n; j = i++) {
      const xi = this.points[i].x;
      const yi = this.points[i].y;
      const xj = this.points[j].x;
      const yj = this.points[j].y;

      const intersect = ((yi > point.y) != (yj > point.y)) &&
        (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);

      if (intersect) inside = !inside;
    }

    return inside;
  }
}
