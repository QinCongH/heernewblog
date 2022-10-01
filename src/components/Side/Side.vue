<template>
  <div class="side">
    <div @dblclick="toLogin">
      <introduce></introduce>
    </div>
    <clalendar></clalendar>
    <new-article></new-article>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  emits:["toLogin"],
  setup(props, context) {
    const toLogin = () => {
      context.emit('toLogin')
    };
    return {
      toLogin,
    };
  },
  props: {
    newArchiveList: {
      type: Array,
      default: [],
    },
  },
});
</script>

<style></style>
