// 泛型接口
function identity<T>(arg: T): T {
    return arg
}
interface GenericIdentityInterface<T> {
    (arg: T): T
}
let myIdentity: GenericIdentityInterface<number> = identity;
myIdentity(1);

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
}
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 2));

// 泛型约束
interface Length {
    length: number
}
function loggingIdentity<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
}
loggingIdentity([123]);
loggingIdentity({ length: 1 });

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}