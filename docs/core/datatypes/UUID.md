# UUID Class

The `UUID` class is a utility class for generating Version 4 (random) Universally Unique Identifiers (UUIDs) following the pattern 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.

## Class Properties

### `pattern: string`

The UUID pattern used for generating UUIDs. It follows the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', where 'x' represents a hexadecimal digit and 'y' represents one of eight possible hexadecimal values.

## Class Methods

### `generate(): string`

Generates a new random UUID based on the specified pattern. It replaces 'x' and 'y' in the pattern with random hexadecimal digits.

## Usage

```typescript
// Generate a new UUID
const uuid = UUID.generate();

// Example UUID: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
console.log(uuid);
```
