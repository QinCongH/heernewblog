<template>
  <div @dblclick="toLogin">
    <introduce :isShadow="false"  :avatar="dispositionObj.data.avatar" :introName="dispositionObj.data.name"></introduce>
  </div>
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
import { ref, defineComponent, defineEmits,reactive, toRefs,computed,getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  props: {},
  setup(props, context) {
    const router = useRouter();
    const { proxy } = getCurrentInstance();
    const dispositionObj=reactive({
      data:{}
    })
    //2.接收state
    const store = useStore();
    const isShow = computed(() => store.state.permissions.isShow);
    const toLogin = () => {
      if (!isShow.value) {
        router.push("/Login");
      }
    };
    const loadData=async ()=>{
      let dispositionRes = await proxy.$api.queryDisposition({
           name:"禾耳"
         });
        if(dispositionRes){
        dispositionObj.data=dispositionRes.data[0]
         }
    }
    loadData()
    return {
      useRoute,
      toLogin,
      dispositionObj
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
