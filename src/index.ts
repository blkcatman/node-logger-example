import { createLogger, LoggerSettings, LoggerType } from './logger';

const loggerSetting: LoggerSettings = {
  label: 'LoggerLabel'
};

const logger = createLogger(loggerSetting, LoggerType.CONSOLE);

function main() {
  logger.debug('Hello World Debug!');
  logger.info('Hello World Info!');
  logger.warn('Hello World Warn!');
  logger.error('Hello World Error!');
}

main();
