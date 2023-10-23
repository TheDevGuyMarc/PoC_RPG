import IGameObject from "./IGameObject";
import Vector2 from "../math/Vector2";
import Canvas from "../rendering/Canvas";

export default class GameObject implements IGameObject {
  private _position: Vector2;
  private _children: GameObject[];
  private _parent: GameObject | null;
  private _hasReadyBeenCalled: boolean;


  constructor(position: Vector2) {
    this._position = position;
    this._children = [];
    this._parent = null;
    this._hasReadyBeenCalled = false;
  }

  get position(): Vector2 {
    return this._position;
  }

  get children(): GameObject[] {
    return this._children;
  }

  get parent(): GameObject | null {
    return this._parent;
  }

  get hasReadyBeenCalled(): boolean {
    return this._hasReadyBeenCalled;
  }

  set position(value: Vector2) {
    this._position = value;
  }

  set children(value: GameObject[]) {
    this._children = value;
  }

  set parent(value: GameObject | null) {
    this._parent = value;
  }

  set hasReadyBeenCalled(value: boolean) {
    this._hasReadyBeenCalled = value;
  }

  /**
   * Add a game object to the child hierarchy
   */
  public addChild(): void {
  }

  /**
   * Destroy the game object
   */
  public destroy(): void {
  }

  /**
   * Remove a game object from the child hierarchy
   */
  public removeChild(): void {
  }

  /**
   * Update the game object
   */
  public update(deltaTime: number): void {

  }

  /**
   * Render the game object
   */
  public render(canvas: Canvas): void {
  }

  /**
   * Render a debug frame around the game object
   */
  public debugDraw(canvas: Canvas): void {
  }
}
