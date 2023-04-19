export interface LoggerContext {
  debug(message: string): void,
  error(message: string): void,
  info(message: string): void,
  warn(message: string): void
}

export interface LoggerSettings {
  label: string
}

export interface CreateLoggerDelegate<S extends LoggerSettings> {
  (loggerSettings: S): LoggerContext;
}
