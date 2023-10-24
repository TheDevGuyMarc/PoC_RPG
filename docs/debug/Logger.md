# Logger Class

The `Logger` class provides a flexible logging mechanism that allows you to log messages with different log levels, timestamps, and custom formats. It also supports enabling/disabling logging and clearing the log buffer.

## Class Methods

### `getInstance(): Logger`

Returns a singleton instance of the `Logger` class.

### `enableLogging(): void`

Enables logging.

### `disableLogging(): void`

Disables logging.

### `setLogLevel(level: LogLevel): void`

Sets the log level. You can specify the log level to filter which messages get logged.

### `log(level: LogLevel, message: string): void`

Logs a message with a specific log level, timestamp, and custom format. The log message will be stored in the log buffer.

### `getLogsByLevel(level: LogLevel): LogEntry[]`

Retrieves log entries that match a specific log level.

### `clearLogBuffer(): void`

Clears the log buffer, removing all stored log entries.

## Usage

```typescript
// Create an instance of the Logger
const logger = Logger.getInstance();

// Enable or disable logging
logger.enableLogging();
logger.disableLogging();

// Set the log level (e.g., LogLevel.Info, LogLevel.Warning, LogLevel.Error)
logger.setLogLevel(LogLevel.Info);

// Log messages with different log levels
logger.log(LogLevel.Debug, "This is a debug message");
logger.log(LogLevel.Info, "This is an info message");
logger.log(LogLevel.Warning, "This is a warning message");
logger.log(LogLevel.Error, "This is an error message");

// Get log entries by log level
const warnings = logger.getLogsByLevel(LogLevel.Warning);

// Clear the log buffer
logger.clearLogBuffer();
