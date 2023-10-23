# POC RPG

# Strategie-Rollenspiel (RPG)

## Spielkonzept

Entwickle ein rundenbasiertes, taktisches RPG, bei dem der Spieler eine Gruppe von Helden kontrolliert, gegen Feinde
kämpft, Missionen erfüllt und die Charaktere verbessert.

## Funktionalitäten

1. Charakterauswahl und -verbesserung:
    1. Spieler können aus verschiedenen Charakterklassen wie Krieger, Magier, Heiler usw. wählen.
    2. Charaktere können verbessert, mit Ausrüstung ausgestattet und Fähigkeiten aufgewertet werden.
2. Missionen und Quests:
    1. Spieler können Missionen annehmen, um Erfahrung, Beute und Fortschritt im Spiel zu erhalten.
    2. Missionen können verschiedene Ziele haben, wie das Besiegen von Monstern, das Retten von NPCs oder das Sammeln
       von Gegenständen.
3. Rundenbasierte Kämpfe:
    1. Kämpfe finden in rundenbasierten Schlachten statt, bei denen Spieler und Feinde abwechselnd handeln.
    2. Spieler können Aktionen wie Angriff, Verteidigung, Zauber wirken usw. auswählen.
4. Karten- und Levelsystem:
    1. Das Spiel kann verschiedene Karten mit unterschiedlichen Umgebungen und Herausforderungen bieten.
    2. Spieler müssen durch Karten navigieren, um Missionen abzuschließen und die Handlung voranzutreiben.
5. In-Game-Währung und Geschäfte:
    1. Spieler verdienen Gold oder andere Währungen durch Kämpfe und Missionen.
    2. Die Währung kann für den Kauf von Ausrüstung, Gegenständen und Upgrades verwendet werden.
6. Highscore-Liste und Wettbewerbe:
    1. Implementiere eine Highscore-Liste, um die Leistungen der Spieler zu verfolgen.
    2. Organisiere wöchentliche oder monatliche Wettbewerbe, um die besten Spieler zu belohnen.

## Technologien

### Frontend (React)

Verwende React für die Erstellung einer ansprechenden Benutzeroberfläche, auf der Spieler das Spiel spielen, Charaktere
verwalten und Missionen auswählen können.

1. React: Das Haupt-Framework für die Erstellung der Benutzeroberfläche und die Komponentenstrukturierung.
2. React Router: Zur Implementierung von Routing-Funktionalitäten in deiner React-Anwendung, insbesondere wenn
   verschiedene Seiten oder Ansichten benötigt werden.
3. Material-UI: Eine UI-Bibliothek mit vorgefertigten Komponenten und Designs, um eine ansprechende Benutzeroberfläche
   zu erstellen.
4. Axios: Eine Bibliothek, um HTTP-Anfragen an das Backend zu senden und die Antworten zu verarbeiten.
5. Redux: Wenn deine Anwendung einen komplexen Zustand oder globale Variablen benötigt, könnte Redux nützlich sein, um
   den Zustand der Anwendung zu verwalten.
6. 2D
    1. Howler.js: Eine Bibliothek für die einfache Integration von Audio- und Musikfunktionalitäten in Spiele.
    2. MatterJS: Physics Engine

### Backend (Spring Boot)

Nutze Spring Boot, um das Backend zu erstellen, das für die Verarbeitung von Spiellogik, Datenbankintegration und
Nutzermanagement verantwortlich ist.

1. Spring Boot: Ein Framework für die Entwicklung von Java-basierten, webbasierten Anwendungen, das viele Funktionen für
   die Backend-Entwicklung bereitstellt.
2. Spring Data JPA: Eine Bibliothek, die die Datenbankintegration vereinfacht und Objekt-zu-Datenbank-Zuordnungen
   ermöglicht.
3. Spring Security: Zur Implementierung von Sicherheitsfunktionen und Benutzerauthentifizierung.
4. Spring Web: Bietet Unterstützung für die Erstellung von RESTful-Webdiensten.
5. Spring Boot DevTools: Ein nützliches Toolkit für die Entwicklung, das den Entwicklungsprozess vereinfacht.
6. Lombok: Utility Bibliothek
7. WebSocket (für Echtzeitkommunikation): WebSocket-Bibliotheken wie Spring Websocket können für Echtzeitkommunikation
   im Spiel nützlich sein.

### Datenbank (z. B. PostgreSQL)

Verwende eine relationale Datenbank, um Charakterdaten, Spielfortschritt und Statistiken zu speichern.

### Docker

Containerisiere die Anwendung, um sie einfach zu skalieren und zu verwalten.

### CI/CD

Implementiere Continuous Integration und Continuous Deployment für effiziente Aktualisierungen und Bereitstellungen des
Spiels.

### Monitoring

Setze Monitoring-Tools ein, um die Leistung des Spiels zu überwachen und auf Engpässe oder Probleme zu reagieren.

### Dokumentation und Testing

Erstelle ausführliche Dokumentationen für Code, APIs und Benutzer. Implementiere umfassende Tests, um die Qualität und
Zuverlässigkeit des Spiels sicherzustellen.

## Tutorials & Konzepte

- [GameDEV TS](https://javascript.plainenglish.io/gamedev-patterns-and-algorithms-in-action-with-typescript-d29b913858e)
- [Intro to GameDEV TS](https://nosleepjavascript.com/intro-to-gamedev/)
- [Javascript Game Development](https://www.freecodecamp.org/news/learn-javascript-game-development-full-course/)
- [What is Game Development](https://www.freecodecamp.org/news/what-is-game-development/)
- [Game Dev Principals](https://www.freecodecamp.org/news/learn-game-design-principles-from-valve-portal-developers/)
- [Bug Mitigation](https://www.freecodecamp.org/news/how-to-write-fewer-bugs-tips-for-game-developers-82e3d742f6f7/)
- [Intro to Game Dev Javascript](https://www.freecodecamp.org/news/intro-to-game-development-with-javascript/)
- [Advanced React Patterns by game dev](https://www.freecodecamp.org/news/learn-advanced-react-patterns-by-developing-a-game-with-sprite-animation-5dc072886975/)
- [Misc Tips and Tricks](https://www.gamedev.net/forums/topic/711769-learning-typescript/)
- [Resources](https://github.com/stevinz/awesome-game-engine-dev#javascript)

## Documentation

### Object Hierarchy

![Object Hierarchy.drawio.png](docs%2FObject%20Hierarchy.drawio.png)

### How to use the "engine" part of the game

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
