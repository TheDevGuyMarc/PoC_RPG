# InputHandler Class

The `InputHandler` class provides a simple way to handle keyboard and mouse input events in a TypeScript application. It allows you to register event handlers for key presses, key releases, mouse clicks, and mouse movement. Additionally, it supports multi-key combinations, input history tracking, and input state clearing.

## Class Methods

### `constructor()`

Creates an instance of the `InputHandler` class and sets up event listeners for keyboard and mouse events.

### `onKeyPress(key: string, callback: () => void)`

Registers a callback function to be called when a specific key is pressed.

### `onKeyRelease(key: string, callback: () => void)`

Registers a callback function to be called when a specific key is released.

### `onMouseClick(button: number, callback: () => void)`

Registers a callback function to be called when a mouse button is clicked.

### `onKey(key: string, callback: () => void)`

Registers a callback function to be continuously called when a specific key is pressed.

### `onMouseWheel(callback: (event: WheelEvent) => void)`

Registers a callback function to be called when the mouse wheel is scrolled. (Note: Uses `mousewheel` event)

### `onMouseMove(callback: (event: MouseEvent) => void)`

Registers a callback function to be called when the mouse is moved.

### `onMultiKeyCombination(keys: string[], callback: () => void)`

Registers a callback function to be called when a specific combination of keys is pressed simultaneously.

### `clearInputState()`

Clears the state of all keys, effectively releasing any keys that were pressed.

### `getInputHistory()`

Returns the input history, which is an array of strings representing recent input events.

### `isKeyDown(key: string): boolean`

Checks if a specific key is currently pressed and returns `true` or `false`.

## Usage

```typescript
// Create an instance of InputHandler
const inputHandler = new InputHandler();

// Register a callback for key press event
inputHandler.onKeyPress('a', () => {
  console.log('A key pressed');
});

// Register a callback for key release event
inputHandler.onKeyRelease('a', () => {
  console.log('A key released');
});

// Register a callback for mouse click event
inputHandler.onMouseClick(0, () => {
  console.log('Left mouse button clicked');
});

// Register a callback for continuous key press
inputHandler.onKey('d', () => {
  console.log('D key continuously pressed');
});

// Register a callback for mouse wheel event
inputHandler.onMouseWheel((event) => {
  console.log('Mouse wheel scrolled', event.deltaY);
});

// Register a callback for mouse movement
inputHandler.onMouseMove((event) => {
  console.log(`Mouse moved to (${event.clientX}, ${event.clientY})`);
});

// Register a callback for a multi-key combination (e.g., 'a' and 'b' pressed together)
inputHandler.onMultiKeyCombination(['a', 'b'], () => {
  console.log('A and B keys pressed together');
});

// Check if 'a' key is currently pressed
setInterval(() => {
  console.log(`'a' key is down: ${inputHandler.isKeyDown('a')}`);
}, 1000);

// Clear all key states
inputHandler.clearInputState();

// Get input history
const history = inputHandler.getInputHistory();
console.log('Input History:', history);
