export default class Parser {
  /**
   *
   * @param dataString
   */
  public parse(dataString: string): any | Promise<any> | Promise<any[]> {
    throw new Error('Subclasses must implement the parse method.');
  }

  /**
   *
   * @param data
   */
  public stringify(data: any): string {
    throw new Error('Subclasses must implement the stringify method.');
  }
}
