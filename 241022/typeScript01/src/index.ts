// TS 타입
// 기본제공타입: number, string, boolean, object
// unknown, any, null, undefined, void, symbol, neverm etc...

// 점진적 타입시스템 => 타입추론 => 타입주석을 입력하지 않아도 타입정의
let num: number = 1;
num = 10;

let str: string = "hi";
str = "world";

let bool: boolean = true;
bool = false;

let obj: object = {};

obj = {
  name: "teahwan",
};
console.log(obj);

// 다양한 종류의 타입 가운데, 치트키의 역할 => any
// undefined
let sample01: undefined = undefined;

// 슈퍼타입
let sample02: unknown = 10;
sample02 = true;

// 배열타입
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["hi", "hi1", "hi2"];
const boolArr: Array<boolean> = [true, true, false];

// union 타입
const multiArr: (string | number | boolean)[] = [1, "hi", true];

// 중첩배열
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 길이 & 타입이 고정된 배열 = Tuple타입
let tup1: [number, number] = [1, 2];

const users: [string, number][] = [
  ["Pth", 0],
  ["Pth1", 1],
  ["Pth2", 2],
  ["Pth3", 3],
  [5, "pth4"],
];
