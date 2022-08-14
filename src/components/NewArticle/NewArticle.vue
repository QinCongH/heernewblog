<template>
    <div class="article box-shadow-1 pd-15 mg-t-30">
      <div class="header text-center">
        <h2>最新文章</h2>
      </div>
      <div class="content w-100">
        <div class="flex-h  align-center mg-t-15" v-for="i,idx in getNewArticleList" key="i.aid">
          <div>
            <span>
              {{ idx+1 }}、
            </span>
          </div>
          <div class="font-line-1">
            <p class="font-line-1">
              {{i.title}}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent, ref ,inject} from "vue";
export default defineComponent({
  setup() {
    const getNewArticleList=inject('sendNewArticleList')
    return {getNewArticleList};
  },
  props: {
    newArchiveList:{
    type: Array,
    default: [],
    }

  },
});
</script>

<style></style>
