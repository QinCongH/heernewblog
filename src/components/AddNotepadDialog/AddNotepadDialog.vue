<template>
  <el-dialog
    @close="$emit('closeDialog', { path: imageUrl, num: isSuccess })"
    v-model="dialogTableVisible"
    title="创建笔记本"
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
          <el-button type="primary" @click="creatNotePad">创建</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
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
import { Plus } from "@element-plus/icons-vue";
export default defineComponent({
  props: {
    dialogTableVisible: false,
  },
  emits: ["closeDialog"],
  components: { Plus },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const emit = defineEmits(["closeDialog"]); //注册emit
    const { dialogTableVisible } = toRefs(props);
    const labelPosition = ref("top");
    const formLabelAlign = reactive({
      name: "",
      textarea: "",
    });
    onMounted(() => {
      console.log(dialogTableVisible.value);
    });
    //创建记事本
    const creatNotePad = async () => {
      try {
        let addNotepadList = {
          name: formLabelAlign.name,
          head_portrait: imageUrl.value,
          detailed: formLabelAlign.textarea,
        };
        let addNotepadRes = await proxy.$api.addNotepad({ addNotepadList });
        if (addNotepadRes) {
          isSuccess.value = 0;
        }
        setTimeout(() => {
          emit("closeDialog", { path: imageUrl, num: isSuccess });
        }, 500);
      } catch (e) {
        console.error(e);
        isSuccess.value = 1;
      }
    };
    // 上传图片
    const imageUrl = ref("");
    const isSuccess = ref(0);
    const handleAvatarSuccess = (response, file, fileList) => {
      console.log("response, file, fileList", response, file, fileList);
      if (response) {
        imageUrl.value = `/api/public/image/${response.data[0].filename}`;
        isSuccess.value = 1;
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
      emit,
      dialogTableVisible,
      labelPosition,
      formLabelAlign,
      imageUrl,
      isSuccess,
      creatNotePad,
      handleAvatarSuccess,
      beforeAvatarUpload,
      handleRemove,
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
