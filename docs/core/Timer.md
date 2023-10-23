# Timer Class

The Timer class is responsible for managing time-related operations, such as measuring frame times, controlling the frame rate, calculating average FPS, and detecting frame rate spikes and drops.

## Class Definition

```typescript
export default class Timer {
// Properties
private _lastTime: number;
private _deltaTime: number;
private _fps: number;
private _frameCount: number;
private _timeAccumulator: number;
private _sleepTime: number;

// Constructor
constructor();

// Methods
public startFrame(): void;
public endFrame(): void;
public capFrameRate(targetFPS: number): void;
public calculateAverageFPS(intervalInSeconds: number): number;
public detectFrameRateSpikes(threshold: number): boolean;
public detectFrameRateDrops(threshold: number): boolean;
}
```

## Class Description

The Timer class provides time-related functionalities for game development. It measures frame times, controls the frame rate, calculates average FPS, and detects frame rate anomalies like spikes and drops.

### Constructor

``constructor()``

- Description: Initializes a new Timer instance with default values.

### Methods

``startFrame()``: Call this method at the beginning of each frame to measure the frame time and delta time.

``endFrame()``: Call this method at the end of each frame to update the frame count and time accumulator.

``capFrameRate(targetFPS: number)``: Caps the frame rate to the specified target FPS by introducing a sleep time if necessary.

``calculateAverageFPS(intervalInSeconds: number)``: Calculates the average FPS over a specified time interval.

``detectFrameRateSpikes(threshold: number)``: Detects frame rate spikes, and returns true if the frame rate exceeds the specified threshold.

``detectFrameRateDrops(threshold: number)``: Detects frame rate drops, and returns true if the frame rate falls below the specified threshold.

## Usage

```typescript
// Usage of the Timer class

// Create a Timer instance
const timer = new Timer();

// Game loop
function gameLoop() {
// Start measuring the frame time
timer.startFrame();

// Game logic and rendering

// End of frame
timer.endFrame();

// Cap frame rate to 30 FPS
timer.capFrameRate(30);

// Calculate and log the average FPS over the last 5 seconds
const averageFPS = timer.calculateAverageFPS(5);
console.log(`Average FPS: ${averageFPS}`);

// Detect frame rate spikes and log a warning if exceeded
if (timer.detectFrameRateSpikes(60)) {
console.warn('Frame rate spike detected!');
}

// Detect frame rate drops and log an alert if below a threshold
if (timer.detectFrameRateDrops(20)) {
console.alert('Frame rate dropped below 20 FPS!');
}

// Continue the game loop
requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
```
