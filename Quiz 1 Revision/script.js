// 1) Consider the following JavaScript program and predict the output if executed,

// const a = {
//   x1: 10,
//   func1: function () {
//     console.log(this.x1);
//   },
// };

// const b = {
//   x1: 20,
//   func2: function () {
//     c = a.func1;
//     c.apply(b, [10]);
//   },
// };

// b.func2();

// 2) Consider the following JavaScript program and predict the output if executed

// const a = {
//   x1: 10,
//   func1: function () {
//     console.log(5 + this.x1);
//   },
// };

// const b = {
//   x1: 20,
//   func2: function () {
//     c = a.func1;
//     c.apply();
//   },
// };

// b.func2();

// 3) Consider the following JavaScript program and predict the output if executed,

// var x = 5;
// let obj = {
//   x: 10,
//   func: (x) => {
//     this.x = x;
//   },
// };

// obj.func(20);
// console.log(x, "and", obj.x);

// 7)

// let x1 = {
//   a: 5,
//   b: "hello",
//   add: function (x) {
//     return this.b + " " + x;
//   },
// };

// let x2 = {
//   a: 5,
//   b: "Welcome",
//   add: function (x) {
//     return this.a + " " + x;
//   },
// };

// let y = x1.add;
// console.log(y.call(x2, "Diya"));

// 8)

// let x = {
//   a: [1, 2, 3, 4, 5],
//   b: function () {
//     return [...this.a, 6, 7, 8];
//   },
// };

// let c = x.b;
// console.log(c.call(x));

// 9)

// const courses = [
//   { name: "MAD-1", description: "CSS, HTML, SQLITE" },
//   { name: "MAD-2", description: "Javascript, Vue" },
// ];

// function getCourse() {
//   setTimeout(() => {
//     let allCourses = [];
//     courses.forEach((course, index) => {
//       allCourses.push(course);
//     });
//     console.log(allCourses);
//   });
// }

// function addCourse(course) {
//   setTimeout(() => {
//     courses.push(course);
//   }, 2000);
// }

// addCourse({ name: "MAD-3", description: "watch the space!!" });
// getCourse();

const obj = {
  name: "fellow student",
  a: this,
  normie: function () {
    console.log(this);
  },
};

obj.normie();
