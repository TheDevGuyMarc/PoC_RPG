# RandomNumberGenerator Class

The `RandomNumberGenerator` class is a simple random number generator that uses the XOR-Shift algorithm. It allows you to generate random integers, random floating-point numbers, and random booleans. The class can be initialized with a seed or use the current timestamp as the default seed.

## Class Methods

### `constructor(seed: number = Date.now())`

Creates an instance of the `RandomNumberGenerator` class. You can specify an optional seed, which defaults to the current timestamp.

### `generateRandomInteger(min: number, max: number): number`

Generates a random integer within the specified range [min, max).

- `min` (number): The minimum value (inclusive).
- `max` (number): The maximum value (exclusive).

### `generateRandomFloat(min: number, max: number): number`

Generates a random floating-point number within the specified range [min, max).

- `min` (number): The minimum value (inclusive).
- `max` (number): The maximum value (exclusive).

### `generateRandomBoolean(): boolean`

Generates a random boolean value (true or false).

## Internal Method

### `private xorshift(): number`

This method implements the XOR-Shift algorithm to generate pseudo-random numbers. It is not intended for external use.

## Usage

```typescript
// Create an instance of the RandomNumberGenerator
const rng = new RandomNumberGenerator();

// Generate a random integer between 1 and 10 (inclusive)
const randomInt = rng.generateRandomInteger(1, 11);

// Generate a random floating-point number between 0 and 1
const randomFloat = rng.generateRandomFloat(0, 1);

// Generate a random boolean
const randomBool = rng.generateRandomBoolean();
