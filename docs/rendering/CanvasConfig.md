# CanvasConfig Interface

The CanvasConfig interface represents the configuration options for a canvas.

## Interface Definition

```typescript
export default interface CanvasConfig {
width: number;
height: number;
backgroundColor?: string;
}
```

## Interface Description

The CanvasConfig interface defines the configuration options for an HTML canvas, including its dimensions and an optional background color.

## Properties

``width (number)``: The width of the canvas in pixels.

``height (number)``: The height of the canvas in pixels.

``backgroundColor (string, optional)``: The background color of the canvas in CSS-compatible format. This property is optional and allows you to specify a background color for the canvas. If not provided, the canvas background is transparent.

## Example

```typescript
// Example of using CanvasConfig

const canvasConfig: CanvasConfig = {
width: 800,
height: 600,
backgroundColor: "#EFEFEF", // Set a light gray background color
};
```
