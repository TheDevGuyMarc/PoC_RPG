# Layer Class

The Layer class represents a layer within a game. Layers are used to organize and render game objects.

## Class Definition

```typescript
export default class Layer {
private readonly _layerName: string;
private _objects: GameObject[] = [];

constructor(layerName: string);

get layerName(): string;
get objects(): GameObject[];

public addObject(gameObject: GameObject): void;
public removeObject(gameObject: GameObject): void;
public render(): void;
}
```

## Class Description

The Layer class provides a way to manage and render game objects within a specific layer. It allows you to add, remove, and render game objects that belong to the layer.

## Properties

``_layerName (string, readonly)``: The name of the layer, which is set at the time of creation and cannot be modified afterward.

``_objects (GameObject[])``: An array that holds the game objects belonging to the layer.

## Methods

``addObject(gameObject: GameObject)``: Adds a game object to the layer.

``removeObject(gameObject: GameObject)``: Removes a game object from the layer.

``render()``: Renders all the game objects within the layer by calling their respective render methods.

## Example

```typescript
// Example of using the Layer class

const backgroundLayer = new Layer("Background");
const playerLayer = new Layer("Player");

// Add game objects to the layers
backgroundLayer.addObject(backgroundImage);
playerLayer.addObject(playerCharacter);

// Render the objects in the layers
backgroundLayer.render();
playerLayer.render();
```
