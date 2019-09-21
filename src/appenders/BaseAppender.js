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
//# sourceMappingURL=BaseAppender.js.map