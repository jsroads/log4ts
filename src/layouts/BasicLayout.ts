import {ILayout} from "../ILayout";
import {LogEntry} from "../LogEntry";
import {logLevelToString} from "../LogLevel";

/**
 * Simple layout, that formats logs as
 * "{time} {level} [{tag}] - {message}"
 */
export default class BasicLayout implements ILayout {
    constructor() {
    }

    format(entry: LogEntry): string {
        var stack = entry.stack?entry.stack:"";
        return stack+this.formatDate(entry.time) + ' ' + logLevelToString(entry.level) + ' [' + entry.tag + '] - ' + entry.message;
    }

    private formatDate(date: Date): string {
        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

        return date.getFullYear() +
            '-' + pad(date.getMonth() + 1) +
            '-' + pad(date.getDate()) +
            ' ' + pad(date.getHours()) +
            ':' + pad(date.getMinutes()) +
            ':' + pad(date.getSeconds());
    }
}
