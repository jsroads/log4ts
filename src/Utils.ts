export function stringify(object: any, deep: number): string {
    function cut(obj, deep) {
        if (deep === 0) return undefined;
        var result = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    var cutted = cut(obj[key], deep - 1);
                    if (typeof cutted !== undefined) {
                        result[key] = cutted;
                    }
                } else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    }
    return JSON.stringify(cut(object, deep), null, 2);
}

export function logStack(index): string
{
    var e = new Error();
    var lines = e.stack.split("\n");
    lines.shift();
    var result = [];
    lines.forEach(function (line) {
        line = line.substring(7);
        var lineBreak = line.split(" ");
        if (lineBreak.length<2) {
            result.push(lineBreak[0]);
        } else {
            result.push({[lineBreak[0]] : lineBreak[1]});
        }
    });

    var list = [];
    if(index < result.length-1){
        for(var a in result[index]){
            list.push(a);
        }
    }

    var splitList = list[0].split(".");
    return (splitList[0] + ".ts->" + splitList[1] + ": ");
}

var REGEXP_NUM_OR_STR = /(%d)|(%s)/;
var REGEXP_STR = /%s/;
export function formatStr() {
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