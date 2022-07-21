<template>
  <div class="notepad w-90 mg-t-15">
    <el-row :gutter="20">
      <el-col :md="17">
        <div class="content">
          <el-row :gutter="20">
            <el-col :md="6" :sm="12" :xs="24" v-for="v in 5" :key="v">
              <div  class="notepad-content w-100 mg-t-30">
                <img
                  ref="imgWidth"
                  class="max-w-100 border-10 block"
                  src="https://images.unsplash.com/photo-1657403538510-1b324c4c1c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80"
                  alt=""
                />
                <p class="text-center mg-t-10">
                  javascript
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :md="7">
        <side></side>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onBeforeUpdate,
  getCurrentInstance,
  onMounted,
  reactive,
} from "vue";
export default defineComponent({
  setup() {
    const imgWidth = ref(null);
    const imgHeight = ref("");
    onMounted(() => {
      imgWidth.value.forEach((e, i) => {
        if (i == 0) {
          imgHeight.value = e.width;
          return;
        }
      });
      // console.log(imgHeight.value);
    });
    return {
      imgWidth,
      imgHeight,
    };
  },
});
</script>

<style lang="less" scoped>
.notepad {
  .notepad-content {
    overflow: hidden;
    img {
      // height:158px;
    }
  }
}
</style>