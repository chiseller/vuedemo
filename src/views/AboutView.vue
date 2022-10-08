<template>
  <div class="about">
    <button @click="flag = !flag">点击</button>
    <transition>
      <h1 v-if="flag">This is an about page</h1>
    </transition>
  </div>
</template>
<style lang="stylus" scoped>

h1
  color:red

.v-enter,
.v-leave-to
    opacity: 0;
    color: #000000
    transform: translateX(80px)

.v-enter-to,
.v-leave
  color:red

.v-enter-active,
.v-leave-active
    transition: all 12s ease
</style>
<script>
// 创建 Vue 实例，得到 ViewModel
export default {
  data: function () {
    return {
      flag: false,
    };
  },
  methods: {},
};
</script>
