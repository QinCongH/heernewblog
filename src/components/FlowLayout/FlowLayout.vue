<template>
  <div class="flow-layout" :style="{columns:column,'column-gap':gap}">
    <div
      class="item mg-b-30 w-100"
      v-for="(item, index) in columnList"
      :key="index"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { toRefs, defineProps, defineEmits, ref, onMounted, defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  props: {
    column: {
      type: Number,
      default: 4,
    },
    gap: {
      type: Number,
      default: 4,
    },
  },
});
</script>
<style lang="less" scoped>
.flow-layout {
  width: 100%; // 默认宽度
  margin: 20px auto; // 剧中

  .item {
    break-inside: avoid;
  }
}
</style>
