# Transform Class

The `Transform` class represents a transformation that includes position, rotation, and scale. It's commonly used in graphics and game development to represent the transformation of an object in a 2D space.

## Properties

### `position: Vector2`

Represents the position of the object in a 2D space.

### `rotation: number`

The rotation angle of the object in degrees.

### `scale: Vector2`

Represents the scaling factors for the object along the X and Y axes.

## Constructor

### `constructor(position: Vector2, rotation: number = 0, scale: Vector2 = new Vector2(1, 1))`

Creates a new `Transform` instance with the specified `position`, `rotation` (in degrees), and `scale`. The default rotation is 0 degrees, and the default scale is (1, 1).

## Methods

### `setScale(x: number, y: number): void`

Sets the scale of the object to the specified `x` and `y` values.

### `getMatrix(): Matrix2D`

Calculates and returns a transformation matrix (`Matrix2D`) based on the current `position`, `rotation`, and `scale` values. The matrix can be used to transform graphical objects in a 2D space.

### `translate(x: number, y: number): void`

Translates the object's position by the specified `x` and `y` values.

### `rotate(degrees: number): void`

Rotates the object by the specified angle in degrees.

## Example Usage

```typescript
const position = new Vector2(3, 4);
const scale = new Vector2(2, 2);
const transform = new Transform(position, 45, scale);

transform.translate(2, 2);
transform.rotate(30);

const matrix = transform.getMatrix();

console.log(matrix); // Example output: Matrix2D { a: 1.414213562373095, b: -0.7071067811865475, c: 0.7071067811865475, d: 1.414213562373095, tx: 5, ty: 6 }
```
