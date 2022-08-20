<template>
  <div :style="{ opacity: isBacktop ? 1 : 0 }" class="backtop" @click="backtopEvent">
    <svg
      t="1658585955549"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5173"
      width="25"
      height="25"
    >
      <path
        d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3c-3.8 5.3-0.1 12.7 6.5 12.7h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
        p-id="5174"
        fill="rgb(255 255 255)"
      ></path>
    </svg>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
export default defineComponent({
  setup() {
    const backtop = ref(0);
    const isBacktop = ref(false);
    const backtopEvent = () => {
      document.querySelector("body").scrollTop = backtop.value;
    };
    const scrollTop = () => {
      backtop.value = document.querySelector(".cover")?.clientHeight;
      if (document.querySelector(".scrollHere").offsetTop > backtop.value + 200) {
        isBacktop.value = true;
      } else {
        isBacktop.value = false;
      }
    };
    onMounted(() => {
      // 监听滚动条位置
      window.addEventListener("scroll", scrollTop, true);
    });
    return {
      backtop,
      isBacktop,
      backtopEvent,
    };
  },
});
</script>

<style lang="less" scoped>
.backtop {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(138 138 138 / 39%);
  z-index: 99;
  transition: 0.66s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
