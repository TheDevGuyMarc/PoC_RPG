import Vector2 from "./Vector2";

export default class AABB {
  private minX: number;
  private minY: number;
  private maxX: number;
  private maxY: number;

  constructor(minX: number, minY: number, maxX: number, maxY: number) {
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }

  /**
   * 
   * @param other 
   * @returns 
   */
  public intersects(other: AABB): boolean {
    return this.maxX >= other.minX && this.minX <= other.maxX && this.maxY >= other.minY && this.minY <= other.maxY;
  }

  /**
   * 
   * @param point 
   * @returns 
   */
  public contains(point: Vector2): boolean {
    return point.x >= this.minX && point.x <= this.maxX && point.y >= this.minY && point.y <= this.maxY;
  }
}
