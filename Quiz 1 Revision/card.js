export default {
  template: `
    <div>
    <h1> {{head}} <h1>
    <hr>
    <slot> This is default value </slot>
    <h1></h1>
    </div>
    `,
  props: ["head", "body"],
  data() {
    return {
      a: 10,
    };
  },
};
