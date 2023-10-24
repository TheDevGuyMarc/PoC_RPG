# Matrix2D Class

The `Matrix2D` class represents a 2D transformation matrix commonly used in graphics and game development to perform transformations like translation, scaling, and rotation on 2D objects.

## Constructor

### `constructor(a: number, b: number, c: number, d: number, tx: number, ty: number)`

Creates a new `Matrix2D` instance with the specified values for matrix elements. The matrix elements are used to perform various 2D transformations.

## Methods

### `translate(x: number, y: number): Matrix2D`

Returns a new `Matrix2D` instance representing a translation transformation. It translates the matrix by the specified `x` and `y` values, effectively moving objects in the 2D space.

### `scale(scaleX: number, scaleY: number): Matrix2D`

Returns a new `Matrix2D` instance representing a scaling transformation. It scales the matrix along the X and Y axes by the specified `scaleX` and `scaleY` values.

### `rotate(degrees: number): Matrix2D`

Returns a new `Matrix2D` instance representing a rotation transformation. It rotates the matrix by the specified angle in degrees. The rotation is performed around the origin (0,0) unless combined with translation.

## Example Usage

```typescript
const initialMatrix = new Matrix2D(1, 0, 0, 1, 0, 0);
const translationMatrix = initialMatrix.translate(2, 3);
const scalingMatrix = initialMatrix.scale(2, 2);
const rotationMatrix = initialMatrix.rotate(45); // 45 degrees

console.log(translationMatrix); // Translated matrix
console.log(scalingMatrix); // Scaled matrix
console.log(rotationMatrix); // Rotated matrix
```
