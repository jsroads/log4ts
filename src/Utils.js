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
//# sourceMappingURL=Utils.js.map