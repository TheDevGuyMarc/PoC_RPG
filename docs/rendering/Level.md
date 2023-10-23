# Level Class

The Level class represents a game level that consists of multiple layers and game objects.

## Class Definition

```typescript
export default class Level {
private readonly _levelName: string;
private _isActive: boolean;
private _layers: Layer[] = [];

constructor(levelName: string);

get levelName(): string;
get isActive(): boolean;
get layers(): Layer[];

set isActive(value: boolean);
set layers(value: Layer[]);

public activate(): void;
public deactivate(): void;
public createLayer(layerName: string): Layer;
public removeLayer(layer: Layer): void;
public updateGameObjects(deltaTime: number): void;
public render(): void;
}
```

## Class Description

The Level class represents a specific game level in your game. It includes multiple layers to organize game objects and provides methods to activate, deactivate, create, and remove layers. The class also offers methods to update and render game objects within the level.

## Properties

``_levelName (string, readonly)``: The name of the level, set when the level is created.

``_isActive (boolean)``: Indicates whether the level is currently active.

``_layers (Layer[])``: An array containing the layers that make up the level.

## Methods

``activate()``: Activates the level, allowing it to be rendered and updated. Additional logic to initialize the level can be added here if needed.

``deactivate()``: Deactivates the level, preventing it from rendering or updating. Additional logic to clean up the level can be added here if needed.

``createLayer(layerName: string)``: Creates a new layer with the specified name and adds it to the level's layers. Returns the created layer.

``removeLayer(layer: Layer)``: Removes the specified layer from the level.

``updateGameObjects(deltaTime: number)``: Updates all game objects within the level. If the level is active, it iterates through the layers and their game objects, calling their respective update methods.

``render()``: Renders the level and its layers. If the level is active, it iterates through the layers and calls their render methods.

## Usage

```typescript
// Example of using the Level class

const level1 = new Level("Level1");

// Create layers for the level
const backgroundLayer = level1.createLayer("Background");
const objectLayer = level1.createLayer("Objects");

// Activate the level
level1.activate();

// Update and render the level and its layers
const deltaTime = 0.0167; // Example time step
level1.updateGameObjects(deltaTime);
level1.render();

// Deactivate the level when no longer needed
level1.deactivate();
```
