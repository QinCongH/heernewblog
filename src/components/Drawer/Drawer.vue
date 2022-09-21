<template>
  <introduce :isShadow="false"></introduce>
  <div class="nav h-100 center">
    <ul class="flex-v align-center justify-between h-30 mg-t-30">
      <li>
        <router-link
          tag="div"
          to="/"
          :class="useRoute().path === '/HomePage' ? 'active' : ''"
          ><p>主页</p></router-link
        >
      </li>
      <li>
        <router-link active-class="active" to="/notepad">
          <p>记事本</p>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/Archive">
          <p>归档</p>
        </router-link>
      </li>

      <!-- <li>
        <router-link active-class="active" to="/Listing">
          <p>清单</p>
        </router-link>
      </li> -->
      <li>
        <router-link active-class="active" to="/About">
          <p>关于</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, defineComponent, defineEmits, toRefs } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  props: {},
  setup(props, context) {
    return {
      useRoute,
    };
  },
});
</script>

<style lang="less" scoped>
.center {
  ul {
    li {
      // position: relative;
      cursor: pointer;
      a {
        display: block;
        color: #524f4f;
      }

      .active {
        color: #000;
        font-weight: bold;
      }
    }
  }
}
</style>