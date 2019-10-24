let a = require('./b')
let b = require('./b')

const c = require('./c')
const d = require('./c')

console.log(module)
a = 122
console.log('a', a)
console.log('b', b)

// 只改变当前模块的拷贝
c.name = 'world'
console.log('c', c)
console.log('d', d)