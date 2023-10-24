export default class RandomNumberGenerator {
  private seed: number;

  constructor(seed: number = Date.now()) {
    this.seed = seed;
  }

  /**
   *
   * @private
   */
  private xorshift(): number {
    let x = this.seed;
    x ^= x << 21;
    x ^= x >>> 35;
    x ^= x << 4;
    this.seed = x;
    return (x & 0x7FFFFFFF) / 0x7FFFFFFF; // Normalize to [0, 1)
  }

  /**
   *
   * @param min
   * @param max
   */
  public generateRandomInteger(min: number, max: number): number {
    if (min >= max) {
      throw new Error("Min value must be less than max value.");
    }
    return Math.floor(this.xorshift() * (max - min) + min);
  }

  /**
   *
   * @param min
   * @param max
   */
  public generateRandomFloat(min: number, max: number): number {
    if (min >= max) {
      throw new Error("Min value must be less than max value.");
    }
    return this.xorshift() * (max - min) + min;
  }

  /**
   *
   */
  public generateRandomBoolean(): boolean {
    return this.xorshift() < 0.5;
  }
}

