<template>
  <div id="app">
    <HelloWorld :msg="msg" />
    <button @click="test">{{ $store.state.name }}</button>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ sex }}</p>
    <button @click="add">年龄变大</button>
    <button @click="reduce">年龄变小</button>
    <button @click="asynReduce">异步年龄变小</button>
    <p>{{ $store.getters.fullinfo }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "HomeView",
  data: function () {
    return {
      msg: "0",
    };
  },
  computed: {
    ...mapState(["age", "name", "sex"]),
    ...mapMutations([]),
    ...mapActions([]),
  },
  methods: {
    test(event) {
      this.msg = this.msg + "2";
      console.log(event);
    },
    add() {
      this.$store.commit("addAge", 10);
    },

    reduce() {
      this.$store.commit("reduce");
    },
    asynReduce() {
      this.$store.dispatch("asyncAdd");
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
