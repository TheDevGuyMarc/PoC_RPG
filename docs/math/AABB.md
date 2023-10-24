# AABB Class

The `AABB` class represents an Axis-Aligned Bounding Box, which is a rectangular region aligned with the coordinate axes. It is commonly used in computer graphics, collision detection, and spatial partitioning to determine intersections and containment of objects in 2D space.

## Constructor

### `constructor(minX: number, minY: number, maxX: number, maxY: number)`

Creates an `AABB` instance with the specified minimum and maximum coordinates that define the bounding box. The `minX` and `minY` represent the minimum (bottom-left) corner, and `maxX` and `maxY` represent the maximum (top-right) corner of the box.

## Methods

### `intersects(other: AABB): boolean`

Determines whether the current `AABB` instance intersects with another `AABB` represented by the `other` parameter. It returns `true` if there is an intersection between the two boxes, otherwise `false`.

### `contains(point: Vector2): boolean`

Checks whether the current `AABB` instance contains a 2D point represented by a `Vector2` object (`point`). It returns `true` if the point is inside the bounding box, otherwise `false`.

## Implementation Details

The `AABB` class is used for efficient collision detection and containment checks in 2D space. It represents a rectangular region with sides parallel to the coordinate axes. The `intersects` method checks for overlap or intersection with another bounding box, while the `contains` method checks if a point is within the bounding box.

## Example Usage

```typescript
const aabb1 = new AABB(0, 0, 10, 10);
const aabb2 = new AABB(5, 5, 15, 15);
const point = new Vector2(2, 2);

if (aabb1.intersects(aabb2)) {
  console.log('AABBs intersect.');
} else {
  console.log('AABBs do not intersect.');
}

if (aabb1.contains(point)) {
  console.log('Point is inside the AABB.');
} else {
  console.log('Point is outside the AABB.');
}
```
