# GameState Enum

The GameState enum defines various states that the game can be in. It helps manage and track the game's current state, which can affect the game's behavior and flow.

```typescript
export enum GameState {
  INITIALIZING,
  LOADING,
  LOADED,
  RUNNING,
  DEATH,
  END,
  DEBUG
}
```

## Enum Values

``INITIALIZING``: This state typically represents the game's initialization phase, where essential components are set up, and resources are loaded.

``LOADING``: In this state, the game is loading additional assets or resources required to run. It's common during the initial stages of the game or when transitioning between levels.

``LOADED``: Once all the required assets have been loaded, the game transitions to the *LOADED* state, indicating that it's ready to start.

``RUNNING``: The game is actively running and handling player interactions, game logic, and rendering.

``DEATH``: This state can be used to indicate that the player character or an essential game element has been defeated or destroyed.

``END``: The *END* state signifies that the game has concluded, either because the player won or lost, or because the game has reached its conclusion.

``DEBUG``: In this state, the game may enable debugging features or modes, making it easier to troubleshoot and develop the game.

The GameState enum provides a structured way to manage the game's different states, making it easier to coordinate game events and transitions. Depending on the game's design and requirements, these states can be customized and extended to suit your specific needs.
