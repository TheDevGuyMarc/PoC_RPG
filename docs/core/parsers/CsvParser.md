# CSVParser

The `CSVParser` class extends the `Parser` class and provides methods for parsing CSV (Comma-Separated Values) data. It uses the `csv-parser` library to parse CSV data and returns the parsed data as an array of objects.

## Methods

### `parse(dataString: string): Promise<any[]>`

Parses a CSV data string and returns the parsed data as an array of objects. This method returns a Promise that resolves to the parsed data.

#### Parameters
- `dataString` (string): The CSV data to be parsed as a string.

#### Returns
- `Promise<any[]>`: A Promise that resolves to an array of objects representing the parsed data.

## Usage

```typescript
import CSVParser from './CSVParser';

const csvData = `
name,age,city
John Doe,30,New York
Alice Smith,25,Los Angeles
Bob Johnson,35,Chicago
`;

const parser = new CSVParser();
parser.parse(csvData)
  .then((parsedData) => {
    console.log(parsedData);
    // Output: 
    // [
    //   { name: 'John Doe', age: '30', city: 'New York' },
    //   { name: 'Alice Smith', age: '25', city: 'Los Angeles' },
    //   { name: 'Bob Johnson', age: '35', city: 'Chicago' }
    // ]
  })
  .catch((error) => {
    console.error('CSV parsing error:', error);
  });
```
