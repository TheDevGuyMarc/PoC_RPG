# BezierCurve Class

The `BezierCurve` class represents a cubic Bézier curve in a 2D space. It is defined by its starting point, two control points, and an ending point. This class provides methods to evaluate points along the curve and calculate the tangent at a specific parameter value.

## Constructor

### `constructor(start: Vector2, controlPoint1: Vector2, controlPoint2: Vector2, end: Vector2)`

Creates a new `BezierCurve` with the specified `start`, `controlPoint1`, `controlPoint2`, and `end`. The `start` parameter represents the starting point of the curve, `controlPoint1` and `controlPoint2` are the control points that influence the curve's shape, and `end` is the ending point of the curve.

## Public Methods

### `evaluate(t: number): Vector2`

Evaluates the position of a point on the curve at a specific parameter value `t`. The parameter `t` ranges from 0 to 1 and defines a position along the curve.

### `tangentAt(t: number): Vector2`

Calculates the tangent vector of the curve at a specific parameter value `t`. The tangent represents the direction of the curve at the given parameter value.

## Implementation Details

The `BezierCurve` class implements cubic Bézier curve evaluation and tangent calculation using the Bernstein basis polynomial. This polynomial allows for precise interpolation of points along the curve and tangent calculations. The equations used for evaluation and tangent calculation are based on the derivative of the Bernstein basis polynomial.

## Example Usage

```typescript
const start = new Vector2(0, 0);
const controlPoint1 = new Vector2(20, 10);
const controlPoint2 = new Vector2(30, 40);
const end = new Vector2(50, 50);

const bezierCurve = new BezierCurve(start, controlPoint1, controlPoint2, end);

const pointAtT = bezierCurve.evaluate(0.5); // Evaluate the curve at t = 0.5
const tangentAtT = bezierCurve.tangentAt(0.5); // Calculate the tangent at t = 0.5

console.log(pointAtT); // The position of the curve at t = 0.5
console.log(tangentAtT); // The tangent vector of the curve at t = 0.5
```
