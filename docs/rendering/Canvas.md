# Canvas Class

The Canvas class is responsible for managing an HTML canvas element and provides various drawing and manipulation methods for the canvas.

## Class Definition

```typescript
export default class Canvas {
// Properties
private _canvas: HTMLCanvasElement;
private _context: CanvasRenderingContext2D;
private _config: CanvasConfig;

// Constructor
constructor(canvasID: string, config: CanvasConfig);

// Methods
public clear(): void;
public resize(width: number, height: number): void;
public scale(scaleX: number, scaleY: number): void;
public rotate(degrees: number): void;
public translate(x: number, y: number): void;
public drawRect(x: number, y: number, width: number, height: number, color: string, fill?: boolean): void;
public drawCircle(x: number, y: number, radius: number, color: string, fill?: boolean): void;
public drawLine(x1: number, y1: number, x2: number, y2: number, color: string): void;
public drawPath(points: { x: number; y: number }[], color: string, closePath?: boolean): void;
public drawText(text: string, x: number, y: number, font: string, size: number, color: string, align?: CanvasTextAlign): void;
public drawImage(image: HTMLImageElement, x: number, y: number, width: number, height: number): void;
public exportImage(format?: "png" | "jpeg"): string;
}
```

## Class Description

The Canvas class is used to manage an HTML canvas element for rendering graphics in a web application. It provides methods for clearing the canvas, resizing it, and drawing various shapes and text. The class is also capable of exporting the canvas content as an image in PNG or JPEG format.

## Constructor

``constructor(canvasID: string, config: CanvasConfig)``
Initializes a new Canvas instance, associating it with an HTML canvas element identified by its canvasID. The canvas dimensions are set based on the provided config.

## Methods

``clear()``: Clears the canvas by erasing its content.

``resize(width: number, height: number)``: Resizes the canvas to the specified dimensions.

``scale(scaleX: number, scaleY: number)``: Scales the canvas context by the specified factors.

``rotate(degrees: number)``: Rotates the canvas context by the specified degrees.

``translate(x: number, y: number)``: Translates the canvas context by the specified offsets.

``drawRect(x: number, y: number, width: number, height: number, color: string, fill: boolean = true)``: Draws a rectangle on the canvas at the specified position and dimensions. The color determines the rectangle's fill or stroke color.

``drawCircle(x: number, y: number, radius: number, color: string, fill: boolean = true)``: Draws a circle on the canvas at the specified position and radius. The color determines the circle's fill or stroke color.

``drawLine(x1: number, y1: number, x2: number, y2: number, color: string)``: Draws a line on the canvas between two specified points.

``drawPath(points: { x: number; y: number }[], color: string, closePath: boolean = false)``: Draws a path on the canvas, connecting a series of points. The color determines the stroke color, and closePath can be set to close the path.

``drawText(text: string, x: number, y: number, font: string, size: number, color: string, align: CanvasTextAlign = "left")``: Draws text on the canvas with the specified font, size, color, and alignment.

``drawImage(image: HTMLImageElement, x: number, y: number, width: number, height: number)``: Draws an image on the canvas at the specified position and dimensions.

``exportImage(format: "png" | "jpeg" = "png")``: Exports the canvas content as an image in either PNG or JPEG format and returns it as a data URL.

## Usage

```typescript
// Usage of the Canvas class

const canvasConfig: CanvasConfig = {
width: 800,
height: 600,
};

const canvas = new Canvas("game-canvas", canvasConfig);

// Clear the canvas
canvas.clear();

// Draw a rectangle
canvas.drawRect(50, 50, 100, 100, "#FF5733");

// Draw text
canvas.drawText("Hello, Canvas!", 200, 100, "Arial", 24, "#333", "center")
```
