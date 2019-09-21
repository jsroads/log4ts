import {ILayout, ILayoutFunction} from "../ILayout";
import {IAppender} from "../IAppender";
import {LogEntry} from "../LogEntry";

export default class BaseAppender implements IAppender{
    protected layout: ILayout;
    setLayout(layout: ILayout) {
        this.layout = layout;
    }

    getLayout(): ILayout {
        return this.layout;
    }

    setLayoutFunction(layout: ILayoutFunction) {
        this.layout = {
            format: layout
        }
    }

    append(entry: LogEntry) {

    }

    clear() {

    }
}
