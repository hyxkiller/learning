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
let name: [string, number];
name = ['hello', 123];

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
