import { foo } from './foo';
let bar: number;
bar = foo;
console.log(`模块化引入${bar}`);

// 基本类型注解
function test(a: number): string {
    let num: string;
    if (a === 1) {
        num = '1';
    } else {
        num = '-1';
    }
    return num;
}
console.log(`函数初识:${test(11)}`);

// 数组
let arr: boolean[] = [true];
let rand: any[];
rand = [true, 1, 'haha'];
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 接口
interface Home {
    mom: string,
    dad: string,
    len: number | string,
    merry: boolean,
}
let home: Home = {
    mom: 'Lily',
    dad: 'james',
    // len: 2,
    len: '2',
    merry: true,
}
console.log(home);
interface Log1 {
    a: string,
}
function log1(a: Log1) {
    console.log(a.a);
}
let he = { a: 'hello', b: 0 };
log1(he);

// 泛型
function generic<T>(arr: T[]): T[] {
    arr.forEach((item: T) => {
        console.log(item);
    })
    return arr;
}
let Arr = [1, 2, 3];
console.log(`泛型:${generic<number>(Arr)}`);

// 联合类型
function joint(type: string | number): string {
    if (typeof type === 'string') {
        return `字符串${type}`;
    } else {
        return `数字${type}`;
    }
}
console.log(`联合类型:${joint('hello')}`);

// 交叉类型


// 元组类型
let name: [string, number, boolean];
name = ['hello', 123, true];

// 枚举
enum CardSuit {
    clubs, // 0
    diamonds, // 1
    hearts, // 2
}
enum CardSuit2 {
    clubs = 3, // 3
    diamonds, // 4
    hearts = 'hello',
}
let card = CardSuit.diamonds;
console.log(`枚举:${card}`);

const simple: (foo: number) => string = foo => foo.toString();
console.log(typeof simple(1));

// declare function create(o: object | null): void;
// create({ 0: 0 });
// create(null);

// 类型断言
let a: any = 'string';
// let b: number = (<string>a).length;
let b: number = (a as string).length;
console.log(b);

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}

// 索引类型
class Animal {
    name: string
}
class Dog extends Animal {
    breed: string
}
interface NotOkay {
    [x: number]: Dog,
    [x: string]: Animal
}

// 继承类型(接口可以互相继承,一个接口可以继承多个接口，创建出多个接口的合成接口)
interface Shape {
    color: string,
}
interface Stroke {
    width: number,
}
interface Square extends Shape, Stroke {
    side: number,
}
let square = {} as Square;
square.color = 'red';
square.side = 10;
square.width = 5;

// 混合类型
interface Counter {
    (start: number): string,
    interval: number,
    reset(): void,
}
function getCounter(): Counter {
    let counter = (function (start: number) {

    }) as Counter;

    counter.interval = 123;
    counter.reset = function () {

    }
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5;

// 接口继承类

// 类
class Fruits {
    name: string
    constructor(m: string){
        this.name = m;
    }
    eat(num: number) {
        console.log(`I have eat ${num}`);
    }
}
class Apple extends Fruits {
    constructor(name: string){
        super(name)
    }
    eat(num: number = 1){
        console.log(`delicious`);
        super.eat(num);
    }
}
let apple = new Apple('apple');
apple.eat(10);

class Person {
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
}
class Employee extends Person {
    private department: string;
    constructor(name: string, department: string){
        super(name)
        this.department = department;
    }
    getElevator() {
        return `${this.name} ${this.department}`
    }
}
let curry = new Employee('Curry', 'Sales');
console.log(curry.getElevator());
