# MathUtils Class

The `MathUtils` class provides a collection of commonly used mathematical utility functions, such as converting between degrees and radians, clamping values, linear interpolation (lerp), and generating random numbers.

## Static Methods

### `degreesToRadians(degrees: number): number`

Converts degrees to radians and returns the result. This function is useful for converting angles between different units.

### `radiansToDegrees(radians: number): number`

Converts radians to degrees and returns the result. This function is useful for converting angles between different units.

### `clamp(value: number, min: number, max: number): number`

Clamps a numeric value within a specified range. If the `value` is less than `min`, it is set to `min`. If it is greater than `max`, it is set to `max`. Otherwise, the `value` remains unchanged.

### `lerp(a: number, b: number, t: number): number`

Performs linear interpolation (lerp) between two values `a` and `b` using a interpolation factor `t`. It returns a value that is a linear combination of `a` and `b`, based on the `t` value.

### `getRandomFloat(min: number, max: number): number`

Generates a random floating-point number between the specified `min` (inclusive) and `max` (exclusive). The result is a random number within the given range.

### `getRandomInt(min: number, max: number): number`

Generates a random integer between the specified `min` (inclusive) and `max` (inclusive). The result is a random integer within the given range.

## Example Usage

```typescript
const degrees = 45;
const radians = MathUtils.degreesToRadians(degrees);

const clampedValue = MathUtils.clamp(15, 10, 20);

const lerpResult = MathUtils.lerp(0, 10, 0.5);

const randomFloat = MathUtils.getRandomFloat(1.0, 10.0);

const randomInt = MathUtils.getRandomInt(1, 100);

console.log(radians); // 0.7853981633974483 (radians equivalent to 45 degrees)
console.log(clampedValue); // 15 (value clamped between 10 and 20)
console.log(lerpResult); // 5 (linear interpolation result)
console.log(randomFloat); // Random float between 1.0 and 10.0
console.log(randomInt); // Random integer between 1 and 100
```
