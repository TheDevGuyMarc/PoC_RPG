# Object Hierarchy

![Object Hierarchy.drawio.png](..%2FObject%20Hierarchy.drawio.png)

## How to use the "engine" part of the game

1. Create a canvas / canvas component (React, Angular, Vue)
2. Create a new game instance on load of the canvas / canvas component
3. Initialize the canvas in the constructor
4. Implement a game loop like you want
5. Load Input Manager
6. Load Audio Manager
7. Load levels
8. Activate a level
9. Create layers for level (Skybox, Ground, 1st Floor, UI, Camera)
10. Create GameObjects
11. Add GameObjects to respective layers
12. Update GameObjects in the game loop
