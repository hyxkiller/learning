// a模块引入后变更过c模块的引用导出，但对d模块没有影响

const c = require('./c')
const d = require('./c')

console.log('c', c)
console.log('d', d)