
<script setup>
import Cover from "../Cover/Cover.vue";
import HeerHeader from "../HeerHeader/HeerHeader.vue";
import { ref } from "vue";
const switchTheme = ref(false); //false是白，true是黑
const changeSwithTheme = (e) => {
  //接收主题
  switchTheme.value = e;
};
</script>
<template>
  <Cover></Cover>
  <div class="container w-100" :class="!switchTheme ? 'bg-day' : 'bg-night'">
    <HeerHeader
      :switchTheme="switchTheme"
      @changeSwithTheme="changeSwithTheme"
    ></HeerHeader>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  transition: background .6s ease;
  // width: 100%;
}
.bg-night {
  /deep/.active::after {
    background: #fff !important;
  }
  /deep/a {
    color: #fff !important;
  }
  /deep/header{
    box-shadow: none !important;
  }
}
.bg-day {
}
</style>