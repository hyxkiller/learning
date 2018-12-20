"use strict";
exports.__esModule = true;
var foo_1 = require("./foo");
var bar;
bar = foo_1.foo;
console.log("\u6A21\u5757\u5316\u5F15\u5165" + bar);
// 基本类型注解
function test(a) {
    var num;
    if (a === 1) {
        num = '1';
    }
    else {
        num = '-1';
    }
    return num;
}
console.log("\u51FD\u6570\u521D\u8BC6:" + test(11));
// 数组
var arr = [true];
var rand;
rand = [true, 1, 'haha'];
var home = {
    mom: 'Lily',
    dad: 'james',
    // len: 2,
    len: '2',
    merry: true
};
console.log(home);
// 泛型
function generic(arr) {
    arr.forEach(function (item) {
        console.log(item);
    });
    return arr;
}
var Arr = [1, 2, 3];
console.log("\u6CDB\u578B:" + generic(Arr));
// 联合类型
function joint(type) {
    if (typeof type === 'string') {
        return "\u5B57\u7B26\u4E32" + type;
    }
    else {
        return "\u6570\u5B57" + type;
    }
}
console.log("\u8054\u5408\u7C7B\u578B:" + joint('hello'));
// 交叉类型
// 元组类型
var name;
name = ['hello', 123];
// 枚举
var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["clubs"] = 0] = "clubs";
    CardSuit[CardSuit["diamonds"] = 1] = "diamonds";
    CardSuit[CardSuit["hearts"] = 2] = "hearts";
})(CardSuit || (CardSuit = {}));
var CardSuit2;
(function (CardSuit2) {
    CardSuit2[CardSuit2["clubs"] = 3] = "clubs";
    CardSuit2[CardSuit2["diamonds"] = 4] = "diamonds";
    CardSuit2["hearts"] = "hello";
})(CardSuit2 || (CardSuit2 = {}));
var card = CardSuit.diamonds;
console.log("\u679A\u4E3E:" + card);
var simple = function (foo) { return foo.toString(); };
console.log(typeof simple(1));
