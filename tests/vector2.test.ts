import Vector2 from "../src/engine/math/Vector2";

describe("Vector2 Class", () => {
  it("should have default values (0, 0) when created without parameters", () => {
    const vector = new Vector2();
    expect(vector.x).toBe(0);
    expect(vector.y).toBe(0);
  });

  it("should correctly set x and y values when created with parameters", () => {
    const vector = new Vector2(3, 4);
    expect(vector.x).toBe(3);
    expect(vector.y).toBe(4);
  });

  it("should clone the vector", () => {
    const original = new Vector2(3, 4);
    const cloned = original.clone();
    expect(cloned.x).toBe(original.x);
    expect(cloned.y).toBe(original.y);
  });

  it("should add vectors", () => {
    const vector1 = new Vector2(3, 4);
    const vector2 = new Vector2(1, 2);
    const result = vector1.add(vector2);
    expect(result.x).toBe(4);
    expect(result.y).toBe(6);
  });

  it("should subtract vectors", () => {
    const vector1 = new Vector2(3, 4);
    const vector2 = new Vector2(1, 2);
    const result = vector1.subtract(vector2);
    expect(result.x).toBe(2);
    expect(result.y).toBe(2);
  });

  it("should multiply by a scalar", () => {
    const vector = new Vector2(3, 4);
    const scalar = 2;
    const result = vector.multiplyScalar(scalar);
    expect(result.x).toBe(6);
    expect(result.y).toBe(8);
  });

  it("should calculate the magnitude", () => {
    const vector = new Vector2(3, 4);
    const magnitude = vector.magnitude();
    expect(magnitude).toBeCloseTo(5, 5); // Using toBeCloseTo for floating-point values
  });

  it("should normalize the vector", () => {
    const vector = new Vector2(3, 4);
    const normalized = vector.normalize();
    const magnitude = normalized.magnitude();
    expect(magnitude).toBeCloseTo(1, 5);
  });

  it("should calculate the dot product", () => {
    const vector1 = new Vector2(3, 4);
    const vector2 = new Vector2(1, 2);
    const dotProduct = vector1.dot(vector2);
    expect(dotProduct).toBe(11);
  });

  it("should calculate the angle to another vector", () => {
    const vector1 = new Vector2(3, 4);
    const vector2 = new Vector2(1, 2);
    const angle = vector1.angleTo(vector2);
    expect(angle).toBeCloseTo(0.588, 3);
  });

  it("should calculate the angle between two vectors", () => {
    const vector1 = new Vector2(3, 4);
    const vector2 = new Vector2(1, 2);
    const angle = Vector2.angleBetween(vector1, vector2);
    expect(angle).toBeCloseTo(0.588, 3);
  });
});
