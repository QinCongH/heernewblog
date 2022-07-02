<template>
  <div class="home">
    <div>
      <router-link to="/HomePage"> 主页 </router-link>
    </div>
    <div>
      <router-link to="/Notepad"> 记事本 </router-link>
    </div>
    <div>
      <router-link to="/Archive"> 归档 </router-link>
    </div>
    <div>
      <router-link to="/Listing"> 清单 </router-link>
    </div>
    <div>
      <router-link to="/About"> 关于 </router-link>
    </div>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 70px;
  div {
    width: 100px;
    height: 50px;
    background-color: skyblue;
  }
}
.content {
  position: absolute;
  top: 70px;
  width: 100%;
  bottom: 0;
  background: pink;
}
</style>