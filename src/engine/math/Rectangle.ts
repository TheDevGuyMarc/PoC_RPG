import Vector2 from "./Vector2";

export default class Rectangle {
  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /**
   * 
   * @param other 
   * @returns 
   */
  public intersects(other: Rectangle): boolean {
    return (
      this.x < other.x + other.width &&
      this.x + this.width > other.x &&
      this.y < other.y + other.height &&
      this.y + this.height > other.y
    );
  }

  /**
   * 
   * @param point 
   * @returns 
   */
  public contains(point: Vector2): boolean {
    return point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height;
  }

  /**
   * 
   * @returns 
   */
  public area(): number {
    return this.width * this.height;
  }
}
