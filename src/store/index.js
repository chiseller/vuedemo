import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  //提供唯一的公共数据源，所有共享的数据统一放到store的state进行储存，相似与data
  state: {
    name: "zhangsan",
    age: 23,
    sex: "女",
  },
  getters: {
    // 类似于计算属性
    fullinfo: (state) => {
      return state.name + state.age + state.sex;
    },
  },
  //里面定义方法，操作state方法
  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
  mutations: {
    addAge(state, offset) {
      state.age += offset;
    },
    reduce(state) {
      state.age--;
    },
  },
  // Action和Mutation相似，Mutation 不能进行异步操作，若要进行异步操作，就得使用Action
  actions: {
    asyncAdd(context) {
      setTimeout(() => {
        context.commit("reduce");
      }, 1000);
    },
  },
  modules: {},
});
