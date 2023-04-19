import { LoggerContext, LoggerSettings, CreateLoggerDelegate } from './logger';

class DummyLogger implements LoggerContext {
  debug(message: string): void {
  }
  
  error(message: string): void {
  }
  
  info(message: string): void {
  }
  
  warn(message: string): void {
  }
}

export const createDummyLogger: CreateLoggerDelegate<LoggerSettings> =
  (_: LoggerSettings): LoggerContext => new DummyLogger();
