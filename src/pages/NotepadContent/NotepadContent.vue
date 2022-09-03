<template>
  <div class="notepad-main w-90 mg-t-15">
    <el-row :gutter="20">
      <el-col :md="17">
        <div class="content">
          <div class="top flex-h" v-if="queryIdNotePadList.head_portrait">
            <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
            <el-upload
              class="avatar-uploader"
              action="/api/uploadPicture"
              accept="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <div class="left">
                <div class="pos-real">
                  <img :src="queryIdNotePadList.head_portrait" alt="" />

                  <div class="text pos-abs">
                    <p>上传头像</p>
                  </div>
                </div>
              </div>
            </el-upload>

            <div class="center mg-l-20">
              <div>
                <h1>{{ queryIdNotePadList.name }}</h1>
              </div>
              <div class="flex-h">
                <span style="font-weight: bold">简介: </span>
                <p class="font-line-1" style="margin-left: 5px; width: 70%">
                  {{ queryIdNotePadList.detailed }}
                </p>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="center mg-t-15">
            <el-row :gutter="30">
              <el-col
                :md="12"
                :xs="24"
                :sm="12"
                v-for="(item, index) in querySortidArticleList"
                :key="item.aid"
              >
                <div @click="toPage(item.aid)" class="w-100 mg-b-30">
                  <div class="notepad-view pos-real">
                    <!-- <img
                      class="w-100"
                      :src="'http://source.unsplash.com/random/' + index + '?scenery'"
                      alt=""
                    /> -->
                    <!-- /api/public/image/data.0-1660372730018.png -->
                    <img
                      class="w-100"
                      src="/api/public/image/data.0-1660372730018.png"
                      alt=""
                    />
                    <div class="nv-content pos-abs">
                      <p class="font-line-1">{{ item.title }}</p>
                      <div class="mg-t-15">
                        {{ dayjs(item.addtime).format("YYYY-MM-DD HH:mm") }}
                      </div>
                      <div class="flex-h mg-t-15 align-center count">
                        <div class="flex-h align-center">
                          <svg
                            t="1661672512836"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="3527"
                            width="20"
                            height="20"
                          >
                            <path
                              d="M910.001131 462.105636c-50.550303-78.533634-113.946168-137.2622-190.178387-176.187745 20.315698 34.624589 30.472012 72.059176 30.472012 112.305809 0 61.540611-21.8701 114.200972-65.608254 157.982104-43.73713 43.781132-96.398514 65.650209-157.981081 65.606207-61.582567-0.041956-114.243951-21.910009-157.981081-65.606207-43.738154-43.695175-65.60723-96.356558-65.60723-157.982104 0-40.245609 10.158361-77.68122 30.470989-112.305809-76.190263 38.925544-139.583059 97.655134-190.178387 176.187745 44.249807 68.225871 99.719142 122.54808 166.414147 162.964582 66.692958 40.415478 138.985448 60.623729 216.879516 60.623729s150.187581-20.208251 216.880539-60.623729C810.280966 584.653717 865.752348 530.331507 910.001131 462.105636L910.001131 462.105636zM550.662043 270.458805c0-6.643304-2.321882-12.307304-6.962575-16.991999-4.641717-4.684696-10.30674-7.005554-16.991999-6.963599-41.608653 0-77.298504 14.885012-107.067504 44.654013-29.770024 29.769001-44.654013 65.457828-44.654013 107.066481 0 6.644327 2.320858 12.307304 6.963599 16.993023 4.64274 4.683672 10.30674 7.007601 16.991999 6.964622s12.349259-2.366907 16.991999-6.964622c4.641717-4.599761 6.963599-10.264784 6.963599-16.993023 0-28.619828 10.158361-53.064566 30.472012-73.337285s44.760436-30.429033 73.337285-30.472012c6.643304 0 12.308327-2.320858 16.991999-6.962575C548.385187 282.809087 550.705022 277.145088 550.662043 270.458805zM973.885114 462.105636c0 11.328-3.321652 22.805402-9.965979 34.431184-46.591131 76.531024-109.216447 137.837298-187.877995 183.9178-78.661547 46.079478-161.750941 69.121264-249.27125 69.12024-87.518263 0-170.609703-23.125697-249.269203-69.376067C198.841186 633.95047 136.214846 572.730153 89.623715 496.538867c-6.644327-11.626805-9.965979-23.104207-9.965979-34.432207s3.321652-22.805402 9.965979-34.432207c46.591131-76.191286 109.217471-137.411603 187.879018-183.661973 78.659501-46.251394 161.749918-69.376067 249.269203-69.376067s170.609703 23.125697 249.27125 69.376067c78.659501 46.25037 141.284817 107.470687 187.877995 183.661973C970.563462 439.300234 973.885114 450.777637 973.885114 462.105636z"
                              p-id="3528"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                        <div>{{ item.click_count }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :md="7">
        <side></side>
      </el-col>
    </el-row>
  </div>
  <!-- <teleport to="body">
    <drag></drag>
  </teleport> -->
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  provide,
  getCurrentInstance,
  onMounted,
} from "vue";
import { onBeforeRouteLeave, useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const querySortidArticleList = ref([]);
    const queryIdNotePadList = ref([]);
    const route = useRoute();
    const router = useRouter();
    const sortid = ref("");
    sortid.value = route.query._id;
    console.log("sortid.value", sortid.value);
    const dayjs = proxy.$day;
    const loadData = async () => {
      try {
        //获取文章数据
        let querySortidArticle = proxy.$api.querySortidArticle({
          sortid: sortid.value,
        });
        //获取笔记本数据
        let queryIdNotePad = proxy.$api.queryIdNotePad({
          sortid: sortid.value,
        });
        let [querySortidArticleRes, queryIdNotePadRes] = await Promise.all([
          querySortidArticle,
          queryIdNotePad,
        ]);
        if (querySortidArticleRes) {
          querySortidArticleList.value = querySortidArticleRes.data.params.reverse();
        }
        if (queryIdNotePadRes) {
          queryIdNotePadList.value = queryIdNotePadRes.data[0];
        }
        console.log("queryIdNotePadRes", queryIdNotePadRes);
      } catch (error) {
        console.error(error);
      }
    };
    const toPage = (id) => {
      router.push({
        path: "/ViewArticles",
        query: {
          _id: id,
        },
      });
    };
    //上传头像
    const handleAvatarSuccess = async (response, file, fileList) => {
      if (response) {
        for (let key in queryIdNotePadList.value) {
          if (key == "head_portrait") {
            queryIdNotePadList.value[
              key
            ] = `/api/public/image/${response.data[0].filename}`;
          }
        }
        let head_portrait = `/api/public/image/${response.data[0].filename}`;
        //更新数据库头像
       await  proxy.$api.updataNotepadAvatar({
          sortid: sortid.value,
          head_portrait,
        });
      }
    };
    const beforeAvatarUpload = async (file) => {
      try {
        for (let key in queryIdNotePadList.value) {
          if (key == "head_portrait") {
            //删除当前头像 deleteFile
            let idx = queryIdNotePadList.value[key].split("/").length - 1;
            let fileName = queryIdNotePadList.value[key].split("/")[idx];
            console.log('fileName',fileName)
            if (fileName.length) {
              await proxy.$api.deleteFile({
                fileName:fileName,
              });
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    onMounted(() => {
      loadData();
    });

    return {
      dayjs,
      querySortidArticleList,
      queryIdNotePadList,
      toPage,
      handleAvatarSuccess,
      beforeAvatarUpload,
    };
  },
});
</script>

<style scoped lang="less">
.notepad-main {
  .top {
    align-items: flex-end;
    .left {
      > div {
        &:nth-child(1) {
          width: 90px;
          height: 90px;
          transition: 0.3s ease;
          &:hover {
            transform: rotateY(180deg);
            > img {
              transition: 0.2s ease;
              opacity: 0;
            }
            ~ div {
              opacity: 0;
            }
          }
          .text {
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
            background-color: #ced7da;
            border-radius: 10px;
            text-align: center;
            line-height: 90px;
            transform: rotateY(180deg);
            color: #fff;
          }
          img {
            width: 100%;
            height: inherit;
            border-radius: 10px;
          }
        }
        &:nth-child(2) {
          width: 90px;
          font-size: 14px;
          text-align: center;
        }
      }
    }
    .center {
      display: flex;
      flex-direction: column;
      padding-bottom: 5px;
      width: 70%;
      > div {
        &:nth-child(1) {
          margin-bottom: 15px;
        }
      }
    }
    .right {
      align-items: flex-end;
      height: 90px;
      width: 20%;
      button {
        display: flex;
        overflow: hidden;
        padding: 12px 12px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: all 150ms linear;
        text-align: center;
        white-space: nowrap;
        text-decoration: none !important;
        text-transform: none;
        text-transform: capitalize;
        color: #fff;
        border: 0 none;
        border-radius: var(--borderRadius);
        font-size: 13px;
        font-weight: 500;
        line-height: 1.3;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        justify-content: center;
        align-items: center;
        color: #202129;
        background-color: #f2f2f2;
        width: 80%;
        height: 45px;
        border-radius: 10px;
        &:hover {
          color: #202129;
          background-color: #e1e2e2;
          transition: all 150ms linear;
          opacity: 1;
          box-shadow: 2px 5px 10px var(--color-smoke);
        }
      }
    }
  }
  .center {
    .notepad-view {
      img {
        height: 50vh;
      }
      .nv-content {
        left: 0;
        right: 0;
        top: 0;
        bottom: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 1s ease;
        color: #fff;
        cursor: pointer;
        transition: 0.2s ease;

        p {
          color: #fff;
          font-weight: 500;
          font-size: 26px;
        }
        &:hover {
          background: #20212967;
        }
      }
    }
  }
}
.line {
  width: 100%;
  padding-bottom: 3px;
  background: #e6e6e6;
  margin-top: 15px;
}
</style>
