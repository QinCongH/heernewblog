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
        />
      </div>
      <div class="mg-t-15 h-80">
        <!-- :pageFullScreen="true"         previewOnly -->
        <md-editor theme="light" :toolbars="toolbarList" v-model="value"> </md-editor>
      </div>
      <div class="add-footer flex-h justify-flex-end align-center mg-t-15">
        <div class="filterable w-45">
          <el-select-v2
            v-model="tagValue"
            filterable
            :options="options"
            placeholder="请选择记事本"
            style="width: 100%"
          />
        </div>
        <div class="createNotepad mg-l-10">
          <el-button>创建新本</el-button>
        </div>
        <div class="saveNote mg-l-10">
          <el-button>保存笔记</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const value = ref("");
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
    // 过滤筛选
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    const tagValue = ref([]);
    const options = Array.from({ length: 1000 }).map((_, idx) => ({
      value: `Option${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`,
    }));
    return {
      value,
      toolbarList,
      options,
      tagValue,
    };
  },
});
</script>

<style lang="less" scoped>
.add-archive {
  .breadcrumb{
    height: 3%;
  }
  /deep/#md-editor-v3{
    height: 100%;
  }
}
</style>
