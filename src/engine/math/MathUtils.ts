export default class MathUtils {
  /**
   * 
   * @param degrees 
   * @returns 
   */
  public static degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  /**
   * 
   * @param radians 
   * @returns 
   */
  public static radiansToDegrees(radians: number): number {
    return (radians * 180) / Math.PI;
  }

  /**
   * 
   * @param value 
   * @param min 
   * @param max 
   * @returns 
   */
  public static clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
  }

  /**
   * 
   * @param a 
   * @param b 
   * @param t 
   * @returns 
   */
  public static lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }

  /**
   * 
   * @param min 
   * @param max 
   * @returns 
   */
  public static getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  /**
   * 
   * @param min 
   * @param max 
   * @returns 
   */
  public static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
