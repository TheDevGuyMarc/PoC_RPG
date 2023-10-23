# TopDownCamera Class

The TopDownCamera class is a specialized class that extends the Camera class. It represents a top-down camera in a game, allowing for zoom control.

## Class Definition

```typescript
export default class TopDownCamera extends Camera {
// Properties
private zoom: number;

// Constructor
constructor(zoom: number = 1);

// Methods
public setZoom(zoom: number): void;
}
```

## Class Description

The TopDownCamera class represents a camera within a game that is designed for top-down views. It extends the functionality of the base Camera class and includes the ability to control the camera's zoom level.

## Constructor

``constructor(zoom: number = 1)``
Initializes a new TopDownCamera instance with an optional initial zoom value.

## Methods

``setZoom(zoom: number)``: Sets the zoom level of the camera to the specified value.

## Usage

```typescript
// Usage of the TopDownCamera class

const camera = new TopDownCamera(1); // Initial zoom level is 1.0

// Change the zoom level of the camera
camera.setZoom(0.8); // Set zoom level to 0.8

// The camera can also be positioned using the inherited setPosition method from the Camera class.
camera.setPosition(200, 200); // Set camera position to (200, 200)
```
