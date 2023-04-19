import { LoggerContext, LoggerSettings, CreateLoggerDelegate } from './logger';
import { Logger, createLogger, format, transports }  from 'winston';

const logLevel = process.env.LOG_LEVEL ?? 'info';

const customFormat = format.printf(info => {
  return `[${info.label}] ${info.message}`;
});

class ConsoleLogger implements LoggerContext {
  private logger: Logger;

  constructor(label: string) {
    this.logger = createLogger({
      level: logLevel,
      format: format.combine(
        format.label({ label: label }),
        customFormat
      ),
      transports: new transports.Console()
    });
  }

  debug(message: string): void {
    this.logger.log('debug', message);
  }

  error(message: string): void {
    this.logger.log('error', message);
  }

  info(message: string): void {
    this.logger.log('info', message);
  }

  warn(message: string): void {
    this.logger.log('warn', message);
  }
}

export const createConsoleLogger: CreateLoggerDelegate<LoggerSettings> =
  (loggerSettings: LoggerSettings): LoggerContext => new ConsoleLogger(loggerSettings.label);
