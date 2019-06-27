// 泛型接口
function identity(arg) {
    return arg;
}
var myIdentity = identity;
myIdentity(1);
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 2));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity([123]);
loggingIdentity({ length: 1 });
function getProperty(obj, key) {
    return obj[key];
}
