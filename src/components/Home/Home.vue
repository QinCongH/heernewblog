
<script setup>
import Cover from "../Cover/Cover.vue";
</script>
<template>
  <Cover></Cover>
  <div class="container">
    <div id="scrollHere"></div>
    <header>
      <div class="w-90 header flex-h justify-between">
        <div class="left">
          <h1 class="font-21 text-lighter">禾耳</h1>
        </div>
        <div class="center">
          <ul class="flex-h justify-space-evenly">
            <li class="active"><p>主页</p></li>
            <li><p>记事本</p></li>
            <li><p>归档</p></li>
            <li><p>清单</p></li>
            <li><p>关于</p></li>
          </ul>
        </div>
        <div class="right"></div>
      </div>
    </header>
  </div>
</template>

<style lang="less" scoped>
header {
  width: 100%;
  height: 50px;
  .header {
    .left {
      line-height: 50px;
    }
    .center {
      width: 60%;
      line-height: 50px;
      ul {
        li {
          position: relative;
          padding: 0px 40px;
          cursor: pointer;
        }
        .active::after {
          content: "";
          display: block;
          position: absolute;
          left: 0px;
          right: 0px;
          height: 3px;
          background: #000;
        }
      }
    }
  }
}
.container {
  height: 800px;
  width: 100%;
  #scrollHere {
    width: 100%;
    height: 1px;
  }
}
</style>