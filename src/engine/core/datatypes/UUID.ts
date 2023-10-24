export default class UUID {
  private static pattern: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  public static generate(): string {
    return UUID.pattern.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
