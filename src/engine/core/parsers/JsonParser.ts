import Parser from "./Parser";

export default class JSONParser extends Parser {
  parse(dataString: string): any {
    return JSON.parse(dataString);
  }

  stringify(data: any): string {
    return JSON.stringify(data);
  }
}
