<template>
  <div class="view-articles w-90">
    <div
      :style="{ background: isDark ? '#2c2c2c' : '' }"
      class="breadcrumb flex-h align-center justify-between pd-bt-10 border-b-eee"
    >
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/HomePage' }">
          <span :style="{ color: isDark ? '#fff' : '#222' }"> 首页 </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="javascript:;" :style="{ color: isDark ? '#fff' : '#222' }">{{
            title
          }}</a></el-breadcrumb-item
        >
      </el-breadcrumb>
      <div class="flex-h align-center">
        <svg
          @click="drawer = true"
          t="1661049360733"
          class="icon photoDrawer"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4030"
          width="20"
          height="20"
        >
          <path
            d="M370.1 371.5h-49.6c-3.1 0-5.7-2.5-5.7-5.7v-49.6c0-3.1 2.5-5.7 5.7-5.7h49.6c3.1 0 5.7 2.5 5.7 5.7v49.6c0 3.1-2.6 5.7-5.7 5.7z m333.5-7.6H460.5c-3.1 0-5.7-2.5-5.7-5.7v-34.5c0-3.1 2.5-5.7 5.7-5.7h243.2c3.1 0 5.7 2.5 5.7 5.7v34.5c-0.1 3.2-2.7 5.7-5.8 5.7zM370.1 712.4h-49.6c-3.1 0-5.7-2.5-5.7-5.7v-49.6c0-3.1 2.5-5.7 5.7-5.7h49.6c3.1 0 5.7 2.5 5.7 5.7v49.6c0 3.2-2.6 5.7-5.7 5.7z m333.5-7.5H460.5c-3.1 0-5.7-2.5-5.7-5.7v-34.5c0-3.1 2.5-5.7 5.7-5.7h243.2c3.1 0 5.7 2.5 5.7 5.7v34.5c-0.1 3.1-2.7 5.7-5.8 5.7zM370.1 542.5h-49.6c-3.1 0-5.7-2.5-5.7-5.7v-49.6c0-3.1 2.5-5.7 5.7-5.7h49.6c3.1 0 5.7 2.5 5.7 5.7v49.6c0 3.1-2.6 5.7-5.7 5.7z m333.5-7.6H460.5c-3.1 0-5.7-2.5-5.7-5.7v-34.5c0-3.1 2.5-5.7 5.7-5.7h243.2c3.1 0 5.7 2.5 5.7 5.7v34.5c-0.1 3.2-2.7 5.7-5.8 5.7z"
            p-id="4031"
            :fill="isDark ? '#fff' : '#303030'"
          ></path>
          <path
            d="M847.1 560.4V250.1s0-24.7-14-46.4c-10.8-16.8-30-31.8-64.2-31.8h-261c-0.2 0-0.3 0-0.5 0.1H255s-78.1 0-78.1 78.1l0.1 213.4V774s0 24.7 13.9 46.3c10.8 16.8 30 31.8 64.2 31.8h261.1c0.2 0 0.3 0 0.5-0.1H769s78.1 0 78.1-78.1l-0.1-213.4 0.1-0.1z m-39 213.6c-1.3 38.5-38.9 39-38.9 39h-514c-1.3-0.1-2.5-0.2-3.8-0.3-5.4-1.1-15.7-4.1-23.9-11.7-9-9.7-11.2-22.3-11.7-26.1v-0.7l0.1-524.2c1.3-38.5 38.9-39 38.9-39h514c1.3 0.1 2.5 0.2 3.7 0.3 5.4 1.1 15.7 4.1 23.9 11.7 9 9.7 11.2 22.2 11.7 26 0 0.2 0 0.5 0.1 0.7l-0.1 524.3z"
            p-id="4032"
            :fill="isDark ? '#fff' : '#303030'"
          ></path>
        </svg>
        <svg
          v-show="isShow"
          t="1657415474596"
          class="icon edit-article mg-l-15"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6686"
          width="20"
          height="20"
          @click="editArticle"
        >
          <path
            d="M0.09999 1024l98.590372-295.771116 565.644762-565.644761 197.180744 197.180744-565.644762 565.644761L0.09999 1024z m125.587736-225.877942L87.091495 914.310712l22.797774 22.797773 117.188555-37.596328m33.196759-11.398887l9.799043-4.39957 523.948833-523.948833L664.435114 229.977541l-523.948833 523.948833-2.599746 11.598868M882.313837 337.367054L686.732936 141.786154 828.4191 0.09999l195.5809 195.580901-141.686163 141.686163zM754.226345 141.786154L882.313837 269.973635l74.192754-74.192754L828.4191 67.593399l-74.192755 74.192755z"
            :fill="isDark ? '#fff' : '#303030'"
            p-id="6687"
          ></path>
          <path
            d="M183.213108 766.736123L644.127097 305.823134l33.724707 33.725707L216.938815 800.46183z"
            :fill="isDark ? '#fff' : '#303030'"
            p-id="6688"
          ></path>
        </svg>
      </div>
    </div>
    <div class="head pd-bt-15">
      <p class="font-18" :style="{ color: isDark ? '#fff' : '#222' }">
        {{ title }}
      </p>
      <div>
        <!-- 1 -->
      </div>
    </div>
    <div class="content mg-t-15">
      <el-row :gutter="20">
        <el-col :md="24">
          <div class="readbox h-100 box-shadow-1">
            <md-editor
              @on-getCatalog="getCatalog"
              previewOnly
              :theme="isDark ? 'dark' : 'light'"
              v-model="value"
              ref="editor"
            >
              <!-- :pageFullScreen="true" -->
            </md-editor>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="photoDrawer">
      <el-drawer
        v-model="drawer"
        :direction="direction"
        :before-close="handleClose"
        title="目录"
        size="60%"
      >
        <div class="catalogue">
          <div class="catalogue-content">
            <div v-for="(item, index) in catalogList" :key="index">
              <p
                v-show="item.level == 1"
                class="font-line-1"
                style="margin-top: 15px"
                @click="toHere(item.text)"
              >
                {{ item.text }}
              </p>

              <p
                v-show="item.level == 2"
                class="font-line-1"
                style="margin-left: 10px; margin-top: 10px"
                @click="toHere(item.text)"
              >
                {{ item.text }}
              </p>

              <p
                v-show="item.level == 3"
                class="font-line-1"
                style="margin-left: 20px; margin-top: 10px"
                @click="toHere(item.text)"
              >
                {{ item.text }}
              </p>

              <p
                v-show="item.level == 4"
                class="font-line-1"
                style="margin-left: 25px; margin-top: 10px"
                @click="toHere(item.text)"
              >
                {{ item.text }}
              </p>

              <p
                v-show="item.level == 5"
                class="font-line-1"
                style="margin-left: 30px; margin-top: 10px"
                @click="toHere(item.text)"
              >
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </el-drawer>
    </div>
    <teleport to="#app">
      <div :class="isDark ? 'bright-theme' : ''"></div>
    </teleport>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  provide,
  getCurrentInstance,
  onMounted,
  computed,
} from "vue";
import { useStore } from "vuex";
import { onBeforeRouteLeave, useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    /*加载数据*/
    const value = ref("");
    const title = ref("");
    const editor = ref(null);
    const catalogList = ref([]);
    const getCatalog = (list) => {
      catalogList.value = list;
    };
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const router = useRouter();
    //2.接收state
    const store = useStore();
    const isShow = computed(() => store.state.permissions.isShow);
    const isDark = computed(() => store.state.theme.isDark);
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
    onMounted(()=>{
      loadData();
    })

    /*
   点击目录
    */
    const toHere = (here) => {
      document.getElementById(here).scrollIntoView();
    };
    /*抽屉*/
    const drawer = ref(false);
    const direction = ref("rtl");
    const handleClose = () => {
      drawer.value = false;
    };
    /*
    跳转到编辑页面editArticle
    */
    const editArticle = () => {
      router.push({
        path: "/AddArchive",
        query: {
          _id: route.query._id,
        },
      });
    };
    onMounted(() => {
      // console.log(editor.value);
    });
    // 路由守卫
    onBeforeRouteLeave((to, from, next) => {
      // console.log(to);
      if (to.hasOwnProperty("meta") && to.meta.hasOwnProperty("title")) {
        next();
      }
    });
    return {
      value,
      getCatalog,
      route,
      title,
      toHere,
      catalogList,
      drawer,
      direction,
      handleClose,
      editArticle,
      editor,
      isShow,
      isDark,
    };
  },
});
</script>

<style scoped lang="less">
.bright-theme {
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  background: #121212e3;
  z-index: -1;
  bottom: 0;
}
.breadcrumb {
  height: 3%;
  position: sticky;
  top: 0%;
  z-index: 999;
  background: #fff;
}
.catalogue-content {
  color: #222;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.readbox {
  /deep/#md-editor-v3 {
    padding: 15px;
    border-radius: 8px;
  }
}
.line {
  width: 100%;
  padding-bottom: 1px;
  background: #cecece;
  margin: 15px auto 0px auto;
}
.photoDrawer {
  display: block;
}
/deep/.el-drawer__header {
  margin-bottom: 0px;
}
.noShow {
  position: fixed;
  width: 24%;
  right: 5%;
  background: #ffffff;
  top: 8%;
  bottom: 1%;
  border: 1px solid #2c0e0e1a;
  border-radius: 12px;
  .catalogue-content {
    height: 100%;
    overflow-y: scroll;
  }
}
</style>
