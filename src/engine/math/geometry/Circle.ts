import Vector2 from "../Vector2";

export default class Circle {
  private center: Vector2;
  private radius: number;
  
  constructor(center: Vector2, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  /**
   * 
   * @param other 
   * @returns 
   */
  public intersects(other: Circle): boolean {
    const distance = this.center.distanceTo(other.center);
    return distance < this.radius + other.radius;
  }

  /**
   * 
   * @returns 
   */
  public circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  /**
   * 
   * @returns 
   */
  public area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
