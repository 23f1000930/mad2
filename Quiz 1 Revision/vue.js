// import Card from "./card.js";

// new Vue({
//   el: "#app",
//   template: `<div>
//   <Card head="heading 1" body="body1"><h2>This data from parent slot{{a}} </h2></Card>
//   <Card head="🚞🚞" body="body 2" image="so good"/>
//   {{a}}
//   </div>`,
//   data() {
//     return {
//       message: "mydata",
//       a: 20,
//     };
//   },
//   methods: {
//     buttonClicked() {
//       this.message += "!";
//     },
//   },
//   components: {
//     Card: Card,
//   },
// });

// 6)
const a = new Vue({
  el: "#app1",
  data: {
    message1: "Abhishek",
  },
});

const b = new Vue({
  el: "#app2",
  data: {
    message2: "Rajput",
  },
});
