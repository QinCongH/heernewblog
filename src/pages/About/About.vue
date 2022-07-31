<template>
  <div>关于页面</div>
</template>

<script>
// getCurrentInstance获取实例上的内容
import { ref, reactive, getCurrentInstance, onMounted, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    onMounted(() => {
      proxy.$api.getArticle().then((res) => {
        console.log(res);
      });
      console.log(proxy.$api);
    });
  },
});
</script>

<style></style>
