import {LogLevel} from "./LogLevel";

export default interface ILogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
}
