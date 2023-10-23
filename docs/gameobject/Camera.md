# Camera Class

The Camera class is a specialized class that extends the GameObject class. It represents the camera used for viewing the game world and allows setting its position.

## Class Definition

```typescript
export default class Camera extends GameObject {
// Constructor
constructor();

// Methods
public setPosition(x: number, y: number): void;
}
```

## Class Description

The Camera class is used to create a camera object within a game world. It extends the functionality of the base GameObject class by adding methods for setting the camera's position.

## Constructor

``constructor()``
Initializes a new Camera instance with the default position at (0, 0).

## Methods

``setPosition(x: number, y: number)``: Sets the position of the camera to the specified coordinates (x, y).

## Usage

```typescript
// Usage of the Camera class

const camera = new Camera();

// Set the camera's position
camera.setPosition(100, 50);
```
