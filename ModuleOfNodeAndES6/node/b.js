const a = 1;
const b = 10
// 如果有module.exports，则导出a
module.exports = a
// exports = b
// 如果只exports，则相当于导出一个对象{b: 10}
// exports.b = b