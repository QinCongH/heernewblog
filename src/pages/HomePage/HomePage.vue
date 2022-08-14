<template>
  <div class="HomePage w-90 mg-t-15">
    <el-row :gutter="20">
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
                :md="12"
                v-for="(item, index) in pagArticleList"
                :key="item.aid"
              >
                <div class="note box-shadow-1 pd-15 mg-b-30">
                  <dl>
                    <dt>
                      <h2 class="font-line-1 lh-35">
                        {{ item.title }}
                      </h2>
                      <div class="line"></div>
                    </dt>
                    <dd class="mg-t-15">
                      <!-- :pageFullScreen="true"         previewOnly -->
                      <!-- <md-editor theme="light" previewOnly v-model="item.content">
                      </md-editor> -->
                      <p class="font-line-3 lh-25">
                        {{ item.content }}
                      </p>
                    </dd>
                    <dd class="flex-h mg-t-15 justify-between">
                      <p>{{ item.name }}</p>
                      <p>
                        {{ dayjs(item.addtime).format("YYYY-MM-DD HH:mm") }}
                        <!-- <span >
                          <svg
                            t="1660459761215"
                            class="icon mg-l-15"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="3052"
                            width="15"
                            height="15"
                          >
                            <path
                              d="M997 435.6c-28.2-36.7-65.4-81.4-107.4-122.2-54.6-53.2-110.5-95.6-166.1-126.3-71.2-39.2-142-59.1-210.7-59.1s-139.6 19.9-210.7 59.1c-55.5 30.7-111.4 73.1-166.1 126.3-42 40.8-79.3 85.5-107.5 122.1-34.8 45.3-34.8 107.8 0 153.1 28.2 36.7 65.4 81.4 107.4 122.2C190.5 764 246.5 806.4 302 837.1c71.2 39.2 142.1 59.1 210.7 59.1 68.7 0 139.6-19.9 210.8-59 55.5-30.7 111.4-73.1 166.1-126.3 42-40.8 79.3-85.6 107.4-122.2 34.8-45.3 34.8-107.8 0-153.1z m-37.3 99c-66.2 89-243.8 299-446.8 299-57.5 0-117.7-17.1-179-50.8-50.5-27.7-101.7-66.6-152.2-115.6-51.1-49.5-91-99.5-115.7-132.6-10-13.5-10-31.6 0-44.9 66.1-89 243.7-299 446.8-299 57.5 0 117.6 17.1 179 50.8 50.5 27.7 101.7 66.6 152.2 115.6 51.1 49.5 91 99.5 115.7 132.6 9.9 13.4 9.9 31.6 0 44.9z"
                              p-id="3053"
                              fill="#ffffff"
                            ></path>
                            <path
                              d="M512 321.7c-105.7 0-191.6 86-191.6 191.6 0 105.7 86 191.6 191.6 191.6s191.6-86 191.6-191.6c0-105.7-86-191.6-191.6-191.6z m0 319.2c-70.3 0-127.6-57.2-127.6-127.6S441.7 385.7 512 385.7s127.6 57.2 127.6 127.6S582.3 640.9 512 640.9z"
                              p-id="3054"
                              fill="#ffffff"
                            ></path>
                          </svg>
                          <span>
                            {{ item.click_count }}
                          </span>
                        </span> -->
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
        <side></side>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { defineComponent, ref,provide, getCurrentInstance } from "vue";
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
    const newArticleList = ref([]);
    const loadMore = async () => {
      //分页数据
      let pagArticleRes = await proxy.$api.queryPagArticle({
        pageSize: pageSize.value,
        page: page.value,
      });
      if (pagArticleRes) {
        pagArticleList.value = pagArticleRes.data.params;
        console.log(111);
        total.value = pagArticleRes.data.total;
      }
      //记事本数据
      let notePadeNameRes = await proxy.$api.queryNotePadeName();
      if (notePadeNameRes) {
        notePadeNameList.value = notePadeNameRes.data.data;
        console.log(notePadeNameList.value);
      }
      pagArticleList.value.forEach((el) => {
        let obj = {
          title: el.title,
          aid: el.aid,
        };
        newArticleList.value.push(obj);
        notePadeNameList.value.forEach((val) => {
          if (el.sortid == val.sortid) {
            el.name = val.name;
          }
        });
      });
    };
    provide('sendNewArticleList',newArticleList.value)
    console.log(newArticleList.value);
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
      console.log(val);
      page.value = val;
      loadMore();
    };
    /*
    3.日期格式化
    */
    const dayjs = proxy.$day;
    console.log(dayjs());
    return {
      pageSize,
      page,
      total,
      pagArticleList,
      loadMore,
      loadData,
      changePag,
      dayjs,
      newArticleList,
    };
  },
});
</script>

<style lang="less" scoped>
.note-main {
  .note {
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
