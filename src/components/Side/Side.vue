<template>
  <div class="side">
    <introduce></introduce>
    <clalendar></clalendar>
    <div class="article box-shadow-1 pd-15 mg-t-30">
      <div class="header text-center">
        <h2>最新文章</h2>
      </div>
      <div class="content w-100">
        <div
          class="flex-h justify-between align-center mg-t-15"
          v-for="i in 6"
          key="i"
        >
          <div class="w-15">
            <span>
              {{ i }}
            </span>
          </div>
          <div class="font-line-1">
            <p class="font-line-1">
              内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style>
</style>