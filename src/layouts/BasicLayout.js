"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("../LogLevel");
/**
 * Simple layout, that formats logs as
 * "{time} {level} [{tag}] - {message}"
 */
class BasicLayout {
    constructor() {
    }
    format(entry) {
        return this.formatDate(entry.time) + ' ' + LogLevel_1.logLevelToString(entry.level) + ' [' + entry.tag + '] - ' + entry.message;
    }
    formatDate(date) {
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
exports.default = BasicLayout;
//# sourceMappingURL=BasicLayout.js.map