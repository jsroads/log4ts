import {IAppender} from "../IAppender";
import {LogEntry} from "../LogEntry";
import BaseAppender from "./BaseAppender";
import {LogLevel} from "../LogLevel";
import {LogColor} from "../LogColor";

export default class ConsoleAppender extends BaseAppender implements IAppender {
    constructor(private console?: Console) {
        super();
    }

    append(entry: LogEntry) {
        if (entry.useColor) {
            var color = "#0000000";
            switch (entry.level) {
                case LogLevel.ERROR:
                    color = LogColor.ERROR;
                    break;
                case LogLevel.TRACE:
                    color = LogColor.TRACE;
                    break;
                case LogLevel.INFO:
                    color = LogColor.INFO;
                    break;
                case LogLevel.WARN:
                    color = LogColor.WARN;
                    break;
                case LogLevel.DEBUG:
                    color = LogColor.DEBUG;
                    break;
                case LogLevel.FATAL:
                    color = LogColor.FATAL;
                    break;
                default:
            }
            this.getConsole().log('%c'+this.layout.format(entry),'color:'+color);
        } else {
            this.getConsole().log(this.layout.format(entry));
        }
    }

    clear() {
        this.getConsole().clear();
    }

    private getConsole(): Console {
        return this.console || console;
    }
}
