function debounce(fn, time) {
  let a
  return function() {
    clearTimeout(a)
    a = setTimeout(() => {
      fn()
    }, time)
  }
}

function throttle(fn, time) {
  let stime = 0,
    etime
  return function() {
    etime = +new Date()
    let difftime = etime - stime
    stime = etime
    if (difftime > time) {
      fn()
    }
  }
}

// 输出一个数组中两数之和等于target的数组下标
function twoSum(arr, target) {
  const map = new Map()
  let ret
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      ret = [map.get(arr[i]), i]
    } else {
      map.set(target - arr[i], i)
    }
  }
  return ret
}

// 拍平
function flattern(arr) {
  return arr.reduce((prev, next) => prev.concat(Array.isArray(next) ? flattern(next) : next), [])
}

// 去重
function unique(arr) {
  const obj = {}
  return arr.filter(item => {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}

function deepClone(data) {
  if (typeof data !== 'object') return data
  const obj = {}
  for (let i in data) {
    if (typeof data[i] === 'object') {
      obj[i] = deepClone(data[i])
    } else {
      obj[i] = data[i]
    }
  }
  return obj
}

const isComplexData = obj => obj !== null && (typeof obj === 'object' || typeof obj === 'function')
function deepClone2(obj, hash = new WeakMap()) {
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  let cloneObj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
  hash.set(obj, cloneObj)
  for (let k of Reflect.ownKeys(obj)) {
    cloneObj[k] = isComplexData(obj[k]) ? deepClone(obj[k], hash) : obj[k]
  }
  return cloneObj
}

// 反转链表
var reverseList = function(head) {
  let prev = null,
    cur = head
  while (cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

function reverseList2(head) {
  if (head === null || head.next === null) return head
  let next = head.next
  let reverseHead = reverseList2(next)
  next.next = head
  head.next = null
  return reverseHead
}
let q = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
}

// 斐波那契
// 尾调用
function fibonacci(n, sum1 = 1, sum2 = 1) {
  if (n <= 2) return sum2
  return fibonacci(n - 1, sum2, sum1 + sum2)
}
// 闭包
const fibonacci2 = function() {
  let num = [0, 1]
  return function(n) {
    if (num[n] === undefined) {
      num[n] = fibonacci2(n - 1) + fibonacci2(n - 2)
    }
    return num[n]
  }
}()
// 循环
function fibonacci3(n) {
  let n1 = 1, n2 = 1
  for(let i = 2; i < n; i++) {
    [n1, n2] = [n2, n1 + n2]
  }
  return n2
}

// 实现add(1)(2)(3)...无限累加
function add(a) {
  const ret = function(b) {
    a = a + b
    return ret
  }
  ret.toString = function () {
    return a
  }
  return ret
}