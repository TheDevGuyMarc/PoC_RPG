import {LogLevel} from "./LogLevel";
import ILogEntry from "./ILogEntry";

export default class Logger {
  private static instance: Logger;
  private logEnabled: boolean = true;
  private logLevel: LogLevel = LogLevel.Info; // Default log level
  private logBuffer: ILogEntry[] = [];

  private constructor() {}

  /**
   *
   */
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  /**
   *
   */
  public enableLogging(): void {
    this.logEnabled = true;
  }

  /**
   *
   */
  public disableLogging(): void {
    this.logEnabled = false;
  }

  /**
   *
   * @param level
   */
  public setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  /**
   *
   * @param level
   * @param message
   */
  public log(level: LogLevel, message: string): void {
    if (this.logEnabled && level >= this.logLevel) {
      const timestamp = new Date().toLocaleString();
      const logEntry: ILogEntry = { level, message, timestamp };
      this.logBuffer.push(logEntry);

      // Apply custom log formatting (e.g., '[Timestamp] [Level]: Message')
      const formattedMessage = `[${logEntry.timestamp}] [${LogLevel[level]}]: ${logEntry.message}`;

      console.log(formattedMessage);
    }
  }

  /**
   *
   * @param level
   */
  public getLogsByLevel(level: LogLevel): ILogEntry[] {
    return this.logBuffer.filter((entry) => entry.level === level);
  }

  /**
   *
   */
  public clearLogBuffer(): void {
    this.logBuffer = [];
  }
}
