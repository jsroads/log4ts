(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["log4ts"] = factory();
	else
		root["log4ts"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ALL"] = 0] = "ALL";
    LogLevel[LogLevel["TRACE"] = 1] = "TRACE";
    LogLevel[LogLevel["DEBUG"] = 2] = "DEBUG";
    LogLevel[LogLevel["LOG"] = 3] = "LOG";
    LogLevel[LogLevel["INFO"] = 4] = "INFO";
    LogLevel[LogLevel["WARN"] = 5] = "WARN";
    LogLevel[LogLevel["ERROR"] = 6] = "ERROR";
    LogLevel[LogLevel["FATAL"] = 7] = "FATAL";
    LogLevel[LogLevel["OFF"] = 8] = "OFF";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
function logLevelToString(level) {
    return LogLevel[level];
}
exports.logLevelToString = logLevelToString;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = __webpack_require__(0);
const BasicLayout_1 = __webpack_require__(3);
const ConsoleAppender_1 = __webpack_require__(2);
class LoggerConfig {
    constructor(appender, level = LogLevel_1.LogLevel.INFO, tag) {
        if (appender) {
            this.addAppender(appender);
            this.level = level;
            this.tag = tag;
        }
    }
    static createFromJson(json) {
        let config = new LoggerConfig(null, LogLevel_1.LogLevel[json.level], json.tag);
        for (let layout_json of json.layouts) {
            let layout;
            switch (layout_json.type) {
                case "basic":
                    layout = new BasicLayout_1.default();
                    break;
                case "html":
                    break;
            }
            let appender_json = layout_json.appender;
            let appender;
            switch (appender_json.type) {
                case "console":
                    appender = new ConsoleAppender_1.default();
                    break;
                case "dom":
                    break;
            }
            appender.setLayout(layout);
            config.addAppender(appender);
        }
        return config;
    }
    addAppender(appender) {
        this.appender = (appender);
    }
    setLevel(level) {
        this.level = level;
    }
    getAppender() {
        return this.appender;
    }
    getLevel() {
        return this.level;
    }
    hasTag(tag) {
        if (!this.tag)
            return true;
        if (this.tag === tag) {
            return true;
        }
        return false;
    }
}
exports.default = LoggerConfig;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseAppender_1 = __webpack_require__(7);
const LogLevel_1 = __webpack_require__(0);
const LogColor_1 = __webpack_require__(6);
const Utils_1 = __webpack_require__(4);
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
                case LogLevel_1.LogLevel.LOG:
                    color = LogColor_1.LogColor.LOG;
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
            entry.stack = Utils_1.logStack(4);
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = __webpack_require__(0);
/**
 * Simple layout, that formats logs as
 * "{time} {level} [{tag}] - {message}"
 */
class BasicLayout {
    constructor() {
    }
    format(entry) {
        var stack = entry.stack ? entry.stack : "";
        return stack + this.formatDate(entry.time) + ' ' + LogLevel_1.logLevelToString(entry.level) + ' [' + entry.tag + '] - ' + entry.message;
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function stringify(object, deep) {
    function cut(obj, deep) {
        if (deep === 0)
            return undefined;
        var result = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    var cutted = cut(obj[key], deep - 1);
                    if (typeof cutted !== undefined) {
                        result[key] = cutted;
                    }
                }
                else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    }
    return JSON.stringify(cut(object, deep), null, 2);
}
exports.stringify = stringify;
function logStack(index) {
    var e = new Error();
    var lines = e.stack.split("\n");
    lines.shift();
    var result = [];
    lines.forEach(function (line) {
        line = line.substring(7);
        var lineBreak = line.split(" ");
        if (lineBreak.length < 2) {
            result.push(lineBreak[0]);
        }
        else {
            result.push({ [lineBreak[0]]: lineBreak[1] });
        }
    });
    var list = [];
    if (index < result.length - 1) {
        for (var a in result[index]) {
            list.push(a);
        }
    }
    var splitList = list[0].split(".");
    return (splitList[0] + ".ts->" + splitList[1] + ": ");
}
exports.logStack = logStack;
var REGEXP_NUM_OR_STR = /(%d)|(%s)/;
var REGEXP_STR = /%s/;
function formatStr() {
    var argLen = arguments.length;
    if (argLen === 0) {
        return '';
    }
    var msg = arguments[0];
    if (argLen === 1) {
        return '' + msg;
    }
    var hasSubstitution = typeof msg === 'string' && REGEXP_NUM_OR_STR.test(msg);
    if (hasSubstitution) {
        for (let i = 1; i < argLen; ++i) {
            var arg = arguments[i];
            var regExpToTest = typeof arg === 'number' ? REGEXP_NUM_OR_STR : REGEXP_STR;
            if (regExpToTest.test(msg))
                msg = msg.replace(regExpToTest, arg);
            else
                msg += ' ' + arg;
        }
    }
    else {
        for (let i = 1; i < argLen; ++i) {
            msg += ' ' + arguments[i];
        }
    }
    return msg;
}
exports.formatStr = formatStr;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoggerConfig_1 = __webpack_require__(1);
const LogLevel_1 = __webpack_require__(0);
const Utils_1 = __webpack_require__(4);
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
        this.doLog(LogLevel_1.LogLevel.LOG, message, object, deep);
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by jsroads on 2019/9/21 . 2:21 下午
 * Note:
 */
var LogColor;
(function (LogColor) {
    LogColor["TRACE"] = "#2eb596";
    LogColor["DEBUG"] = "#3f79e8";
    LogColor["LOG"] = "#000000";
    LogColor["INFO"] = "#374C15";
    LogColor["WARN"] = "#e2a03f";
    LogColor["FATAL"] = "#ff56d9";
    LogColor["ERROR"] = "#d00000";
})(LogColor = exports.LogColor || (exports.LogColor = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseAppender {
    setLayout(layout) {
        this.layout = layout;
    }
    getLayout() {
        return this.layout;
    }
    setLayoutFunction(layout) {
        this.layout = {
            format: layout
        };
    }
    append(entry) {
    }
    clear() {
    }
}
exports.default = BaseAppender;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(5);
exports.Logger = Logger_1.default;
var LoggerConfig_1 = __webpack_require__(1);
exports.LoggerConfig = LoggerConfig_1.default;
var BasicLayout_1 = __webpack_require__(3);
exports.BasicLayout = BasicLayout_1.default;
var ConsoleAppender_1 = __webpack_require__(2);
exports.ConsoleAppender = ConsoleAppender_1.default;
var LogLevel_1 = __webpack_require__(0);
exports.LogLevel = LogLevel_1.LogLevel;


/***/ })
/******/ ]);
});