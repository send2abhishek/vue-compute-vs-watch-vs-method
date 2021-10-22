const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      console.log("called");
      if (this.counter < 37) {
        return "Not there yet";
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    counter(value) {
      const that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    },
  },
  methods: {
    addNumber(num) {
      this.counter += num;
    },
  },
});

app.mount("#assignment");
