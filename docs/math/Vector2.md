# Vector2 Class

The Vector2 class represents a 2D vector in a Cartesian coordinate system. It provides methods for vector operations, such as addition, subtraction, scalar multiplication, magnitude calculation, normalization, dot product, and angle calculations.

## Class Definition

```typescript
export default class Vector2 {
// Properties
private _x: number;
private _y: number;

// Constructor
constructor(x: number = 0, y: number = 0);

// Getter and Setter Methods
get x(): number;
get y(): number;
set x(value: number);
set y(value: number);

// Methods
public clone(): Vector2;
public add(other: Vector2): Vector2;
public subtract(other: Vector2): Vector2;
public multiplyScalar(scalar: number): Vector2;
public magnitude(): number;
public normalize(): Vector2;
public dot(other: Vector2): number;
public angleTo(other: Vector2): number;
public static angleBetween(vector1: Vector2, vector2: Vector2): number;
}
```

## Class Description

The Vector2 class is designed to represent 2D vectors in a Cartesian coordinate system. It offers various vector operations to manipulate and calculate properties of 2D vectors.

## Constructor

``constructor(x: number = 0, y: number = 0)``

Initializes a new Vector2 instance with optional x and y components.

## Getter and Setter Methods

``x``: Gets or sets the x component of the vector.

``y``: Gets or sets the y component of the vector.

## Methods

``clone()``: Creates a new Vector2 instance that is a copy of the current vector.

``add(other: Vector2)``: Returns a new Vector2 resulting from the addition of the current vector and another vector.

``subtract(other: Vector2)``: Returns a new Vector2 resulting from the subtraction of another vector from the current vector.

``multiplyScalar(scalar: number)``: Returns a new Vector2 resulting from scalar multiplication of the current vector.

``magnitude()``: Calculates and returns the magnitude (length) of the vector.

``normalize()``: Returns a normalized vector, or a zero vector if the current vector has a magnitude of 0.

``dot(other: Vector2)``: Calculates and returns the dot product of the current vector and another vector.

``angleTo(other: Vector2)``: Calculates and returns the angle in radians between the current vector and another vector.

``static angleBetween(vector1: Vector2, vector2: Vector2)``: Calculates and returns the angle in radians between two specified vectors.

## Usage

```typescript
// Usage of the Vector2 class

const vector1 = new Vector2(3, 4);
const vector2 = new Vector2(1, 2);

// Vector addition
const result = vector1.add(vector2);
console.log(result.x, result.y); // Output: 4, 6

// Magnitude calculation
const mag = vector1.magnitude();
console.log(mag); // Output: 5

// Normalization
const normalized = vector1.normalize();
console.log(normalized.x, normalized.y); // Output: 0.6, 0.8

// Dot product
const dotProduct = vector1.dot(vector2);
console.log(dotProduct); // Output: 11

// Angle calculation
const angle = vector1.angleTo(vector2);
console.log(angle); // Output: 0.5880026035475675 (in radians)
```
