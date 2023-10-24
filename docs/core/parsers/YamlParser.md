# YAMLParser

The `YAMLParser` is a class that provides methods for parsing and stringifying data in YAML format. It extends the `Parser` class and overrides its `parse` and `stringify` methods.

## Methods

### `parse(yamlString: string): any`

Parses a YAML string and returns the corresponding JavaScript object.

#### Parameters
- `yamlString` (string): The YAML data to be parsed as a string.

#### Returns
- `any`: The JavaScript object parsed from the YAML string. The optional `{ json: true }` option is used when parsing to ensure it handles JSON-like YAML.

### `stringify(data: any): string`

Converts a JavaScript object into a YAML string.

#### Parameters
- `data` (any): The JavaScript object to be converted into YAML.

#### Returns
- `string`: The YAML string representation of the provided data. The optional `{ json: true }` option is used when stringifying to produce JSON-like YAML.

## Usage

```typescript
import YAMLParser from './YAMLParser';

const yamlData = `
name: John Doe
age: 30
city: New York
`;

const parser = new YAMLParser();
const parsedData = parser.parse(yamlData);

console.log(parsedData);
// Output: { name: 'John Doe', age: 30, city: 'New York' }

const jsonData = { name: 'Alice', age: 25, city: 'Los Angeles' };
const yamlString = parser.stringify(jsonData);

console.log(yamlString);
// Output:
// name: Alice
// age: 25
// city: Los Angeles
```
