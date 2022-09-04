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
          <el-button @click="dialogTableVisible = true">创建新本</el-button>
        </div>
        <div class="saveNote mg-l-10">
          <el-button @click="onSaveData(value)"
            >{{ isEdit ? "更新" : "添加" }}笔记</el-button
          >
        </div>
        <div class="deleteNote mg-l-10">
          <el-button @click="onDeleteData()">删除笔记</el-button>
        </div>
      </div>
    </div>
    <!-- 提示 -->
    <msg-alert :msg="msg" :isMsgAlert="isMsgState"></msg-alert>
    <!-- 创建记事本 -->
    <add-notepad-dialog
      @closeDialog="closeDialog"
      :dialogTableVisible="dialogTableVisible"
    ></add-notepad-dialog>
  </div>
</template>

<script>
import { getCurrentInstance, ref, defineComponent, reactive, onMounted, h } from "vue";
import { onBeforeRouteLeave, useRouter, useRoute } from "vue-router";

import MarkdownIt from "markdown-it";
export default defineComponent({

  setup() {
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    const md = new MarkdownIt();
    const delImgList = ref([]); //点击删除时使用
    const delNotePad = reactive({
      path: "",
      num: 0,
    });
    /*
    0.是否编辑
    */
    const route = useRoute();
    const isEdit = ref(false);
    const queryIdArticleList = ref([]);
    const _id = route.query?._id;
    if (_id?.length) {
      isEdit.value = true;
    }
    /*
      1.加载记事本数据
    */
    const notePadeNameList = ref([]);
    const loadData = async () => {
      try {
        let notePadeNamRes = await proxy.$api.queryNotePadeName();
        if (notePadeNamRes) {
          notePadeNameList.value = notePadeNamRes.data.data;
        }
        if (isEdit.value) {
          //得到编辑的数据
          let queryIdArticleRes = await proxy.$api.queryIdArticle({
            aid: route.query?._id,
          });
          if (queryIdArticleRes) {
            queryIdArticleList.value = queryIdArticleRes.data.params;
            console.log("queryIdArticleRes", queryIdArticleList.value);
            contentTitle.value = queryIdArticleList.value.title;
            value.value = queryIdArticleList.value.content;
            isShow.value = queryIdArticleList.value.is_show;
            isTop.value = queryIdArticleList.value.is_top;
            notePadeNameList.value.forEach((el) => {
              if (el.sortid == queryIdArticleList.value.sortid) {
                notePadValue.value = el.sortid;
              }
            });
            //得到删除的图片列表。如果点击删除执行
            let htmlCode = md.render(value.value);
            delImgList.value = getExecStrs(htmlCode);
          }
        }
        console.log(notePadeNameList.value);
      } catch (error) {
        throw error;
      }
    };
    onMounted(() => {
      loadData();
    });
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

    //3-1获取图片列表（根据html代码拿到img的src标签内容）
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
    //5.1.信息提示方法
    const msg = ref("");
    const isMsgState = ref(false);
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
      const add = async (v) => {
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

      const edit = async (v) => {
        let editArticleList = {
          is_show: isShow.value,
          is_top: isTop.value,
          title: contentTitle.value,
          sortid: notePadValue.value,
          content: v,
          aid: route.query?._id,
        };
        let editArticleRes = await proxy.$api.editArticle({
          editArticleList,
        });
        if (editArticleRes) {
          sendMsg("更新成功( =•ω•= )m");
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
      if (isEdit.value) {
        edit(v);
      } else {
        add(v);
      }
    };
    /*
        6. 路由守卫
    */
    onBeforeRouteLeave(async (to, from, next) => {
      if ((to.fullPath = "/HomePage")) {
        //删除笔记本没创建的头像
        if (delNotePad.num == 1) {
          ///上传了图片，没点击创建，此时删除图片
          let imageUrl = delNotePad.path;
          let idx = imageUrl.split("/").length - 1;
          let fileName = imageUrl.split("/")[idx];
          await proxy.$api.deleteFile({
            fileName,
          });
        }
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
    /*
7.删除笔记
 */
    const onDeleteData = async () => {
      //如果删除时有图片列表，执行删除图片
      if (delImgList.value.length) {
        let delImgListRes = await proxy.$api.deleteAllFile({
          deleteList: delImgList.value,
        });
        if (!delImgListRes) {
          sendMsg("删除图片接口出问题了( TωT= )m");
          return;
        }
        console.log("删除图片结果", delImgListRes);
      }
      //执行删除
      let deleteArticleRes = await proxy.$api.deleteArticle({
        aid: route.query?._id,
      });
      if (deleteArticleRes) {
        sendMsg("删除成功( =•ω•= )m");
        saveState.value = false;
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
    创建记事本
    */
    const dialogTableVisible = ref(false);
    const closeDialog = async (obj) => {
      dialogTableVisible.value = false;
      delNotePad.path = obj.path;
      delNotePad.num = obj.num;
      if (delNotePad.num == 2) {
        loadData();
      }
    };
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
      isEdit,
      onDeleteData,
      getExecStrs,
      md,
      delImgList,
      dialogTableVisible,
      closeDialog,
      delNotePad,
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
