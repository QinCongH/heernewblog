<template>
  <div class="about" :class="isDark ? 'is-dark' : ''">
    <div class="content">
      <div class="header">
        <introduce> </introduce>
        <div>
          <p>有些路，只能一个人走</p>
        </div>
      </div>
      <div class="about-me">
        <h3>关于本站</h3>
        <p>sdsadsadsadsaddsafsdfsdfsadfsdfsdfs</p>
      </div>
      <div class="about-me">
        <h3>我的兴趣</h3>
        <p>sdsadsadsadsaddsafsdfsdfsadfsdfsdfs</p>
      </div>
      <div class="about-me">
        <h3>我的技能</h3>
        <p>sdsadsadsadsaddsafsdfsdfsadfsdfsdfs</p>
      </div>
      <div class="about-me">
        <h3>联系我</h3>
        <contact-icon :changeColor="false"></contact-icon>
      </div>
    </div>
    <!-- <img src="https://api.dujin.org/bing/1920.php" alt="Bing每日图片超高清" /> -->
    <!-- <img src="https://api.dujin.org/bing/m.php" alt="Bing每日图片手机超高清" /> -->
  </div>
</template>

<script>
// getCurrentInstance获取实例上的内容
import {
  ref,
  reactive,
  getCurrentInstance,
  onMounted,
  defineComponent,
  computed,
} from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const store = useStore();
    const isDark = computed(() => store.state.theme.isDark);
    onMounted(() => {
      proxy.$api.getArticle().then((res) => {
        console.log(res);
      });
      console.log(proxy.$api);
    });
    return {
      isDark,
    };
  },
});
</script>

<style lang="less" scoped>
.about {
  position: absolute;
  top: 49px;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  transition: 0.3s ease;
  background: url("https://api.dujin.org/bing/1920.php") no-repeat;
  background-size: cover;
  .content {
    color:#fff;
    .header {
      /deep/.introduce {
        box-shadow: unset;
        background: unset;
      }
      /deep/ .contact {
        width: 15% !important;
      }
      div {
        p {
          text-align: center;
        }
      }
      display: flex;
      flex-direction: column;
      // background: url("https://api.dujin.org/bing/1920.php") no-repeat;
      // background-size: cover;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .about-me {
      text-align: center;
      margin-bottom: 25px;
      p {
        margin-top: 15px;
      }
    }
  }
}
.is-dark {
  background: #282c34;
}
</style>
