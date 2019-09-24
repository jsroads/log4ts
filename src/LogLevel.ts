export enum LogLevel {
    ALL = 0,
    TRACE = 1,
    DEBUG = 2,
    LOG = 3,
    INFO = 4,
    WARN = 5,
    ERROR = 6,
    FATAL = 7,
    OFF = 8
}

export function logLevelToString(level: LogLevel): string {
    return LogLevel[level];
}
