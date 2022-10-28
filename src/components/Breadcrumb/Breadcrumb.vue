<template>
  <div class="breadcrumb pd-bt-10 border-b-eee">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="javascript:;">{{twoItem}}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
// getCurrentInstance获取实例上的内容
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
import { defineComponent } from "vue";
// data
export default defineComponent({
  props: {
    twoItem:{
        type:'写笔记',
        default:String
    }
  },
});
</script>
<style lang="less" scoped>
.breadcrumb {
  height: 3%;
}
</style>
