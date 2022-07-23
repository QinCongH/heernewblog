<script setup>
import { ref, watch } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/message-box/style/css";
// 主题
const switchTheme = ref(false); //false是白，true是黑
const changeSwithTheme = (e) => {
  //接收主题
  switchTheme.value = e;
};
const date = new Date();
const getTime = () => {
  let time = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }`;
  if (parseInt(time) > 1800 || parseInt(time) < 600) {
    //到晚上了
    if (switchTheme.value == false) {
      ElMessageBox.confirm("到晚上了，是否要开启暗色主题?", "提醒", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info",
      })
        .then(() => {
          switchTheme.value = true;
        })
        .catch(() => {
          switchTheme.value = false;
        });
    }
  } else {
    switchTheme.value = false;
  }
};
getTime();
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
  transition: background 0.6s ease;
  // width: 100%;
}
.bg-night {
  /deep/.active::after {
    background: #fff !important;
  }
  /deep/a {
    color: #fff !important;
  }
  /deep/header {
    background: #282c34;
    box-shadow: none !important;
  }
  /deep/.clalendar .el-calendar {
    background: #f7f7f70a;
  }
  /deep/.el-drawer.ltr {
    background: #424242fc;
  }
  /deep/ .archive .el-card {
    background: #f7f7f70a;
    color: #fff;
    border: none;
  }
}
.bg-day {
  /deep/header {
    background: #fff;
  }
}
</style>
