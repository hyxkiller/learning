const obj = { name: 'haha' }
// Proxy代理的情况下，目标对象内部的this关键字会指向Proxy代理」
const proxy = new Proxy(obj, {
  get(target, k) {
    // return target[k]
    return Reflect.get(target, k)
  },
  set(target, k, val) {
    // return target[k] = val
    return Reflect.set(target, k, val)
  },
  has(target, k) {
    // return k in target
    return Reflect.has(target, k)
  },
  deleteProperty(target, k) {
    // return delete target[k]
    return Reflect.deleteProperty(target, k)
  },
  ownKeys(target) {
    // 返回数组才有效，且数组中只能是字符串或者Symbol
    return ['asd', 'name', 'addd', Symbol(1)]
  },
  getOwnPropertyDescriptor(target, k) {
    // 获取自身属性描述符
    return Object.getOwnPropertyDescriptor(target, k)
  },
  defineProperty(target, k, desc) {
    // 返回布尔值
    return true
  },
  preventExtensions(target) {
    // 返回布尔值
    // 让一个对象变得不可扩展，永远不能添加新属性
    Object.preventExtensions(target)
    return true
  },
  isExtensible(target) {
    // 返回布尔值
    // 判断一个对象是否是可扩展的
    return true
  },
  getPrototypeOf(target) {
    // 返回指定对象的原型（内部[[Prototype]]属性的值）
    return obj
  },
  setPrototypeOf(target, proto) {
    // 如果对象不可扩展，不能改变对象原型
    target.prototype = proto
    return true
  },
  apply(target, ctx, args) {
    console.log(target, ctx, args);
    return 'kaka'
  },
  construct(target, args) {
    // 必须返回对象
    console.log(target, args);
    return { a: 1 }
  }
})

console.log(proxy.name); // haha
obj.name = 'papa' // !!! 或 proxy.name = 'papa' 下面打印都一样
console.log(proxy.name); // papa
console.log('name' in proxy); // true
console.log(delete proxy['name']); // true
proxy.na = '111'
console.log(proxy.na); // 111
console.log('na' in proxy); // true
console.log(delete proxy['na']); // true
console.log(Object.keys(proxy)); //   []
console.log(Object.getOwnPropertyNames(proxy)); // [ 'asd', 'name', 'addd' ]
console.log(Object.getOwnPropertySymbols(proxy)); // [ Symbol(1) ]
console.log(Object.getOwnPropertyDescriptor(proxy, 'name')); // undefined
console.log(Object.defineProperty(proxy, 'name', {})); // {}
console.log(Object.getPrototypeOf(proxy)); // {}
