import Canvas from "../rendering/Canvas";

export default interface IGameObject {
  addChild(): void;
  removeChild(): void;
  destroy(): void;
  update(deltaTime: number): void;
  render(canvas: Canvas): void;
  debugDraw(canvas: Canvas): void;
}
