<template>
  <el-dialog
    @close="$emit('closeDialog', { path: imageUrl, num: isSuccess })"
    v-model="dialogTableVisible"
    @open="openDialog"
    :title="sortid.length ? '编辑笔记本' : '创建笔记本'"
  >
    <el-form
      :label-position="labelPosition"
      label-width=".8333rem"
      :model="formLabelAlign"
      style="max-width: 100%"
    >
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="简介">
        <el-input
          v-model="formLabelAlign.textarea"
          :rows="2"
          type="textarea"
          placeholder=""
        />
      </el-form-item>
      <el-form-item label="设置封面">
        <div>
          <el-upload
            class="avatar-uploader"
            action="/api/uploadPicture"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :on-remove="handleRemove"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item>
        <div class="w-100 flex-h justify-flex-end">
          <el-button type="primary" @click="creatNotePad">{{
            sortid.length ? "更新" : "创建"
          }}</el-button>
          <el-button type="danger" v-show="sortid.length" @click="deleteNotePad">
            删除
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
  <!-- 提示 -->
  <msg-alert :msg="msg" :isMsgAlert="isMsgState"></msg-alert>
</template>

<script>
import {
  ref,
  defineComponent,
  watch,
  defineEmits,
  toRefs,
  onMounted,
  reactive,
  getCurrentInstance,
} from "vue";
import { onBeforeRouteLeave, useRouter, useRoute } from "vue-router";
import { Plus } from "@element-plus/icons-vue";
export default defineComponent({
  props: {
    dialogTableVisible: false,
    sortid: {
      type: String,
      default: "",
    },
  },
  emits: ["closeDialog"],
  components: { Plus },
  setup(props, context) {
    console.log("context", context);
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const { dialogTableVisible, sortid } = toRefs(props);
    const labelPosition = ref("top");
    const formLabelAlign = reactive({
      name: "",
      textarea: "",
    });
    const loadData = async () => {
      try {
        if (!sortid.value.length) {
          return false;
        }
        let queryIdNotePadRes = await proxy.$api.queryIdNotePad({
          sortid: sortid.value,
        });
        formLabelAlign.name = queryIdNotePadRes.data[0].name;
        formLabelAlign.textarea = queryIdNotePadRes.data[0].detailed;
        imageUrl.value = queryIdNotePadRes.data[0].head_portrait;
        console.log("queryIdNotePadRes", queryIdNotePadRes);
      } catch (error) {
        console.error(error);
      }
    };
    onMounted(() => {});
    const openDialog = () => {
      loadData();
    };
    //消息提示
    const msg = ref("");
    const isMsgState = ref(false);
    const sendMsg = (v) => {
      if (v.length) {
        msg.value = v;
        isMsgState.value = true;
        setTimeout(() => {
          isMsgState.value = false;
        }, 2000);
      }
    };
    //创建记事本
    const creatNotePad = async () => {
      //非空校验
      if (formLabelAlign.name === "" || formLabelAlign.name == null) {
        sendMsg("请输入名称！( =•ω•= )m");
        return false;
      }
      if (imageUrl.value === "" || imageUrl.value == null) {
        sendMsg("请上传封面！( =•ω•= )m");
        return false;
      }
      if (formLabelAlign.textarea === "" || formLabelAlign.textarea == null) {
        sendMsg("请输入简介！( =•ω•= )m");
        return false;
      }
      try {
        let obj = {
          name: formLabelAlign.name,
          head_portrait: imageUrl.value,
          detailed: formLabelAlign.textarea,
        };
        console.log("sortid.value", sortid.value);
        if (sortid.value === "" || sortid.value == null) {
          //新增
          let addNotepadRes = await proxy.$api.addNotepad({ addNotepadList: obj });
          if (addNotepadRes) {
            isSuccess.value = 2; //创建成功
            sendMsg("成功创建新记事本( *0* )m");
            context.emit("closeDialog", { path: imageUrl, num: isSuccess });
          }
        } else {
          //编辑
          obj.sortid = sortid.value;
          let editNotePadRes = await proxy.$api.editNotepad({
            editNotepadList: obj,
          });
          if (editNotePadRes) {
            isSuccess.value = 2; //创建成功
            sendMsg("编辑成功( =•ω•= )m");
            context.emit("closeDialog", { path: imageUrl, num: isSuccess });
          }
        }
      } catch (e) {
        console.error(e);
        isSuccess.value = 1; //上传了图片，没点击创建
      }
    };
    //删除记事本
    const deleteNotePad = async () => {
      try {
        //删除封面
        console.log("imageUrl.value", imageUrl.value);
        if (imageUrl.value !== "" || imageUrl.value !== null) {
          let path = imageUrl.value;
          let idx = path.split("/").length - 1;
          let fileName = path.split("/")[idx];
          await proxy.$api.deleteFile({
            fileName,
          });
        }
        //执行删除
        let deleteNotepadRes = await proxy.$api.deleteNotepad({
          sortid: sortid.value,
        });
        if (deleteNotepadRes) {
          sendMsg("删除成功！( =•ω•= )m");
          context.emit("closeDialog", { path: imageUrl, num: isSuccess });
          setTimeout(() => {
            router.push({
              path: "/notepad",
            });
          },1500);
        }
      } catch (error) {
        console.error(error);
      }
    };
    // 上传图片
    const imageUrl = ref("");
    const isSuccess = ref(0);
    const handleAvatarSuccess = (response, file, fileList) => {
      console.log("response, file, fileList", response, file, fileList);
      if (response) {
        imageUrl.value = `/api/public/image/${response.data[0].filename}`;
        isSuccess.value = 1; ///上传了图片，没点击创建
      }
    };
    const beforeAvatarUpload = async (file) => {
      try {
        if (imageUrl.value.length) {
          let path = imageUrl.value;
          let idx = path.split("/").length - 1;
          let fileName = path.split("/")[idx];
          await proxy.$api.deleteFile({
            fileName,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    const handleRemove = () => {
      console.log(111);
    };
    return {
      dialogTableVisible,
      labelPosition,
      formLabelAlign,
      imageUrl,
      isSuccess,
      sortid,
      creatNotePad,
      handleAvatarSuccess,
      beforeAvatarUpload,
      handleRemove,
      msg,
      isMsgState,
      sendMsg,
      deleteNotePad,
      openDialog,
    };
  },
});
</script>

<style lang="less" scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
