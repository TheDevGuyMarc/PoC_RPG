import Layer from "../engine/rendering/Layer";
import GameObject from "../engine/core/GameObject";
import Vector2 from "../engine/math/Vector2";


describe("Layer Class", () => {
  let layer: Layer;
  let object1: GameObject;
  let object2: GameObject;

  beforeEach(() => {
    // Create a new layer and game objects for each test
    layer = new Layer("TestLayer");
    object1 = new GameObject(new Vector2(1, 1));
    object2 = new GameObject(new Vector2(2, 2));
  });

  it("should have the correct layer name", () => {
    expect(layer.layerName).toBe("TestLayer");
  });

  it("should initially have no objects", () => {
    expect(layer.objects).toHaveLength(0);
  });

  it("should add a game object to the layer", () => {
    layer.addObject(object1);
    expect(layer.objects).toContain(object1);
  });

  it("should remove a game object from the layer", () => {
    layer.addObject(object1);
    layer.addObject(object2);
    layer.removeObject(object1);
    expect(layer.objects).not.toContain(object1);
    expect(layer.objects).toContain(object2);
  });

  it("should not remove a non-existent game object from the layer", () => {
    layer.addObject(object1);
    layer.removeObject(object2); // Try to remove an object that wasn't added
    expect(layer.objects).toContain(object1);
  });

  it("should render all objects in the layer", () => {
    const mockRender = jest.fn();
    object1.render = mockRender;
    object2.render = mockRender;

    layer.addObject(object1);
    layer.addObject(object2);

    layer.render();

    expect(mockRender).toHaveBeenCalledTimes(2);
  });
});
