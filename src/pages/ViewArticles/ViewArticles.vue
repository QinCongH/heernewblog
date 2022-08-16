<template>
  <div class="view-articles">
    <div class="content w-90 mg-t-15">
      <el-row :gutter="20">
        <el-col :md="17">
          <div class="readbox h-100 box-shadow-1">
            <md-editor @on-getCatalog="getCatalog" previewOnly theme="light" v-model="value"> </md-editor>
          </div>
        </el-col>
        <!-- 目录 -->
        <el-col :md="7">
          <div class="catalogue"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, provide, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const value = ref(
      `# 思路 
       # 1.使用css超伪类。子绝父相（给div设置相对定位,给div的伪类设置绝对定位） 
       # 2.宽高设置为0，设置边框宽，边框颜色设置为透明`
    );
    const getCatalog=(list)=>{
        console.log(list)
    }
    return {
      value,
       getCatalog
    };
  },
});
</script>

<style></style>
