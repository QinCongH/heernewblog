<template>
  <div class="add-archive h-100 flex-v w-90">
    <div class="breadcrumb pd-bt-10 border-b-eee">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/HomePage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="javascript:;">写笔记</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="add-content flex-1 mg-t-15">
      <div class="add-header">
        <input
          type="text"
          class="w-100 border-b-eee pd-b-5 text-bold font-25"
          placeholder="标题"
          v-model="contentTitle"
        />
      </div>
      <div class="mg-t-15 h-80">
        <!-- :pageFullScreen="true"         previewOnly -->
        <md-editor
          @on-html-changed="getHtmlValue"
          @on-upload-img="onUploadImg"
          @on-save="onSaveData"
          theme="light"
          :toolbars="toolbarList"
          v-model="value"
        >
        </md-editor>
      </div>
      <div class="add-footer flex-h justify-flex-end align-center flex-wrap mg-t-15">
        <!-- 是否置顶 -->
        <div class="is-top flex-h align-center">
          <div>
            <p class="white-space font-13">
              {{ isTop ? "置顶" : "默认排序" }}
            </p>
          </div>
          <div class="mg-l-10">
            <el-switch
              v-model="isTop"
              class="ml-2"
              style="--el-switch-on-color: #000000; --el-switch-off-color: #b7b7b7"
            />
          </div>
        </div>
        <!-- 是否显示 -->
        <div class="is-show flex-h align-center mg-l-10">
          <div>
            <p class="white-space font-13">
              {{ isShow ? "隐藏" : "默认显示" }}
            </p>
          </div>
          <div class="mg-l-10">
            <el-switch
              v-model="isShow"
              class="ml-2"
              style="--el-switch-on-color: #000000; --el-switch-off-color: #b7b7b7"
            />
          </div>
        </div>
        <div class="filterable mg-l-10">
          <el-select
            v-model="notePadValue"
            default-first-option
            :reserve-keyword="false"
            placeholder="选择记事本"
          >
            <el-option
              v-for="item in notePadeNameList"
              :key="item.sortid"
              :label="item.name"
              :value="item.sortid"
            />
          </el-select>
        </div>
        <div class="createNotepad mg-l-10">
          <el-button>创建新本</el-button>
        </div>
        <div class="saveNote mg-l-10">
          <el-button @click="onSaveData(value)">保存笔记</el-button>
        </div>
      </div>
    </div>
    <!-- 提示 -->
    <msg-alert :msg="msg" :isMsgAlert="isMsgState"></msg-alert>
  </div>
</template>

<script>
import { getCurrentInstance, ref, defineComponent, reactive, onMounted, h } from "vue";
import { onBeforeRouteLeave, useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    /*
      1.加载记事本数据
    */
    const notePadeNameList = ref([]);
    const loadData = async () => {
      try {
        let res = await proxy.$api.queryNotePadeName();
        if (res) {
          notePadeNameList.value = res.data.data;
        }
        console.log(notePadeNameList.value);
      } catch (error) {
        throw error;
      }
    };
    loadData();
    //1.1.获取记事本
    const notePadValue = ref([]);
    const options = [
      {
        value: "HTML",
        label: "HTML",
      },
      {
        value: "CSS",
        label: "CSS",
      },
      {
        value: "JavaScript",
        label: "JavaScript",
      },
    ];
    /*2.创建遍编辑器数据*/
    const value = ref("");
    const contentTitle = ref("");
    const toolbarList = [
      "bold",
      "underline",
      "italic",
      "-",
      "title",
      "strikeThrough",
      "sub",
      "sup",
      "quote",
      "unorderedList",
      "orderedList",
      "-",
      "codeRow",
      "code",
      "link",
      "image",
      "table",
      "mermaid",
      "katex",
      "-",
      "revoke",
      "next",
      "save",
      "=",
      "pageFullscreen",
      "fullscreen",
      "preview",
      "htmlPreview",
      "catalog",
    ];
    /*3.拿到富文本代码，以及删除的列表*/
    const deleteList = ref([]);
    const getHtmlValue = (v) => {
      //3-1.删除文章中没有用到的图片
      let presentImgList = getExecStrs(v);
      //3-2.拿到应该删除的列表
      deleteList.value = presentImgList
        .concat(uploadImgList)
        .filter(function (v, i, arr) {
          return arr.indexOf(v) === arr.lastIndexOf(v);
        });
    };

    //3-1获取图片列表（根据富文本拿到img的src标签内容）
    const getExecStrs = (content) => {
      //方法1.
      let data = [];
      content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, function (match, capture) {
        let index = capture.lastIndexOf("/");
        capture = capture.substring(index + 1);
        data.push(capture);
      });
      return data;
    };
    /*4.上传图片 proxy.$api.uploadFiles(form);*/
    const uploadImgList = reactive([]);
    const onUploadImg = async (files, callback) => {
      const form = new FormData();
      form.append("files", files);
      let res = await proxy.$api.uploadFiles(files);
      if (res) {
        res.data.data.map((item) => console.log(item));
      }
      callback(
        res.data.data.map((item) => {
          // http://localhost:3001
          uploadImgList.push(item.filename);
          return `/api/public/image/${item.filename}`;
        })
      );
    };

    /*
      5.保存
    */
    const isShow = ref(0); //0 显示 1隐藏
    const isTop = ref(0); //1置顶 0默认
    const saveState = ref(false); //保存状态
    const msg = ref("");
    const isMsgState = ref(false);
    //5.1.信息提示方法
    const sendMsg = (v) => {
      if (v.length) {
        msg.value = v;
        isMsgState.value = true;
        setTimeout(() => {
          isMsgState.value = false;
        }, 1000);
      }
    };
    //5.2 删除图片方法
    const deleteImage = async () => {
      let sendDeleteList;
      if (!saveState.value) {
        sendDeleteList = uploadImgList;
      } else {
        sendDeleteList = deleteList.value;
      }
      let deleteListRes = await proxy.$api.deleteAllFile({
        deleteList: sendDeleteList,
      });
      return deleteListRes;
    };
    //5.3. 执行保存
    const onSaveData = async (v) => {
      if (!contentTitle.value.length) {
        sendMsg("标题丢了。。(；′⌒`)");
        return;
      }
      if (!v.length) {
        sendMsg("写点什么吧(*/ω＼*)");
        return;
      }
      if (!notePadValue.value.length) {
        sendMsg("忘记选记事本啦( =•ω•= )m");
        return;
      }
      //2.删除没有用到的服务器照片
      if (deleteList.value.length) {
        let deleteListRes = await deleteImage();
        if (!deleteListRes) {
          sendMsg("删除图片接口出问题了( TωT= )m");
          return;
        }
        console.log("删除图片结果", deleteListRes);
      }
      // 3.上传
      let addArticleList = {
        addtime: Date.now(),
        is_show: !isShow.value,
        is_top: isTop.value,
        title: contentTitle.value,
        sortid: notePadValue.value,
        click_count: 0,
        content: v,
      };
      let addArticleRes = await proxy.$api.addArticle({
        addArticleList,
      });
      if (addArticleRes) {
        sendMsg("保存成功( =•ω•= )m");
        saveState.value = true;
        setTimeout(() => {
          router.push({
            path: "/HomePage",
            query: {
              saveState: saveState.value,
            },
          });
        }, 1000);
      }
    };
    /*
        6. 路由守卫
    */
    onBeforeRouteLeave(async (to, from, next) => {
      if ((to.fullPath = "/HomePage")) {
        if (saveState.value || !Object.keys(uploadImgList).length) {
          next();
        } else {
          if (deleteList.value.length || Object.keys(uploadImgList).length) {
            let deleteListRes = await deleteImage();
            if (!deleteListRes) {
              sendMsg("删除图片接口出问题了( TωT= )m");
              return;
            }
            console.log("删除图片结果", deleteListRes);
          }
          next();
          return;
        }
      }
    });
    return {
      value,
      toolbarList,
      getHtmlValue,
      onUploadImg,
      uploadImgList,
      isShow,
      isTop,
      loadData,
      notePadeNameList,
      notePadValue,
      options,
      onSaveData,
      contentTitle,
      msg,
      isMsgState,
      deleteList,
      router,
    };
  },
});
</script>

<style lang="less" scoped>
.add-archive {
  height: 100vh;
  .breadcrumb {
    height: 3%;
  }
  /deep/#md-editor-v3 {
    height: 100%;
  }
}
</style>
