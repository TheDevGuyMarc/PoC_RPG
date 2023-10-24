# Circle Class

The `Circle` class represents a circle in a 2D space. It is defined by its center point and radius. This class provides methods to check for intersections with other circles, calculate the circumference, and determine the area of the circle.

## Constructor

### `constructor(center: Vector2, radius: number)`

Creates a new `Circle` with the specified `center` and `radius`. The `center` parameter represents the center point of the circle, and the `radius` parameter is the radius of the circle.

## Public Methods

### `intersects(other: Circle): boolean`

Checks whether the current circle intersects with another circle represented by the `other` parameter. Two circles intersect if the distance between their centers is less than the sum of their radii.

- `other`: The other `Circle` to check for intersection.

  ### `circumference(): number`

Calculates and returns the circumference (perimeter) of the circle. The circumference is determined using the formula `2 * π * radius`.

### `area(): number`

Calculates and returns the area of the circle. The area is determined using the formula `π * radius^2`.

## Example Usage

```typescript
const center1 = new Vector2(0, 0);
const radius1 = 3;
const circle1 = new Circle(center1, radius1);

const center2 = new Vector2(5, 0);
const radius2 = 2;
const circle2 = new Circle(center2, radius2);

const isIntersecting = circle1.intersects(circle2);
const circumference = circle1.circumference();
const area = circle1.area();

console.log(isIntersecting); // true (circle1 and circle2 intersect)
console.log(circumference); // 18.84955592153876 (circumference of circle1)
console.log(area); // 28.274333882308138 (area of circle1)
```
