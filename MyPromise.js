const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
    let that = this;
    that.state = PENDING;
    that.value = null;
    that.reslovedResult = [];
    that.rejectedResult = [];
    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED;
            that.value = value;
            that.reslovedResult.map(cb => cb(that.value));
        }
    }
    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.value = value;
            that.rejectedResult.map(cb => cb(that.value));
        }
    }
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
MyPromise.prototype.then = function (onFullfilled, onRejected) {
    const that = this;
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : cb => cb;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
    if (that.state === PENDING) {
        that.reslovedResult.push(onFullfilled);
        that.rejectedResult.push(onRejected);
    }
    if (that.state === RESOLVED) {
        onFullfilled(that.value);
    }
    if (that.state === REJECTED) {
        onRejected(that.value)
    }
}

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        console.log(0)
        resolve(1)
    }, 0)
}).then(value => {
    console.log(value)
})