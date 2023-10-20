export default interface IGameObject {
  addChild(): void;
  removeChild(): void;
  destroy(): void;
  update(deltaTime: number): void;
  render(): void;
  debugDraw(): void;
}
