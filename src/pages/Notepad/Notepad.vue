<template>
  <div class="notepad w-90">
    <div class="content">
      <el-row :gutter="20">
        <el-col :md="17">
          <div class="content">
            <el-row :gutter="20">
              <div class="top w-100">
                <div
                  v-for="v in queryNotePadList"
                  :key="v.sortid"
                  class="notepad-content w-100 mg-t-30"
                  @click="toPage(v.sortid)"
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
  provide,
  computed
} from "vue";
import { onBeforeRouteLeave, useRouter, useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const imgWidth = ref(null);
    const imgHeight = ref("");
    const { proxy } = getCurrentInstance();
    const queryNotePadList = ref([]);
    const dispositionObj=reactive({
      data:{}
    })
    const router = useRouter();
    const loadData = async () => {
      try {
        let queryNotePadRes = await proxy.$api.queryNotePad();
        if (queryNotePadRes) {
          console.log("queryNotePadeRes", queryNotePadRes);
        }
        queryNotePadList.value = queryNotePadRes.data.data;
        let dispositionRes = await proxy.$api.queryDisposition({
           name:"禾耳"
         });
      if(dispositionRes){
        dispositionObj.data=dispositionRes.data[0]
      }
       
      } catch (e) {
        console.error(e);
      }
    };
      //  发送值
      provide('avatarData',computed(()=>{return {avatar:dispositionObj.data.avatar,name:dispositionObj.data.name}}) )
    onMounted(() => {
      loadData();
    });
    const toPage = (id) => {
      router.push({
        path: "/NotepadContent",
        query: {
          _id: id,
        },
      });
    };
    return {
      imgWidth,
      imgHeight,
      loadData,
      queryNotePadList,
      toPage,
    };
  },
});
</script>

<style lang="less" scoped>
.notepad {
  // height: calc(100vh - 50px);
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
