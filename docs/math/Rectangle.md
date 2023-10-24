# Rectangle Class

The `Rectangle` class represents a 2D rectangle defined by its position (top-left corner), width, and height. It is commonly used in graphics and game development to represent areas or bounding boxes.

## Constructor

### `constructor(x: number, y: number, width: number, height: number)`

Creates a new `Rectangle` instance with the specified `x` and `y` coordinates of the top-left corner, `width`, and `height` values.

## Methods

### `intersects(other: Rectangle): boolean`

Checks if the current `Rectangle` intersects with another `Rectangle`. Returns `true` if there is an overlap between the two rectangles, otherwise, returns `false`.

### `contains(point: Vector2): boolean`

Checks if a point represented by a `Vector2` instance is contained within the current `Rectangle`. Returns `true` if the point is inside the rectangle, otherwise, returns `false`.

### `area(): number`

Calculates and returns the area (total number of pixels) of the `Rectangle` based on its `width` and `height`.

## Example Usage

```typescript
const rectA = new Rectangle(0, 0, 10, 10);
const rectB = new Rectangle(5, 5, 10, 10);
const point = new Vector2(3, 3);

const doesIntersect = rectA.intersects(rectB);
const containsPoint = rectA.contains(point);
const area = rectA.area();

console.log(doesIntersect); // true
console.log(containsPoint); // true
console.log(area); // 100
```
