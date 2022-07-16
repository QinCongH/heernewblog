<template>
  <div class="clalendar pd-bt-15 box-shadow-1 mg-t-30">
    <el-calendar ref="calendar">
      <template #header="{ date }">
        <div class="header text-center">
          <h2>日历</h2>
        </div>
        <div class="calendar-h flex-h justify-between align-center">
          <div @click="selectDate('prev-month')">
            <p>
              <svg
                t="1657890734744"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1172"
                width="30"
                height="30"
              >
                <path
                  d="M676.181333 219.776a51.2 51.2 0 0 0-72.405333 0l-256 256a51.2 51.2 0 0 0 0 72.405333l256 256a51.2 51.2 0 1 0 72.405333-72.405333L456.405333 512l219.818667-219.818667a51.2 51.2 0 0 0 0-72.405333z"
                  p-id="1173"
                  fill="#2c2c2c"
                ></path>
              </svg>
            </p>
          </div>
          <div @click="selectDate('today')">
            <p>
              {{ date }}
            </p>
          </div>

          <div @click="selectDate('next-month')">
            <p>
              <svg
                t="1657890669794"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="922"
                width="30"
                height="30"
              >
                <path
                  d="M347.818667 219.776a51.2 51.2 0 0 1 72.405333 0l256 256a51.2 51.2 0 0 1 0 72.405333l-256 256a51.2 51.2 0 1 1-72.405333-72.405333L567.594667 512 347.818667 292.181333a51.2 51.2 0 0 1 0-72.405333z"
                  p-id="923"
                  fill="#2c2c2c"
                ></path>
              </svg>
            </p>
          </div>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const calendar = ref();
    const selectDate = (val) => {
      calendar.value.selectDate(val);
    };
    return {
      calendar,
      selectDate,
    };
  },
});
</script>

<style lang="less" scoped>
.clalendar {
  /deep/.el-calendar__header {
    display: block;
    padding: 0px;
    border-bottom: 0px;
    padding: 15px 15px 0px;
  }
  /deep/.el-calendar-table .el-calendar-day {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
  /deep/.el-calendar__body {
    padding: 15px 15px 0px;
  }
  .clalendar-h {
  }
}
</style>