import * as csv from 'csv-parser';
import { Readable } from 'stream';
import Parser from "./Parser";
export default class CSVParser extends Parser {
  async parse(dataString: string): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      const results: any[] = [];
      const stream = csv({ separator: ',' });

      stream.on('data', (data) => {
        results.push(data);
      });

      stream.on('end', () => {
        resolve(results);
      });

      stream.on('error', (error) => {
        reject(error);
      });

      const input = Readable.from(dataString);
      input.pipe(stream);
    });
  }
}
