<template>
  <div class="view-articles w-90">
    <div class="breadcrumb pd-bt-10 border-b-eee">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="javascript:;">{{ title }}</a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="head pd-bt-15">
      <h1 class="font-25">
        {{ title }}
      </h1>
    </div>
    <div class="content mg-t-15">
      <el-row :gutter="20">
        <el-col :md="17">
          <div class="readbox h-100 box-shadow-1">
            <md-editor
              @on-getCatalog="getCatalog"
              previewOnly
              theme="light"
              v-model="value"
            >
            </md-editor>
          </div>
        </el-col>
        <!-- 目录 -->
        <el-col :md="7">
          <div class="catalogue">
            <div class="catalogue-content box-shadow-1">
              <div class="catalogue-tle">
                <h2 class="text-center">目录</h2>
              </div>
              <div class="line"></div>
              <div v-for="(item, index) in catalogList" :key="index">
                <h1
                  v-show="item.level == 1"
                  class="font-line-1"
                  style="margin-top: 15px"
                  @click="toHere(item.text)"
                >
                  {{ item.text }}
                </h1>

                <h2
                  v-show="item.level == 2"
                  class="font-line-1"
                  style="margin-left: 10px; margin-top: 10px"
                  @click="toHere(item.text)"
                >
                  {{ item.text }}
                </h2>

                <h3
                  v-show="item.level == 3"
                  class="font-line-1"
                  style="margin-left: 20px; margin-top: 10px"
                  @click="toHere(item.text)"
                >
                  {{ item.text }}
                </h3>

                <h4
                  v-show="item.level == 4"
                  class="font-line-1"
                  style="margin-left: 25px; margin-top: 10px"
                  @click="toHere(item.text)"
                >
                  {{ item.text }}
                </h4>

                <h5
                  v-show="item.level == 5"
                  class="font-line-1"
                  style="margin-left: 30px; margin-top: 10px"
                  @click="toHere(item.text)"
                >
                  {{ item.text }}
                </h5>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, provide, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const value = ref("");
    const title = ref("");
    const catalogList = ref([]);
    const getCatalog = (list) => {
      catalogList.value = list;
    };
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    console.log(route.query);
    const loadData = async () => {
      try {
        let res = await proxy.$api.queryIdArticle({ aid: route.query._id });
        console.log(res);
        value.value = res.data.params.content;
        title.value = res.data.params.title;
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
    const toHere = (here) => {
      document.getElementById(here).scrollIntoView();
    };
    return {
      value,
      getCatalog,
      route,
      title,
      toHere,
      catalogList,
    };
  },
});
</script>

<style scoped lang="less">
.breadcrumb {
  height: 3%;
}
.catalogue-content {
  color: #222;
  cursor: pointer;
  padding: 15px;
}
.readbox {
  padding: 15px;
}
.line {
  width: 100%;
  padding-bottom: 1px;
  background: #cecece;
  margin: 15px auto 0px auto;
}
</style>
