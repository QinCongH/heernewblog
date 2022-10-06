<template>
  <div class="notepad-main w-90 mg-t-15">
    <el-row :gutter="20">
      <el-col :md="17">
        <div class="content">
          <div class="top flex-h" v-show="queryIdNotePadList.head_portrait">
            <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
            <el-upload
              :disabled="!isShow"
              class="avatar-uploader"
              action="/api/uploadPicture"
              accept="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <div class="left" :class="isShow ? 'is-hover' : ''">
                <div class="pos-real">
                  <img :src="queryIdNotePadList.head_portrait" alt="" />

                  <div class="text pos-abs flex-h">
                    <svg
                      t="1662257148267"
                      class="icon mg-auto"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1397"
                      width="30"
                      height="30"
                    >
                      <path
                        d="M518.3 459c-3.2-4.1-9.4-4.1-12.6 0l-112 141.7c-4.1 5.2-0.4 12.9 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"
                        p-id="1398"
                        fill="#ffffff"
                      ></path>
                      <path
                        d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6 0.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4 14.9-19.2 32.6-35.9 52.4-49.9 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7-23.4 23.4-54.5 36.3-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"
                        p-id="1399"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </el-upload>

            <div class="center mg-l-20">
              <div class="flex-h">
                <h1>{{ queryIdNotePadList.name }}</h1>
                <svg
                  v-show="isShow"
                  @click="dialogTableVisible = true"
                  t="1662262321535"
                  class="icon mg-l-15"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="7159"
                  width="20"
                  height="20"
                >
                  <path
                    d="M799.306 313.723v20.48h154.167v618.844h-882.098v-618.844h233.189v-20.48h-253.669v659.804h923.058v-659.804z"
                    fill=""
                    p-id="7160"
                  ></path>
                  <path
                    d="M339.333 880.513h45.173v45.173h-45.173v-45.173z"
                    fill=""
                    p-id="7161"
                  ></path>
                  <path
                    d="M640.119 880.513h45.394v45.173h-45.394v-45.173z"
                    fill=""
                    p-id="7162"
                  ></path>
                  <path
                    d="M489.837 880.513h45.173v45.173h-45.173v-45.173z"
                    fill=""
                    p-id="7163"
                  ></path>
                  <path
                    d="M293.186 582.762c-1.417 1.876-3.299 5.628-5.659 11.258-2.355 5.159-32.893 66.118-70.724 180.115-3.299 15.479-5.188 28.142-5.659 37.99 31.885-39.688 115.452-199.588 126.433-211.38 32.426-34.816 203.776-308.566 241.349-334.59-17.093 47.567-232.454 395.172-237.642 403.149 162.181 35.549 232.452-55.351 241.883-63.324l-71.436-12.667 86.995-26.030c57.315-58.356 72.847-149.86 72.847-149.86-6.603 2.343-75.911 22.749-87.702 26.032l94.775-51.36c6.599-25.799 56.584-142.582 58.704-331.383-25.463 1.878-283.72 77.869-445.583 505.162-1.411 8.446-0.94 14.074 1.417 16.888z"
                    fill=""
                    p-id="7164"
                  ></path>
                </svg>
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
    <!-- 创建记事本 -->
    <add-notepad-dialog
      @closeDialog="closeDialog"
      :dialogTableVisible="dialogTableVisible"
      :sortid="sortid"
    ></add-notepad-dialog>
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
import { Plus } from "@element-plus/icons-vue";
export default defineComponent({
  components: { Plus },
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
    //2.接收state
    const store = useStore();
    const isShow = computed(() => store.state.permissions.isShow);
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
        await proxy.$api.updataNotepadAvatar({
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
            console.log("fileName", fileName);
            if (fileName.length) {
              await proxy.$api.deleteFile({
                fileName: fileName,
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
    /*
    创建记事本
    */
    const dialogTableVisible = ref(false);
    const delNotePad = reactive({
      path: "",
      num: 0,
    });
    const closeDialog = async (obj) => {
      dialogTableVisible.value = false;
      delNotePad.path = obj.path;
      delNotePad.num = obj.num;
      if (delNotePad.num == 2) {
        loadData();
      }
    };
    return {
      dayjs,
      querySortidArticleList,
      queryIdNotePadList,
      toPage,
      handleAvatarSuccess,
      beforeAvatarUpload,
      dialogTableVisible,
      closeDialog,
      delNotePad,
      sortid,
      isShow,
    };
  },
});
</script>

<style scoped lang="less">
[v-clock] {
  display: none;
}
/deep/.avatar-uploader .el-upload {
  border: none;
}
.notepad-main {
  .top {
    align-items: flex-end;
    .left {
      > div {
        &:nth-child(1) {
          width: 90px;
          height: 90px;
          transition: 0.3s ease;
          .text {
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
            background-color: #8e8e8e33;
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
    .is-hover {
      > div {
        &:nth-child(1) {
     
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
