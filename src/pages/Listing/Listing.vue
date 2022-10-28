<template>
  <div class="Listing w-90 mg-t-15">
    <el-row :gutter="20">
      <el-col :md="17">
        <div class="content">
          <div class="masonry">
            <div
              :style="{ background: item.bcgColor }"
              class="item mg-b-30 w-100"
              v-for="(item, index) in todoList"
              :key="index"
            >
              <!-- <img class="max-w-100" src="http://source.unsplash.com/random/400x600" /> -->
              <div class="masonry-content pd-10">
                <div class="masonry-haed">
                  <h1>{{ item.title }}</h1>
                </div>
                <div class="masonry-list mg-t-15">
                  <ul>
                    <li class="mg-b-15" v-for="(val, idx) in item.data" :key="val">
                      <el-checkbox v-model="val.isChecked">
                        <p :class="val.isChecked ? 'text-through' : ''">
                          {{ val.content }}
                        </p>
                      </el-checkbox>
                    </li>
                  </ul>
                </div>
                <p class="mg-t-15" v-show="false">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quod et
                  deleniti nobis quasi ad, adipisci perferendis totam, ducimus incidunt
                  dolore aut, quae quaerat architecto quisquam repudiandae amet nostrum
                  quidem?
                </p>
              </div>
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
// http://source.unsplash.com/random/400x600  随机图片
import {
  defineComponent,
  ref,
  onBeforeUpdate,
  getCurrentInstance,
  onMounted,
  reactive,
} from "vue";
export default defineComponent({
  name: "Listing",
  setup(props, context) {
    //获取随机颜色
    const getBcgColor = () => {
      const bcgColorList = [
        "#FFFFCC",
        "#CCFFFF",
        "#FFCCCC",
        "#CCCCFF",
        "#CCCCCC",
        "#99CCCC",
      ];
      let item = bcgColorList[Math.floor(Math.random() * bcgColorList.length)];
      return item;
    };
    //模拟数据
    const todoList = reactive([
      {
        title: "打卡",
        time: "2001-07-23",
        data: [
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
        ],
        bcgColor: getBcgColor(),
      },
      {
        title: "学习",
        time: "2001-07-23",
        data: [
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
        ],
        bcgColor: getBcgColor(),
      },
      {
        title: "英语",
        time: "2001-07-23",
        data: [
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
        ],
        bcgColor: getBcgColor(),
      },
      {
        title: "属性",
        time: "2001-07-23",
        data: [
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
        ],
        bcgColor: getBcgColor(),
      },
      {
        title: "属性",
        time: "2001-07-23",
        data: [
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
        ],
        bcgColor: getBcgColor(),
      },
      {
        title: "属性",
        time: "2001-07-23",
        data: [
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
          { content: "写作业", isChecked: false },
        ],
        bcgColor: getBcgColor(),
      },
    ]);
    console.log(context);
    return {
      getBcgColor,
      todoList,
    };
  },
});
</script>

<style lang="less" scoped>
.masonry {
  width: 100%; // 默认宽度
  margin: 20px auto; // 剧中
  columns: 4; // 默认列数
  column-gap: 30px; // 列间距
  .item {
    break-inside: avoid;
    img {
    }
  }
}
</style>
