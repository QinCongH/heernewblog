<template>
  <div class="msg-confirm" v-if="isMsgConfirm">
    <div class="content">
      <div>
        <h4>标题</h4>
      </div>
      <div>
        <p>您的文件没有保存，确定要退出吗？</p>
      </div>
      <div>
        <div class="cancel" @click="$emit('cancel', false)">取消</div>
        <div class="confirm" @click="$emit('confirm', true)">确定</div>
      </div>
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
    isMsgConfirm: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const emit = defineEmits(["cancel", "confirm"]);
 

    return { emit};
  },
});
</script>

<style lang="less" scoped>
.msg-confirm {
  position: fixed;
  width: 250px;
  height: 110px;
  background-color: #e3e3e3;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: 10px;
  padding: 0px 10px;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    div {
      &:nth-of-type(1) {
        h4 {
          text-align: center;
          font-size: 16px;
          font-weight: 400;
        }
      }
      &:nth-of-type(2) {
        p {
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      &:nth-of-type(3) {
        display: flex;
        justify-content: space-around;
        div {
          width: 40%;
          height: 25px;
          text-align: center;
          font-size: 14px;
          border-radius: 10px;
          line-height: 25px;
          border: 1px solid #fff;
        }
        .cancel {
          background-color: #f3f3f3;
        }
        .confirm {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
