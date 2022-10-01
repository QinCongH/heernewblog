<template>
  <div :class="isShadow ? 'box-shadow-1' : ''" class="introduce pd-bt-15">
    <div class="introduce-main text-center">
      <div class="pic flex-h justify-center">
        <img
          src="https://images.unsplash.com/photo-1657403538510-1b324c4c1c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80"
          alt=""
          class="border-50"
        />
      </div>
      <div class="myself mg-t-15">
        <p>web前端开发</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, defineEmits, toRefs } from "vue";
export default defineComponent({
  props: {
    isShadow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {

    return {
    };
  },
});
</script>

<style lang="less" scoped>
.introduce {
  .introduce-main {
    .pic {
      img {
        width: 66px;
        height: 66px;
      }
    }
  }
}
</style>
