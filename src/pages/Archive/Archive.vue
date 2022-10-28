<template>
  <div class="archive w-90 mg-t-15">
    <time-line :timeLineList="timeLineList"></time-line>
    <!-- <el-row :gutter="20">
      <el-col :md="17">
        <div class="content">

        </div>
      </el-col>
      <el-col :md="7">
        <side></side>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import {
  getCurrentInstance,
  ref,
  defineComponent,
  reactive,
  onMounted,
  watch,
  defineEmits,
} from "vue";
export default defineComponent({
  name: "Archive",
  // queryTimeArticle
  setup() {
    //配置变量
    const { proxy } = getCurrentInstance();
    //分页变量
    const page = ref(1);
    const pageSize = ref(10);
    const queryTimeArticleList = ref([]);
    const sentenceList = ref([]);
    let timeLineList = ref([]);
    let timeLineObj = reactive({
      addTime:'',
      time: "",
      titleList: [],
    });
    sentenceList.value = [
      {
        interpret: "永不气馁!",
        sentence: "Never say die",
      },
      {
        interpret: "追逐梦想。",
        sentence: "Hang on to your dreams",
      },
      {
        interpret: "勤工出巧匠。",
        sentence: "Work makes the workman",
      },
      {
        interpret: "问人不费分文。",
        sentence: "Asking costs nothing",
      },
      {
        interpret: "时光易逝。",
        sentence: "Time flies.",
      },
      {
        interpret: "知识就是力量。",
        sentence: "Knowledge is power",
      },
      {
        interpret: "潮涨必有潮落时。",
        sentence: "Every tide has its ebb.",
      },
      {
        interpret: "熟能生巧。",
        sentence: "Practice makes perfect.",
      },
      {
        interpret: "春不播，秋不收。",
        sentence: "Sow nothing, reap nothing",
      },
      {
        interpret: "懒惰出乞丐。",
        sentence: "Idleness is the key of beggary.",
      },
      {
        interpret: "谨慎和勤奋带来好运。",
        sentence: "Many hands make quick work.",
      },
      {
        interpret: "切莫依赖明天。",
        sentence: "Tomorrow comes never",
      },
    ];
    //加载数据
    const loadData = async () => {
      try {
        let queryTimeArticleRes = await proxy.$api.queryTimeArticle({
          page: page.value,
          pageSize: pageSize.value,
        });
        queryTimeArticleList.value = queryTimeArticleRes.data.params;
        if (queryTimeArticleRes) {
          let timeList = [];

          queryTimeArticleList.value.forEach((el, index) => {
            let time = proxy.$day(el.addTime).format("YYYY-MM");
            timeList.push(time);
          });
          timeList = [...new Set(timeList)];
          timeList.forEach((el, index) => {
            timeLineObj = {
              addTime:'',
              time: "",
              titleList: [],
            };
            queryTimeArticleList.value.forEach((val, idx) => {
              let time = proxy.$day(val.addTime).format("YYYY-MM");
              if (time === el) {
                timeLineObj.addTime=val.addTime
                timeLineObj.time = el;
                timeLineObj.titleList.push(val.title);
              }
            });
            timeLineList.value.push(timeLineObj);
          });
          timeLineList.value.forEach(el=>{
            let time=proxy.$day(el.addTime).month()+1
            sentenceList.value.forEach((val,index)=>{
              if(time-1==index){
                let sentence=val.interpret
                el.interpret=sentence
              }
            })
          })
          console.log('timeLineList.value',timeLineList.value);
        }
      } catch (err) {
        throw err;
      }
    };
    onMounted(() => {
      loadData();
    });
    return {
      page,
      pageSize,
      queryTimeArticleList,
      sentenceList,
      timeLineList
    };
  },
});
</script>

<style></style>
