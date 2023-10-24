import Vector2 from "./Vector2";

export default class AStar {
  public static findPath(start: Vector2, goal: Vector2, grid: boolean[][], allowDiagonal: boolean = false): Vector2[] | null {
    const openSet: Vector2[] = [start];
    const cameFrom: Map<string, Vector2 | null> = new Map();
    const gScore: Map<string, number> = new Map();
    const fScore: Map<string, number> = new Map();

    gScore[start.toString()] = 0;
    fScore[start.toString()] = AStar.heuristic(start, goal);

    while (openSet.length > 0) {
      const current = AStar.getLowestFScore(openSet, fScore, goal);

      if (current.equals(goal)) {
        return AStar.reconstructPath(cameFrom, current);
      }

      openSet.splice(openSet.indexOf(current), 1);

      for (const neighbor of AStar.getNeighbors(current, grid, allowDiagonal)) {
        const tentativeGScore = (gScore[current.toString()] || Infinity) + 1;

        if (tentativeGScore < (gScore[neighbor.toString()] || Infinity)) {
          cameFrom.set(neighbor.toString(), current);
          gScore[neighbor.toString()] = tentativeGScore;
          fScore[neighbor.toString()] = tentativeGScore + AStar.heuristic(neighbor, goal);

          if (!openSet.includes(neighbor)) {
            openSet.push(neighbor);
          }
        }
      }
    }

    return null; // No path found
  }

  /**
   * Manhattan distance heuristic
   * @param a
   * @param b
   * @private
   */
  private static heuristic(a: Vector2, b: Vector2): number {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }

  /**
   *
   * @param openSet
   * @param fScore
   * @param goal
   * @private
   */
  private static getLowestFScore(openSet: Vector2[], fScore: Map<string, number>, goal: Vector2): Vector2 {
    let lowest = openSet[0];
    for (const node of openSet) {
      if (fScore[node.toString()] < fScore[lowest.toString()]) {
        lowest = node;
      }
    }
    return lowest;
  }

  /**
   *
   * @param current
   * @param grid
   * @param allowDiagonal
   * @private
   */
  private static getNeighbors(current: Vector2, grid: boolean[][], allowDiagonal: boolean): Vector2[] {
    const neighbors: Vector2[] = [];
    const x = current.x;
    const y = current.y;
    const width = grid.length;
    const height = grid[0].length;

    const offsets = [
      [-1, 0], [1, 0], [0, -1], [0, 1] // Horizontal and vertical neighbors
    ];

    if (allowDiagonal) {
      offsets.push([-1, -1], [-1, 1], [1, -1], [1, 1]); // Diagonal neighbors
    }

    for (const offset of offsets) {
      const newX = x + offset[0];
      const newY = y + offset[1];
      if (newX >= 0 && newX < width && newY >= 0 && newY < height && grid[newX][newY]) {
        neighbors.push(new Vector2(newX, newY));
      }
    }

    return neighbors;
  }

  /**
   *
   * @param cameFrom
   * @param current
   * @private
   */
  private static reconstructPath(cameFrom: Map<string, Vector2 | null>, current: Vector2): Vector2[] {
    const path: Vector2[] = [current];
    while (cameFrom.has(current.toString())) {
      current = cameFrom.get(current.toString())!;
      path.unshift(current);
    }
    return path;
  }
}
