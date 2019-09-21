"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerConfig_1 = require("./LoggerConfig");
const LogLevel_1 = require("./LogLevel");
const Utils_1 = require("./Utils");
class Logger {
    constructor(tag, useColor) {
        this.tag = tag;
        this.useColor = useColor;
    }
    static setConfig(config) {
        Logger.config = config;
    }
    static getLogger(tag) {
        if (!tag) {
            return Logger.getLogger('undefined');
        }
        if (Logger.loggers[tag]) {
            return Logger.loggers[tag];
        }
        else {
            return Logger.loggers[tag] = new Logger(tag);
        }
    }
    log(message, object, deep) {
        this.doLog(LogLevel_1.LogLevel.INFO, message, object, deep);
    }
    info(message, object, deep) {
        this.doLog(LogLevel_1.LogLevel.INFO, message, object, deep);
    }
    fatal(message, object, deep) {
        this.doLog(LogLevel_1.LogLevel.FATAL, message, object, deep);
    }
    error(message, object, deep) {
        this.doLog(LogLevel_1.LogLevel.ERROR, message, object, deep);
    }
    debug(message, object, deep) {
        this.doLog(LogLevel_1.LogLevel.DEBUG, message, object, deep);
    }
    warn(message, object, deep) {
        this.doLog(LogLevel_1.LogLevel.WARN, message, object, deep);
    }
    trace(message, object, deep) {
        this.doLog(LogLevel_1.LogLevel.TRACE, message, object, deep);
    }
    doLog(level, message, object, deep) {
        if (level >= Logger.config.getLevel() && Logger.config.hasTag(this.tag)) {
            if (typeof object !== "undefined") {
                message += ' ' + Utils_1.stringify(object, deep || 1);
            }
            var appender = Logger.config.getAppender();
            appender.append({
                message: message,
                time: new Date(),
                tag: this.tag,
                level: level,
                useColor: this.useColor
            });
        }
    }
}
Logger.loggers = {};
Logger.config = new LoggerConfig_1.default();
exports.default = Logger;
//# sourceMappingURL=Logger.js.map