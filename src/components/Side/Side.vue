<template>
  <div class="side">
    <introduce></introduce>
    <clalendar></clalendar>
    <new-article></new-article>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
  props: {
    newArchiveList:{
    type: Array,
    default: [],
    }

  },
});
</script>

<style></style>
