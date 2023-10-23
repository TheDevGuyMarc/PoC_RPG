import Level from "../src/engine/rendering/Level";
import Layer from "../src/engine/rendering/Layer";
import GameObject from "../src/engine/core/GameObject";
import Vector2 from "../src/engine/math/Vector2";

describe("Level Class", () => {
  let level: Level;
  let backgroundLayer: Layer;
  let mainLayer: Layer;
  let uiLayer: Layer;
  let backgroundObject: GameObject;
  let playerObject: GameObject;
  let enemyObject: GameObject;

  beforeEach(() => {
    level = new Level("Level 1");
    level.activate();

    backgroundLayer = level.createLayer("Background");
    mainLayer = level.createLayer("Main");
    uiLayer = level.createLayer("UI");

    backgroundObject = new GameObject(new Vector2(1, 1));
    playerObject = new GameObject(new Vector2(2, 2));
    enemyObject = new GameObject(new Vector2(3, 3));
  });

  it("should have the correct level name", () => {
    expect(level.levelName).toBe("Level 1");
  });

  it("should be initially active", () => {
    expect(level.isActive).toBe(true);
  });

  it("should create and remove layers", () => {
    const customLayer = level.createLayer("Custom");
    expect(level.layers).toContain(customLayer);

    level.removeLayer(customLayer);
    expect(level.layers).not.toContain(customLayer);
  });

  it("should add game objects to layers", () => {
    backgroundLayer.addObject(backgroundObject);
    mainLayer.addObject(playerObject);
    mainLayer.addObject(enemyObject);

    expect(backgroundLayer.objects).toContain(backgroundObject);
    expect(mainLayer.objects).toContain(playerObject);
    expect(mainLayer.objects).toContain(enemyObject);
  });

  it("should update game objects", () => {
    const mockUpdate = jest.fn();
    playerObject.update = mockUpdate;
    enemyObject.update = mockUpdate;

    mainLayer.addObject(playerObject);
    mainLayer.addObject(enemyObject);

    level.updateGameObjects(1);

    expect(mockUpdate).toHaveBeenCalledTimes(2);
  });

  it("should render the level and its layers", () => {
    const mockRender = jest.fn();
    backgroundLayer.render = mockRender;
    mainLayer.render = mockRender;
    uiLayer.render = mockRender;

    level.render();

    expect(mockRender).toHaveBeenCalledTimes(3); // One call for each layer
  });

  it("should not update game objects when not active", () => {
    level.deactivate();
    const mockUpdate = jest.fn();
    playerObject.update = mockUpdate;
    enemyObject.update = mockUpdate;

    mainLayer.addObject(playerObject);
    mainLayer.addObject(enemyObject);

    level.updateGameObjects(1);

    expect(mockUpdate).not.toHaveBeenCalled();
  });

  it("should not render when not active", () => {
    level.deactivate();
    const mockRender = jest.fn();
    backgroundLayer.render = mockRender;
    mainLayer.render = mockRender;
    uiLayer.render = mockRender;

    level.render();

    expect(mockRender).not.toHaveBeenCalled();
  });
});
