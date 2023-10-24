import {KeyboardEvent, MouseEvent, WheelEvent} from "react";

/**
 *
 */
export default class InputHandler {
  private _keyDownHandlers: { [key: string]: Function } = {};
  private _keyUpHandlers: { [key: string]: Function } = {};
  private _keyPressHandlers: { [key: string]: Function } = {};
  private _mouseClickHandlers: { [button: number]: Function } = {};
  private _mouseMoveHandlers: Function[] = [];
  private _mouseWheelHandlers: Function[] = [];
  private _inputState: { [key: string]: boolean } = {};
  private _inputHistory: string[] = [];

  constructor() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this) as (event: Event) => void);
    window.addEventListener('keyup', this.handleKeyUp.bind(this) as (event: Event) => void);
    window.addEventListener('click', this.handleMouseClick.bind(this) as (event: Event) => void);
    window.addEventListener('mousemove', this.handleMouseMove.bind(this) as (event: Event) => void);
    window.addEventListener('mousewheel', this.handleMouseWheel.bind(this) as (event: Event) => void);
  }

  get keyDownHandlers(): { [p: string]: Function } {
    return this._keyDownHandlers;
  }

  set keyDownHandlers(value: { [p: string]: Function }) {
    this._keyDownHandlers = value;
  }

  get keyUpHandlers(): { [p: string]: Function } {
    return this._keyUpHandlers;
  }

  set keyUpHandlers(value: { [p: string]: Function }) {
    this._keyUpHandlers = value;
  }

  get keyPressHandlers(): { [p: string]: Function } {
    return this._keyPressHandlers;
  }

  set keyPressHandlers(value: { [p: string]: Function }) {
    this._keyPressHandlers = value;
  }

  get mouseClickHandlers(): { [p: number]: Function } {
    return this._mouseClickHandlers;
  }

  set mouseClickHandlers(value: { [p: number]: Function }) {
    this._mouseClickHandlers = value;
  }

  get mouseMoveHandlers(): Function[] {
    return this._mouseMoveHandlers;
  }

  set mouseMoveHandlers(value: Function[]) {
    this._mouseMoveHandlers = value;
  }

  get mouseWheelHandlers(): Function[] {
    return this._mouseWheelHandlers;
  }

  set mouseWheelHandlers(value: Function[]) {
    this._mouseWheelHandlers = value;
  }

  get inputState(): { [p: string]: boolean } {
    return this._inputState;
  }

  set inputState(value: { [p: string]: boolean }) {
    this._inputState = value;
  }

  get inputHistory(): string[] {
    return this._inputHistory;
  }

  set inputHistory(value: string[]) {
    this._inputHistory = value;
  }

  /**
   *
   * @param key
   * @param callback
   */
  public onKeyPress(key: string, callback: () => void): void {
    this._keyDownHandlers[key] = callback;
  }

  /**
   *
   * @param key
   * @param callback
   */
  public onKeyRelease(key: string, callback: () => void): void {
    this._keyUpHandlers[key] = callback;
  }

  /**
   *
   * @param key
   * @param callback
   */
  public onKey(key: string, callback: () => void): void {
    this._keyPressHandlers[key] = callback;
  }

  /**
   *
   * @param key
   */
  public isKeyDown(key: string): boolean {
    return !!this._inputState[key];
  }

  /**
   *
   * @param button
   * @param callback
   */
  public onMouseClick(button: number, callback: () => void): void {
    this._mouseClickHandlers[button] = callback;
  }

  /**
   *
   * @param callback
   */
  public onMouseMove(callback: (event: MouseEvent) => void): void {
    this._mouseMoveHandlers.push(callback);
  }

  /**
   *
   * @param callback
   */
  public onMouseWheel(callback: (event: WheelEvent) => void): void {
    this._mouseWheelHandlers.push(callback);
  }

  /**
   *
   * @param keys
   * @param callback
   */
  public onMultiKeyCombination(keys: string[], callback: () => void): void {
    const keyCombination = keys.sort().join('+');
    this._keyPressHandlers[keyCombination] = callback;
  }

  /**
   *
   */
  public clearInputState(): void {
    for (const key in this._inputState) {
      this._inputState[key] = false;
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    const key = event.key;
    if (this._keyDownHandlers[key]) {
      this._keyDownHandlers[key]();
    }
    if (this._keyPressHandlers[key]) {
      this._inputState[key] = true;
      this._keyPressHandlers[key]();
    }
  }

  private handleKeyUp(event: KeyboardEvent) {
    const key = event.key;
    if (this._keyUpHandlers[key]) {
      this._keyUpHandlers[key]();
    }
    if (this._keyPressHandlers[key]) {
      this._inputState[key] = false;
    }
  }

  private handleMouseClick(event: MouseEvent) {
    const button = event.button;
    if (this._mouseClickHandlers[button]) {
      this._mouseClickHandlers[button]();
    }
  }

  private handleMouseMove(event: MouseEvent) {
    this._mouseMoveHandlers.forEach((callback) => {
      callback(event);
    });
  }

  private handleMouseWheel(event: Event) {
    const wheelEvent = event as WheelEvent;
    this.mouseWheelHandlers.forEach((callback) => {
      callback(wheelEvent);
    });
  }
}
