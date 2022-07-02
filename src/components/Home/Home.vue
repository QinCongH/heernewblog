
<script setup>
import { ref } from "vue";
const input = ref("请输入...");
</script>
<template>
  <div class="cover w-100 h-100">
    <div class="cover-content w-100 max-w-1100 mg-auto">
      <div class="cover-title pd-t-130 col-fff text-center">
        <h1>禾耳</h1>
      </div>
      <div class="cover-input mg-t-30 text-center">
        <el-input
          :input-style="{ width: '80%', color: '#fff' }"
          v-model="input"
          placeholder="请输入..."
        />
      </div>
      <div>
        
      </div>
      <div>4</div>
    </div>
  </div>
  <div class="container"></div>
</template>

<style lang="less" scoped>
.cover {
  background: url(/src/assets/image/bcg.png) no-repeat;
  background-size: cover;
  background-position: center;
  background-origin: border-box;
  .cover-content {
    .cover-title {
      font-size: 36px;
      font-weight: 900;
    }
    .cover-input {
      /deep/.el-input__wrapper {
        background: transparent;
      }
      /deep/.el-input__wrapper.is-focus {
        box-shadow: 0 0 0 1px #ffffff inset;
      }
      /deep/input::-webkit-input-placeholder {
        color: #fff;
      }
    }
  }
}
.container {
  height: 500px;
  width: 100%;
}
</style>