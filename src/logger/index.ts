import type { LoggerSettings, LoggerContext } from './logger';

import { createConsoleLogger } from './ConsoleLogger';
import { createDummyLogger } from './DummyLogger';

const LoggerType = {
  CONSOLE: 'console',
  DUMMY: 'dummy'
} as const;
type LoggerType = typeof LoggerType[keyof typeof LoggerType];

const createLogger = (loggerSettings: LoggerSettings, type: LoggerType = LoggerType.CONSOLE): LoggerContext => {
  if (type === LoggerType.CONSOLE) {
    return createConsoleLogger(loggerSettings);
  } else if (type === LoggerType.DUMMY) {
    return createDummyLogger(loggerSettings);
  } else {
    return createDummyLogger(loggerSettings);
  }
}

export { LoggerSettings, LoggerContext, LoggerType, createLogger };
