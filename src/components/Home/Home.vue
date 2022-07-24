<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
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

onMounted(() => {});
</script>
<template>
  <Cover v-show="useRoute().name !== 'TianJiaWenZhang'"></Cover>
  <div
    class="container  w-100"
    :class="[
      !switchTheme ? 'bg-day' : 'bg-night',
      useRoute().name == 'TianJiaWenZhang' ? 'h-100' : '',
    ]"
  >
    <HeerHeader
      :switchTheme="switchTheme"
      @changeSwithTheme="changeSwithTheme"
    ></HeerHeader>
    <div class="main" :class="useRoute().name == 'TianJiaWenZhang' ? 'h-100' : ''">
      <router-view></router-view>
    </div>
    <Backtop></Backtop>
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
  /deep/.el-breadcrumb__inner.is-link {
    color: #fff;
  }
  /deep/.add-header input {
    background: #f7f7f70a;
  }
  /deep/.add-content #md-editor-v3 {
    background: #f7f7f70a;
  }

  /deep/.add-content .md-footer-label {
    color: #fff;
  }
  /deep/.add-footer .el-select-v2__wrapper.is-filterable {
    background: #f7f7f70a;
    color: #fff;
  }
  /deep/.add-footer .el-select-v2__popper.el-popper {
    background: #f7f7f70a;
    color: #fff;
  }
  /deep/.add-content .md-footer-item span {
    color: #fff;
  }
  /deep/.createNotepad .el-button {
    background: #f7f7f70a;
  }
  /deep/.saveNote .el-button {
    background: #f7f7f70a;
  }
  /deep/.add-header input::-webkit-input-placeholder {
    color: #fff;
  }
}
.bg-day {
  /deep/header {
    background: #fff;
  }
}
</style>
