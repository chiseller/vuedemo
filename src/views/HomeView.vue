<template>
  <div id="app">
    <HelloWorld :msg="msg" />
    <button @click="test">测试</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data: function () {
    return {
      msg: "0",
    };
  },
  methods: {
    test() {
      this.msg = this.msg + "2";
      console.log("test");
    },
  },
  components: {
    HelloWorld,
  },
  beforeCreate: () => {
    console.log("beforeCreate");
  },
  created: () => {
    console.log("created");
  },
  beforeMount: () => {
    console.log("beforeMount");
  },
  mounted: () => {
    console.log("mounted");
  },

  beforeUpdate: () => {
    console.log("beforeUpdate");
  },
  updated: () => {
    console.log("updated");
  },
  beforeDestroy: () => {
    console.log("beforeDestroy");
  },
  destroyed: () => {
    console.log("destroyed");
  },
};
</script>
