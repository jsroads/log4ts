"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseAppender_1 = require("./BaseAppender");
const LogLevel_1 = require("../LogLevel");
const LogColor_1 = require("../LogColor");
class ConsoleAppender extends BaseAppender_1.default {
    constructor(console) {
        super();
        this.console = console;
    }
    append(entry) {
        if (entry.useColor) {
            var color = "#0000000";
            switch (entry.level) {
                case LogLevel_1.LogLevel.ERROR:
                    color = LogColor_1.LogColor.ERROR;
                    break;
                case LogLevel_1.LogLevel.TRACE:
                    color = LogColor_1.LogColor.TRACE;
                    break;
                case LogLevel_1.LogLevel.INFO:
                    color = LogColor_1.LogColor.INFO;
                    break;
                case LogLevel_1.LogLevel.WARN:
                    color = LogColor_1.LogColor.WARN;
                    break;
                case LogLevel_1.LogLevel.DEBUG:
                    color = LogColor_1.LogColor.DEBUG;
                    break;
                case LogLevel_1.LogLevel.FATAL:
                    color = LogColor_1.LogColor.FATAL;
                    break;
                default:
            }
            this.getConsole().log('%c' + this.layout.format(entry), 'color:' + color);
        }
        else {
            this.getConsole().log(this.layout.format(entry));
        }
    }
    clear() {
        this.getConsole().clear();
    }
    getConsole() {
        return this.console || console;
    }
}
exports.default = ConsoleAppender;
//# sourceMappingURL=ConsoleAppender.js.map