<template>
  <div class="HomePage w-90 mg-t-15">
    <el-row :gutter="30">
      <el-col :md="17">
        <div class="content">
          <!-- 轮播图 -->
          <div class="swiper">
            <el-carousel height="262px" :interval="10000" indicator-position="outside">
              <el-carousel-item v-for="item in 4" :key="item">
                <img
                  src="https://images.unsplash.com/photo-1657403538510-1b324c4c1c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80"
                  alt=""
                />
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 内容 -->
          <div class="note-main">
            <el-row :gutter="30">
              <el-col
                :sm="12"
                :md="8"
                v-for="(item, index) in pagArticleList"
                :key="item.aid"
              >
                <div
                  @click="toPage({ path: '/ViewArticles', _id: item.aid })"
                  class="note box-shadow-1 mg-b-30 w-100 overflow-hidden"
                >
                  <dl class="pd-10">
                    <dt>
                      <h2 class="font-line-1 lh-35">
                        {{ item.title }}
                      </h2>
                      <div class="line"></div>
                    </dt>
                    <dd class="note-view" v-show="item.content">
                      <p v-html="toText(md.render(item.content))"></p>
                    </dd>
                    <dd class="flex-h mg-t-15 justify-between">
                      <p>{{ item.name }}</p>
                      <p>
                        {{ dayjs(item.addtime).format("YYYY-MM-DD HH:mm") }}
                      </p>
                    </dd>
                  </dl>
                </div>
              </el-col>
            </el-row>
            <!-- 分页 -->
            <div class="pagination flex-h justify-center">
              <el-pagination
                :background="false"
                layout="prev, pager, next"
                :total="total"
                @current-change="changePag"
                small
                :page-size="pageSize"
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :md="7">
        <side @toLogin="toLogin"></side>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { defineComponent, ref, provide,onMounted, getCurrentInstance,computed } from "vue";
import { useRouter } from "vue-router";
import {useStore} from 'vuex'
import MarkdownIt from "markdown-it";
export default defineComponent({
  setup() {
    /*
    1.获取数据
    */
    const { proxy } = getCurrentInstance();
    const pageSize = ref(6);
    const page = ref(1);
    const total = ref(0);
    const pagArticleList = ref([]);
    const notePadeNameList = ref([]);

    const md = new MarkdownIt();
    const loadMore = async () => {
      //分页数据
      let pagArticleRes = await proxy.$api.queryPagArticle({
        pageSize: pageSize.value,
        page: page.value,
      });
      if (pagArticleRes) {
        pagArticleList.value = pagArticleRes.data.params;
        total.value = pagArticleRes.data.total;
      }
      //记事本数据
      let notePadeNameRes = await proxy.$api.queryNotePadeName();
      if (notePadeNameRes) {
        notePadeNameList.value = notePadeNameRes.data.data;
      }
      pagArticleList.value.forEach((el) => {
        notePadeNameList.value.forEach((val) => {
          if (el.sortid == val.sortid) {
            el.name = val.name;
          }
        });
      });
    };

    const loadData = async () => {
      try {
        await loadMore();
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
    /*
    2.分页
    */
    const changePag = (val) => {
      page.value = val;
      loadMore();
    };
    /*
    3.日期格式化
    */
    const dayjs = proxy.$day;
    /*
    页面跳转
    */
    const router = useRouter();
    const toPage = (obj) => {
      switch (obj.path) {
        case "/ViewArticles":
          router.push({
            path: obj.path,
            query: {
              _id: obj._id,
            },
          });
          break;

        default:
          break;
      }
    };
    const toText = (html) => {
      //将html代码转换未纯文本
      return html
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
    };
    /*
    跳转页面
    */
    //2.接收state
    /*
    1.permissions
    */
    const store = useStore();
    const isShow = computed(() => store.state.permissions.isShow);
    const toLogin = () => {
      if (!isShow.value) {
        router.push("/Login");
      }
    };
 
    return {
      pageSize,
      page,
      total,
      pagArticleList,
      loadMore,
      loadData,
      changePag,
      dayjs,
      toPage,
      router,
      md,
      toText,
      toLogin,
      isShow,
    };
  },
});
</script>

<style lang="less" scoped>
.note-main {
  .note {
    height: 240px;
    dl {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      dd {
        align-items: center;
        // p{
        //   width:40%;
        //   font-size: 10px;
        //   white-space: nowrap;
        // }
        &:nth-of-type(1) {
          height: 56%;
        }
        &:nth-of-type(2) {
          flex: 1;
        }
      }
      dt {
        height: 20%;
      }
    }
    .note-view {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        //当p标签中有数字使多行显示失效时：
        word-wrap: break-word;
        word-break: break-all;
        line-height: 25px;
      }

      /deep/img {
        // display: none;
      }
    }
    .line {
      width: 90%;
      background-color: #c4c4c4;
      height: 1px;
    }
  }
  .pagination {
    /deep/.el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
      background-color: #adb1b580;
    }
    /deep/.el-pagination.is-background .el-pager li:not(.is-disabled):hover {
      color: var(--el-color-white);
      font-weight: 700;
      background-color: #adb1b580;
    }
    /deep/.el-pagination.is-background .btn-next:hover:not([disabled]),
    .el-pagination.is-background .btn-prev:hover:not([disabled]) {
      color: #000;
    }
  }
}
</style>
