# Polygon Class

The `Polygon` class represents a 2D polygon defined by a collection of vertices (`Vector2` instances). It provides methods to calculate the area of the polygon and to check if a point is inside the polygon using the even-odd rule.

## Constructor

### `constructor(points: Vector2[])`

Creates a new `Polygon` instance with an array of `Vector2` points representing the vertices of the polygon.

## Methods

### `area(): number`

Calculates and returns the area of the polygon. The area is determined based on the vertices of the polygon using the formula for the signed area of a polygon. The result is always positive.

### `contains(point: Vector2): boolean`

Checks if a point represented by a `Vector2` instance is inside the polygon using the even-odd rule. Returns `true` if the point is inside the polygon, and `false` otherwise.

## Example Usage

```typescript
const vertices = [
  new Vector2(0, 0),
  new Vector2(0, 5),
  new Vector2(5, 5),
  new Vector2(5, 0),
];

const polygon = new Polygon(vertices);
const area = polygon.area();
const pointA = new Vector2(3, 3);
const pointB = new Vector2(1, 1);

const containsPointA = polygon.contains(pointA);
const containsPointB = polygon.contains(pointB);

console.log(area); // 25 (square area)
console.log(containsPointA); // true (pointA is inside the polygon)
console.log(containsPointB); // false (pointB is outside the polygon)
```
