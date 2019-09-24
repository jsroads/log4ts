import {IAppender} from "./IAppender";
import {LogLevel} from "./LogLevel";
import {ILayout} from "./ILayout";
import BasicLayout from "./layouts/BasicLayout";
import ConsoleAppender from "./appenders/ConsoleAppender";

export default class LoggerConfig {
    private appender: IAppender;
    private level: LogLevel;
    private tag: string;

    constructor(appender?: IAppender,  level: LogLevel = LogLevel.INFO,  tag?: string) {
        if (appender) {
            this.addAppender(appender);
            this.level = level;
            this.tag = tag;
        }
    }
    public static createFromJson(json: ConfigJson): LoggerConfig {
        let config = new LoggerConfig(null, LogLevel[json.level], json.tag);
        for (let layout_json of json.layouts) {
            let layout: ILayout;

            switch (layout_json.type) {
                case "basic":
                    layout = new BasicLayout();
                    break;
                case "html":
                    break;
            }
            let appender_json = layout_json.appender;
            let appender: IAppender;
            switch (appender_json.type) {
                case "console":
                    appender = new ConsoleAppender();
                    break;
                case "dom":
                    break;

            }
            appender.setLayout(layout);
            config.addAppender(appender);
        }

        return config;
    }

    public addAppender(appender: IAppender) {
        this.appender = (appender);
    }

    public setLevel(level: LogLevel) {
        this.level = level;
    }

    public getAppender() {
        return this.appender;
    }

    public getLevel() {
        return this.level;
    }

    public hasTag(tag: string) {
        if (!this.tag) return true;
        if (this.tag === tag) {
            return true;
        }
        return false;
    }
}

export interface ConfigJson {
    layouts: ConfigJsonLayout[];
    level: "ALL" | "TRACE" | "DEBUG" | "LOG" | "INFO" | "WARN" | "ERROR" | "FATAL" | "OFF";
    tag: string;
}

export interface ConfigJsonLayout {
    type: "basic" | "html";
    appender: ConfigJsonAppender;
    options?: any;
}


export interface ConfigJsonAppender {
    type: "console" | "dom";
    options?: ConfigJsonDomAppenderOptions;
}

export interface ConfigJsonDomAppenderOptions {
    container_id: string;
    escape_html?: boolean;
    buffer_size?: number;
}
