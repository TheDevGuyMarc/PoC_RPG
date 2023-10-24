# Vector2 Class

The `Vector2` class represents a 2D vector with `x` and `y` components.

## Constructor

### `constructor(x: number = 0, y: number = 0)`

Creates a new `Vector2` instance with optional initial `x` and `y` components. If no values are provided, the vector is initialized as the origin (0, 0).

## Properties

### `x: number`

Gets or sets the `x` component of the vector.

### `y: number`

Gets or sets the `y` component of the vector.

## Methods

### `clone(): Vector2`

Creates a new `Vector2` instance that is a copy of the current vector.

### `equals(other: Vector2): boolean`

Checks if the current vector is equal to another `Vector2` instance based on the equality of their `x` and `y` components.

### `add(other: Vector2): Vector2`

Adds another `Vector2` to the current vector and returns a new `Vector2` representing the sum.

### `subtract(other: Vector2): Vector2`

Subtracts another `Vector2` from the current vector and returns a new `Vector2` representing the difference.

### `multiplyScalar(scalar: number): Vector2`

Multiplies the vector by a scalar value and returns a new `Vector2` with the scaled components.

### `magnitude(): number`

Calculates the magnitude (length) of the vector using the Euclidean distance formula.

### `normalize(): Vector2`

Normalizes the vector to have a magnitude of 1 while preserving its direction.

### `dot(other: Vector2): number`

Calculates the dot product of the current vector and another `Vector2`.

### `angleTo(other: Vector2): number`

Calculates the angle in radians between the current vector and another `Vector2`.

### `distanceTo(other: Vector2): number`

Calculates the Euclidean distance between the current vector and another `Vector2`.

## Static Methods

### `angleBetween(vector1: Vector2, vector2: Vector2): number`

Calculates the angle in radians between two `Vector2` instances.

## Example Usage

```typescript
const vectorA = new Vector2(3, 4);
const vectorB = new Vector2(1, 2);

const sum = vectorA.add(vectorB);
const length = vectorA.magnitude();
const normalized = vectorA.normalize();
const dotProduct = vectorA.dot(vectorB);
const angle = vectorA.angleTo(vectorB);
const distance = vectorA.distanceTo(vectorB);

const angleBetween = Vector2.angleBetween(vectorA, vectorB);

console.log(sum); // Vector2 { x: 4, y: 6 }
console.log(length); // 5
console.log(normalized); // Vector2 { x: 0.6, y: 0.8 }
console.log(dotProduct); // 11
console.log(angle); // 0.5880026035475675
console.log(distance); // 2.23606797749979
console.log(angleBetween); // 0.5880026035475675
```
