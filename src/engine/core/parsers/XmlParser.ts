import * as xml2js from 'xml2js';
import Parser from "./Parser";
export default class XMLParser extends Parser {
  async parse(xmlString: string): Promise<any> {
    const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });
    return new Promise<any>((resolve, reject) => {
      parser.parseString(xmlString, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}
