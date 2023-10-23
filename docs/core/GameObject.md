# GameObject Class

The GameObject class represents an entity in the game world. It manages properties such as position, parent-child relationships, and provides methods for updating and rendering game objects.

## Class Definition

````typescript
export default class GameObject implements IGameObject {

// Properties
private _position: Vector2;
private _children: GameObject[];
private _parent: GameObject | null;
private _hasReadyBeenCalled: boolean;

// Constructor
constructor(position: Vector2);

// Getters
get position(): Vector2;
get children(): GameObject[];
get parent(): GameObject | null;
get hasReadyBeenCalled(): boolean;

// Setters
set position(value: Vector2);
set children(value: GameObject[]);
set parent(value: GameObject | null);
set hasReadyBeenCalled(value: boolean);

// Methods
public addChild(): void;
public destroy(): void;
public removeChild(): void;
public update(deltaTime: number): void;
public render(): void;
public debugDraw(): void;

}
````

## Class Description

The GameObject class represents a fundamental element in the game world. It holds information about its position, parent-child relationships, and tracks whether the ready method has been called. Game objects can be updated, rendered, and have debug frames drawn around them.

### Constructor

``constructor(position: Vector2)``

- Parameters:
  - position (Vector2): The initial position of the game object.
- Description: Initializes a new GameObject instance with the specified initial position.

### Getters

``position``

- Description: Returns the position of the game object as a Vector2.

``children``

- Description: Returns an array of child game objects.

``parent``

- Description: Returns the parent game object or null if it has no parent.

``hasReadyBeenCalled``

- Description: Returns true if the ready method has been called; otherwise, false.

### Setters

``position``

- Description: Sets the position of the game object.

``children``

- Description: Sets the child game objects.

``parent``

- Description: Sets the parent game object or null to indicate no parent.

``hasReadyBeenCalled``

- Description: Sets whether the ready method has been called.

### Methods

``addChild()``

- Description: Adds a game object to the child hierarchy.

``destroy()``

- Description: Destroys the game object.

``removeChild()``

- Description: Removes a game object from the child hierarchy.

``update(deltaTime: number)``

- Parameters:
  - deltaTime (number): The time interval since the last update.
- Description: Updates the game object.

``render()``

- Description: Renders the game object.

``debugDraw()``

- Description: Renders a debug frame around the game object.

## Usage

### Creating a Game Object

You can create a new game object by instantiating the GameObject class with an initial position.

```typescript
const initialPosition = new Vector2(0, 0);
const gameObject = new GameObject(initialPosition);
```

### Modifying Properties

You can access and modify various properties of a game object using getters and setters. For example, to set the position:

```typescript
const newPosition = new Vector2(100, 100);
gameObject.position = newPosition;
```

To add a child game object to the hierarchy:

```typescript
const childObject = new GameObject(new Vector2(50, 50));
gameObject.addChild(childObject);
```

### Updating and Rendering

To update and render a game object, you typically do so within the game loop. You can override the update and render methods in your derived game object classes to implement specific behavior.

```typescript
// Inside your game loop
const deltaTime = 16; // Example time interval
gameObject.update(deltaTime);
gameObject.render();
```

### Managing Child Game Objects

You can manage child game objects within the parent game object. For example, to remove a child:

```typescript
gameObject.removeChild(childObject);
```

### Destroying a Game Object

You can destroy a game object by calling the destroy method, which is often used when an object is no longer needed in the game.

```typescript
gameObject.destroy();
```

### Parent-Child Relationships

Game objects maintain a parent-child relationship. You can set the parent of a game object using the parent property:

```typescript
const parentObject = new GameObject(new Vector2(200, 200));
childObject.parent = parentObject;
```
