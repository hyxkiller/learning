"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var home = {
    mom: 'Lily',
    dad: 'james',
    // len: 2,
    len: '2',
    merry: true
};
console.log(home);
function log1(a) {
    console.log(a.a);
}
var he = { a: 'hello', b: 0 };
log1(he);
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
function extend(firsrt, second) {
    var result = {};
    for (var id in firsrt) {
        result[id] = firsrt[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
// 元组类型
var name;
name = ['hello', 123, true];
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
// declare function create(o: object | null): void;
// create({ 0: 0 });
// create(null);
// 类型断言
var a = 'string';
// let b: number = (<string>a).length;
var b = a.length;
console.log(b);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
// 索引类型
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var square = {};
square.color = 'red';
square.side = 10;
square.width = 5;
function getCounter() {
    var counter = (function (start) {
    });
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5;
// 类
var Fruits = /** @class */ (function () {
    function Fruits(m) {
        this.name = m;
    }
    Fruits.prototype.eat = function (num) {
        console.log("I have eat " + num + " " + this.name);
    };
    return Fruits;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name) {
        return _super.call(this, name) || this;
    }
    Apple.prototype.eat = function (num) {
        if (num === void 0) { num = 1; }
        console.log("delicious");
        _super.prototype.eat.call(this, num);
    };
    return Apple;
}(Fruits));
var apple = new Apple('apple');
apple.eat(10);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevator = function () {
        return this.name + " " + this.department;
    };
    return Employee;
}(Person));
var curry = new Employee('Curry', 'Sales');
console.log(curry.getElevator());
var People = /** @class */ (function () {
    function People() {
        this._fullName = '';
    }
    Object.defineProperty(People.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (name) {
            this._fullName = name;
        },
        enumerable: true,
        configurable: true
    });
    return People;
}());
var people = new People();
people.fullName = 'hyx';
console.log(people.fullName);
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.pritName = function () {
        console.log(this.name);
    };
    return Department;
}());
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment() {
        return _super.call(this, 'account') || this;
    }
    AccountDepartment.prototype.printMeeting = function () {
        console.log('抽象方法');
    };
    AccountDepartment.prototype.sleep = function () {
        console.log('sleep');
    };
    return AccountDepartment;
}(Department));
var account = new AccountDepartment();
account.printMeeting();
account.pritName();
// 函数
var add = function (x, y) {
    return x + y;
};
console.log(add(1));
