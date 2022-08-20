<template>
  <div class="article box-shadow-1 pd-15 mg-t-30">
    <div class="header text-center">
      <h2>最新文章</h2>
    </div>
    <div class="content w-100">
      <div v-for="(i, idx) in getNewArticleList" key="i.aid">
        <router-link
          class="flex-h align-center mg-t-15 col-222"
          tag="div"
          :to="path + '?_id=' + i.aid"
        >
          <div>
            <span> {{ idx + 1 }}、 </span>
          </div>
          <div class="font-line-1">
            <p class="font-line-1">
              {{ i.title }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, inject, getCurrentInstance } from "vue";
export default defineComponent({
  setup() {
    const getNewArticleList = ref([]);
    const { proxy } = getCurrentInstance();
    const endNum = ref(6);
    const path = ref("/ViewArticles");
    const loadData = async () => {
      try {
        let getNewArticleRes = await proxy.$api.queryNewArticles({
          endNum: endNum.value,
        });
        if(getNewArticleRes){
          console.log("aaa",getNewArticleRes)
          getNewArticleList.value=getNewArticleRes.data.results
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadData()
    return { path, getNewArticleList , endNum,};
  },
  props: {
    newArchiveList: {
      type: Array,
      default: [],
     
    },
  },
});
</script>

<style></style>
