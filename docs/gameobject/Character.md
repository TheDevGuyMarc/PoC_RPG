# Character Class

The Character class is a specialized class that extends the GameObject class. It represents a character within a game world, allowing for updates and rendering.

## Class Definition

```typescript
export default class Character extends GameObject {
// Properties
private name: string;

// Constructor
constructor(name: string, position: Vector2);

// Methods
public update(deltaTime: number): void;
public render(): void;
}
```

## Class Description

The Character class represents a character or game object within a game world. It extends the functionality of the base GameObject class, allowing customization for character-specific update and rendering logic.

## Constructor

``constructor(name: string, position: Vector2)``
Initializes a new Character instance with the specified name and position.

## Methods

``update``(deltaTime: number): Overrides the parent class's update method to provide character-specific update logic.

``render()``: Overrides the parent class's render method to provide character-specific rendering logic.

## Usage

```typescript
// Usage of the Character class

const character = new Character("Player", new Vector2(100, 100));

// Update and render the character
character.update(0.016); // Example delta time
character.render();
```
