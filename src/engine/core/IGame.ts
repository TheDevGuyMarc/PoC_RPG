export default interface IGame {
  start(): void;
  end(): void;
  addLevel(levelName: string): void;
  activateLevel(levelName: string): void;
}
