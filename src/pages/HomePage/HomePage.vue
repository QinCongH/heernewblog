

<template>
  <div class="HomePage w-90 mg-t-15">
    <el-row gutter="20">
      <el-col :md="16">
        <div class="content">
          <!-- 轮播图 -->
          <div class="swiper">
            <el-carousel
              height="262px"
              interval="10000"
              indicator-position="outside"
            >
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
            <el-row gutter="30">
              <el-col :sm="12" :md="12" v-for="(item, index) in 6" :key="index">
                <div class="note box-shadow-1 pd-15 mg-b-30">
                  <dl>
                    <dt>
                      <h2 class="font-line-1 lh-35">
                        标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
                      </h2>
                      <div class="line"></div>
                    </dt>
                    <dd class="mg-t-15">
                      <p class="font-line-3 lh-25">
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                      </p>
                    </dd>
                    <dd class="flex-h mg-t-15 justify-between">
                      <p>javascript</p>
                      <p>2022.07.10</p>
                    </dd>
                  </dl>
                </div>
              </el-col>
            </el-row>
            <!-- 分页 -->
            <div class="pagination flex-h justify-center">
              <el-pagination
                background="false"
                layout="prev, pager, next"
                :total="200"
                small
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :md="8">
        <div class="side">
          <div class="introduce box-shadow-1 pd-bt-15">
            <div class="introduce-main text-center">
              <div class="pic flex-h justify-center">
                <img
                  src="https://images.unsplash.com/photo-1657403538510-1b324c4c1c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80"
                  alt=""
                  class="border-50"
                />
              </div>
              <div class="myself mg-t-15">
                <p>web前端开发</p>
              </div>
            </div>
          </div>
          <clalendar></clalendar>
          <div class="article box-shadow-1 pd-15 mg-t-30">
              <div class="header text-center">
                <h2>
                  最新文章
                </h2>
              </div>
              <div class="content w-100">
                <div class="flex-h justify-between align-center mg-t-15" v-for="i in 6" key="i">
                    <div class="w-15">
                      <span>
                        {{i}}
                      </span>
                    </div>
                    <div  class="font-line-1">
                        <p class="font-line-1">
                          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                        </p>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {};
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
    /deep/.el-pagination.is-background
      .el-pager
      li:not(.is-disabled).is-active {
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
.side {
  .introduce {
    .introduce-main {
      .pic {
        img {
          width: 66px;
          height: 66px;
        }
      }
    }
  }
}
</style>