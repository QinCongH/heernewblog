<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { ElMessage, ElMessageBox } from "element-plus";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/message-box/style/css";
/*
theme
    */
const store = useStore();
const isDark = computed(() =>store.state.theme.isDark);
onMounted(() => {
  store.dispatch("theme/setTheme", isDark.value);
});
</script>
<template>
  <!-- <Cover v-show="useRoute().name !== 'TianJiaWenZhang'"></Cover> -->
  <div
    class="container w-100"
    :class="[
      !isDark ? 'bg-day' : 'bg-night',
      useRoute().name == 'TianJiaWenZhang' ? 'h-100' : '',
    ]"
  >
    <HeerHeader></HeerHeader>
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
  /deep/.note dl{
    background: #f7f7f70a;
  }
  /deep/.article {
    background: #f7f7f70a;
  }
  /deep/.introduce{
    background: #f7f7f70a;
  }
}
.bg-day {
  /deep/header {
    background: #fff;
  }
}
</style>
