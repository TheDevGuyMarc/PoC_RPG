import Vector2 from "../math/Vector2";
import GameObject from "../core/GameObject";

export default class Character extends GameObject{
  private name: string;

  constructor(name: string, position: Vector2) {
    super(position);
    this.name = name;
  }

  public update(deltaTime: number): void {
    super.update(deltaTime); // Call the parent class's update method

    // Character-specific update logic here
  }

  public render(): void {
    super.render(); // Parent Render call

    // Character Specific rendering goes here
  }
}
