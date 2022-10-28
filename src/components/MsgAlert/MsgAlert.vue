<template>
  <div class="msg-alert" v-show="isMsgAlert">
    <div>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>
<script>
import {
  getCurrentInstance,
  ref,
  defineComponent,
  reactive,
  onMounted,
  watch,
  defineEmits,
} from "vue";
export default defineComponent({
  props: {
    msg: {
      type: String,
      default: "提示",
    },
    isMsgAlert: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="less" scoped>
.msg-alert {
  position: absolute;
  right: 50px;
  width: 200px;
  height: 50px;
  background-color: #ccc1b540;
  border-radius: 10px;
  top: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 999;
  animation: dododo 0.5s ease;
  @keyframes dododo {
    0% {
      right: 100px;
      opacity: 0;
    }
    100% {
      right: 50px;
      opacity: 1;
    }
  }
  > div {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    p {
      line-height: 50px;
      font-size: 14px;
    }
    .close {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
