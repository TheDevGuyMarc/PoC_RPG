# Game Class

The `Game` class represents the main game engine for your application. It manages the game's canvas, states, and levels.

## Class Definition

```typescript
export default class Game implements IGame {
  // Properties
  private canvas: Canvas;
  private state: GameState;
  private levels: Level[];

  // Constructor
  constructor(width: number, height: number);

  // Methods
  public addLevel(levelName: string): void;
  public activateLevel(levelName: string): void;
  public start(): void;
  public end(): void;
  private gameLoop(): void;
}

```

## Class Description

The Game class is responsible for initializing and managing the game engine,
which includes the canvas, game states, and game levels.
It provides methods for adding and activating game levels, starting and ending the game, and running the game loop.

### Constructor

``constructor(width: number, height: number)``

- Parameters:
  - width (number): The width of the game canvas.
  - height (number): The height of the game canvas.

- Description: Initializes a new Game instance with the specified canvas dimensions.

### Methods

#### Public

``addLevel(levelName: string)``

- Parameters:
  - levelName (string): The name of the level to be added.
- Description: Adds a new game level to the level hierarchy.

``activateLevel(levelName: string)``

- Parameters:
  - levelName (string): The name of the level to be activated.
- Description: Activates a specified game level for rendering. It also deactivates other levels.

``start()``

- Description: Initiates the game and starts the game loop. Sets the game state to GameState.RUNNING.

``end()``

- Description: Ends the game. Sets the game state to GameState.END.

#### Private

``gameLoop()``

- Description: The game loop function that handles the main game logic. It manages resources loading, input handling, sound, level activation, rendering, and game object loading.

## Usage

```typescript
// Initialize the game with canvas dimensions
const game = new Game(800, 600);

// Add game levels
game.addLevel("Level1");
game.addLevel("Level2");

// Start the game
game.start();

// Run the game loop
```
