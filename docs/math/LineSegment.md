# LineSegment Class

The `LineSegment` class represents a line segment defined by two endpoints in a 2D space. It provides methods to check for intersection with other line segments and calculate the distance from a point to the line segment.

## Constructor

### `constructor(startPoint: Vector2, endPoint: Vector2)`

Creates a new `LineSegment` with the specified `startPoint` and `endPoint` coordinates. These points define the two endpoints of the line segment.

## Public Methods

### `intersects(other: LineSegment): boolean`

Determines whether the current line segment intersects with another line segment represented by the `other` parameter. This method uses the orientation of points to check for intersection.

- `other`: The other `LineSegment` to check for intersection.

### `distanceTo(point: Vector2): number`

Calculates the shortest distance from a point to the line segment. The method takes a `point` parameter, and the result is the distance from the point to the line segment.

- `point`: The `Vector2` point for which you want to calculate the distance.

## Private Method

### `getOrientation(p1: Vector2, p2: Vector2, p3: Vector2): number`

This private method is used internally to determine the orientation of three points (`p1`, `p2`, and `p3`). It returns a value that indicates whether the points are collinear, clockwise, or counterclockwise.

- `p1`, `p2`, `p3`: The `Vector2` points to check for orientation.

## Example Usage

```javascript
const startPoint1 = new Vector2(0, 0);
const endPoint1 = new Vector2(5, 5);
const lineSegment1 = new LineSegment(startPoint1, endPoint1);

const startPoint2 = new Vector2(2, 0);
const endPoint2 = new Vector2(2, 5);
const lineSegment2 = new LineSegment(startPoint2, endPoint2);

const point = new Vector2(1, 1);

const isIntersecting = lineSegment1.intersects(lineSegment2);
const distance = lineSegment1.distanceTo(point);

console.log(isIntersecting); // true (lineSegment1 and lineSegment2 intersect)
console.log(distance); // 0.7071067811865476 (distance from point to lineSegment1)
