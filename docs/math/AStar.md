# AStar Class

The `AStar` class provides an implementation of the A* search algorithm for pathfinding in a 2D grid. It is used to find the shortest path from a starting point to a goal point in the grid.

## Static Methods

### `findPath(start: Vector2, goal: Vector2, grid: boolean[][], allowDiagonal: boolean = false): Vector2[] | null`

Finds the shortest path from the `start` point to the `goal` point in the given `grid`. The `allowDiagonal` parameter (defaulted to `false`) specifies whether diagonal movement is allowed. This method returns an array of `Vector2` points representing the path from the start to the goal, or `null` if no path is found.

### `heuristic(a: Vector2, b: Vector2): number`

A private method that calculates the Manhattan distance heuristic between two `Vector2` points `a` and `b`. This heuristic is used to estimate the remaining cost from a point to the goal.

### `getLowestFScore(openSet: Vector2[], fScore: Map<string, number>, goal: Vector2): Vector2`

A private method that finds the point in the `openSet` with the lowest `fScore` value. It is used to determine the next point to explore during the search.

### `getNeighbors(current: Vector2, grid: boolean[][], allowDiagonal: boolean): Vector2[]`

A private method that returns an array of neighboring points of the `current` point in the grid. The `allowDiagonal` parameter determines whether diagonal neighbors are included.

### `reconstructPath(cameFrom: Map<string, Vector2 | null>, current: Vector2): Vector2[]`

A private method that reconstructs the path from the `cameFrom` data, starting from the `current` point and moving backward. It returns an array of `Vector2` points representing the path.

## Implementation Details

The `AStar` class implements the A* algorithm for pathfinding using the Manhattan distance heuristic for estimating costs. It explores the grid by considering horizontal, vertical, and optionally diagonal movement. The `findPath` method performs the search, while the private methods assist in the search process.

## Example Usage

```typescript
const start = new Vector2(0, 0);
const goal = new Vector2(5, 5);
const grid = [
  [true, true, true, true, true, true],
  [true, false, false, false, true, true],
  [true, true, true, true, true, true],
  [true, true, true, true, true, true],
  [true, true, false, false, false, true],
  [true, true, true, true, true, true],
];

const path = AStar.findPath(start, goal, grid, true); // Find a path allowing diagonal movement

if (path) {
  console.log(path); // The path from the start to the goal
} else {
  console.log('No path found.');
}
```
