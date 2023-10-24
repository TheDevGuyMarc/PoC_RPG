class Profiler {
  private static instance: Profiler;
  private enabled: boolean;
  private profileData: Map<string, number[][]>;

  private constructor() {
    this.enabled = false;
    this.profileData = new Map();
  }

  public static getInstance(): Profiler {
    if (!Profiler.instance) {
      Profiler.instance = new Profiler();
    }
    return Profiler.instance;
  }

  /**
   *
   */
  public enable(): void {
    this.enabled = true;
  }

  /**
   *
   */
  public disable(): void {
    this.enabled = false;
  }

  /**
   *
   * @param name
   */
  public start(name: string): void {
    if (this.enabled) {
      if (!this.profileData.has(name)) {
        this.profileData.set(name, []);
      }
      this.profileData.get(name)!.push([performance.now()]);
    }
  }

  /**
   *
   * @param name
   */
  public stop(name: string): void {
    if (this.enabled) {
      if (this.profileData.has(name)) {
        this.profileData.get(name)![this.profileData.get(name)!.length - 1].push(performance.now());
      }
    }
  }

  /**
   *
   */
  public clearData(): void {
    this.profileData.clear();
  }

  /**
   *
   */
  public printReport(): void {
    if (this.enabled) {
      this.profileData.forEach((timestamps, name) => {
        let total = 0;
        for (const timestampPair of timestamps) {
          total += timestampPair[1] - timestampPair[0];
        }
        const average = total / timestamps.length;
        console.log(`Profile "${name}": Total time (ms): ${total}, Average time (ms): ${average}`);
      });
    }
  }
}
