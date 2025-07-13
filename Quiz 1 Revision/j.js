// var, let, const

// var -> old way, function scoped, mutable, it creates property when used in global scope, hoisting (undefined)

// let, const -> block scoped, hoisting(TDZ)

// function abc() {
//   if (true) {
//     var a = 10;
//     console.log(a);
//   }
// }

// abc();
// console.log(window.a);

// let, const

// var a = 10; // creates global property

// function test() {
//   console.log(this.a);
// }

// normal function look at the left side of function call
// test();

// function abc() {
//   if (true) {
//     let a = 10;
//     console.log(a);
//   }
//   console.log(a);
// }

// let globalLet = "hi!";

// console.log(window.globalLet);

// abc();

// implicit conversions

// console.log(10 + "10"); // 1010
// console.log(10 * "10"); // 100
// console.log(true + 1); // 2
// console.log(10 * undefined); // NaN

// IIFE

// (function () {
//   var a = 10;
//   var b = 20;
//   console.log(a + b);
// })();

// This and functions and objects

// console.log(this); // global space (GEC)

// function abc() {
//   console.log(this);
// }

// abc();

// normal function, who is to the left side of calling (this)
// function logThis(a, b) {
//   console.log(this.color + a + b);
// }

// const obj = {
//   color: "green",
//   inObjectFunc: logThis,
// };

// obj.inObjectFunc();
// logThis();

// call, bind, apply can change the context(this)
// obj2 = {
//   color: "red",
// };
// obj.inObjectFunc.call(obj2, 1, 4);
// obj.inObjectFunc.apply(obj2, [1, 7]);
// const binded = obj.inObjectFunc.bind(obj2, 1);
// binded(9);

// array methods forEach, map, reduce, sort
const arr = [-9, 7, -99, 0, 11, 2, 6];

const arr2 = [];
arr.forEach((x) => arr2.push(x * x));

let arr3 = arr.map((elem) => elem % 2);

// console.log(arr3);

const sum = arr.reduce((a, b) => `${a}:${b}`);

// console.log(sum);

// console.log(arr.sort((a, b) => b - a)); //desc

// return -ve, +ve

// console.log(a); // hoisting of var gives undef
// var a = 10;

// try {
//   console.log(b); // TDZ  (space where variables are kept before they can be used (the line in which they were defined))
//   let b = 70;
// } catch (e) {
//   console.log(e);
// }
// console.log(c);

// ES6, Destructing, spread, arrow

// const obj3 = {
//   dog: "husky",
//   name: "bruno",
// };

// const { dog: dogBreed } = obj3;

// console.log(dogBreed);

// const { alert: myAlert } = window;

// myAlert("hey something nice");

// function abcd({ a, b }) {
//   console.log(a + b);
// }

// abcd({ a: 1, b: 3, c: 10 });

const newArray = [1, 3, 3, 5, [1, 2]];

// ...

const sadArray = newArray; // reference

const newNewArray = [-1, 2, 3, ...newArray, 4, 5]; // copy (shallow copy)

// newArray.push(3);
// console.log(sadArray);
// console.log(newNewArray);

// arrow function

// this is decided at the creation of arrow fuction and cant be changed.

// this?? // window
// const arrow = () => {
//   console.log(this);
// };

// // arrow();

// const obj66 = {
//   name: "66",
// };

// const obj55 = {
//   name: "55",
//   method() {
//     // this? obj77
//     const arrow = () => {
//       console.log(this);
//     };
//     return arrow;
//   },
// };

// obj77 = {
//   name: "77",
//   how: obj55.method,
// };

// obj55.method()();
// obj55.method.call(obj66)();
// const retiredArrow = obj77.how();

// retiredArrow();

// set interval set timeout

// setTimeout(() => {
//   console.log("time1");
//   setTimeout(() => console.log("time inside 1"), 0);
// }, 10);
// console.log("main1");
// setTimeout(() => console.log("time2"), 10);
// console.log("main2");

// const intv = setInterval(() => console.log(90), 500);
// setTimeout(() => clearInterval(intv), 2000);
// setInterval(() => console.log(50), 2000);
