"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
const BasicLayout_1 = require("./layouts/BasicLayout");
const ConsoleAppender_1 = require("./appenders/ConsoleAppender");
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
//# sourceMappingURL=LoggerConfig.js.map