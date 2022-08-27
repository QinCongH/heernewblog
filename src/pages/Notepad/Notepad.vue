<template>
  <div class="notepad w-90 mg-t-15">
    <el-row :gutter="20">
      <el-col :md="17">
        <div class="content">
          <el-row :gutter="20">
            <div class="top w-100">
              <div
                v-for="v in queryNotePadList"
                :key="v.sortid"
                class="notepad-content w-100 mg-t-30"
              >
                <img
                  ref="imgWidth"
                  class="border-10 block"
                  :src="v.head_portrait"
                  alt=""
                />
                <p class="text-center mg-t-10">{{ v.name }}</p>
              </div>
            </div>
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
    const { proxy } = getCurrentInstance();
    const queryNotePadList = ref([]);
    const loadData = async () => {
      try {
        let queryNotePadRes = await proxy.$api.queryNotePad();
        if (queryNotePadRes) {
          console.log("queryNotePadeRes", queryNotePadRes);
        }
        queryNotePadList.value = queryNotePadRes.data.data;
      } catch (e) {
        console.error(e);
      }
    };
    onMounted(() => {
      loadData();
      // imgWidth.value.forEach((e, i) => {
      //   if (i == 0) {
      //     imgHeight.value = e.width;
      //     return;
      //   }
      // });
    });
    return {
      imgWidth,
      imgHeight,
      loadData,
      queryNotePadList,
    };
  },
});
</script>

<style lang="less" scoped>
.notepad {
  .top {
    display: flex;
    flex-wrap: wrap;
  }
  .notepad-content {
    width: 25%;
    overflow: hidden;
    img {
      width: 148px;
      height: 148px;
      margin: auto;
    }
  }
}
</style>
