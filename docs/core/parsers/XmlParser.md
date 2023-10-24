# XMLParser

The `XMLParser` class extends the `Parser` class and provides methods for parsing XML data. It uses the `xml2js` library for XML parsing and returns the parsed data as a JavaScript object.

## Methods

### `parse(xmlString: string): Promise<any>`

Parses an XML string and returns the corresponding JavaScript object as a Promise.

#### Parameters
- `xmlString` (string): The XML data to be parsed as a string.

#### Returns
- `Promise<any>`: A Promise that resolves to the JavaScript object parsed from the XML string.

## Usage

```typescript
import XMLParser from './XMLParser';

const xmlData = `
<user>
  <name>John Doe</name>
  <age>30</age>
  <city>New York</city>
</user>
`;

const parser = new XMLParser();
parser.parse(xmlData)
  .then((parsedData) => {
    console.log(parsedData);
    // Output: { user: { name: 'John Doe', age: '30', city: 'New York' } }
  })
  .catch((error) => {
    console.error('XML parsing error:', error);
  });
```
