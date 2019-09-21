import {ILayout, ILayoutFunction} from "./ILayout";
import {LogEntry} from "./LogEntry";

export interface IAppender {
    setLayout(layout: ILayout);
    getLayout():ILayout;
    setLayoutFunction(layout: ILayoutFunction);

    append(entry: LogEntry);

    clear();
}
