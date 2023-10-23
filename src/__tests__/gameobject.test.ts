import GameObject from "../engine/core/GameObject";
import Vector2 from "../engine/math/Vector2";


describe("GameObject Class", () => {
  let gameObject: GameObject;

  beforeEach(() => {
    gameObject = new GameObject(new Vector2(0, 0));
  });

  it("should have a default position", () => {
    expect(gameObject.position).toEqual(new Vector2(0, 0));
  });

  it("should have default properties", () => {
    expect(gameObject.children).toEqual([]);
    expect(gameObject.parent).toBeNull();
    expect(gameObject.hasReadyBeenCalled).toBe(false);
  });

  it("should update position", () => {
    const newPosition = new Vector2(1, 2);
    gameObject.position = newPosition;
    expect(gameObject.position).toEqual(newPosition);
  });

  it("should set children", () => {
    const child1 = new GameObject(new Vector2(1, 1));
    const child2 = new GameObject(new Vector2(2, 2));

    gameObject.children = [child1, child2];
    expect(gameObject.children).toEqual([child1, child2]);
  });

  it("should set parent", () => {
    const parent = new GameObject(new Vector2(3, 3));
    gameObject.parent = parent;
    expect(gameObject.parent).toBe(parent);
  });

  it("should set hasReadyBeenCalled", () => {
    gameObject.hasReadyBeenCalled = true;
    expect(gameObject.hasReadyBeenCalled).toBe(true);
  });

  /*it("should add a child", () => {
    const child = new GameObject(new Vector2(1, 1));
    gameObject.addChild(child);
    expect(gameObject.children).toContain(child);
  });*/

  /*it("should remove a child", () => {
    const child = new GameObject(new Vector2(1, 1));
    gameObject.addChild(child);
    gameObject.removeChild(child);
    expect(gameObject.children).not.toContain(child);
  });*/

  it("should destroy the game object", () => {
    gameObject.destroy();
    // You may add further assertions for cleanup or other behaviors in the destroy method.
  });

  it("should update the game object", () => {
    gameObject.update(0.016); // deltaTime of 16ms (approximately 60 FPS)
    // You may add further assertions based on the expected behavior of the update method.
  });

  it("should render the game object", () => {
    gameObject.render();
    // You may add further assertions based on the expected behavior of the render method.
  });

  it("should render a debug frame", () => {
    gameObject.debugDraw();
    // You may add further assertions based on the expected behavior of the debugDraw method.
  });
});
