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
    // avatar:{
    //   type:String,
    //   default:"https://images.unsplash.com/photo-1657403538510-1b324c4c1c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80"
    // }
  },
});
</script>

<style></style>
