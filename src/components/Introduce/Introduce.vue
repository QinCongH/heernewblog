<template>
  <div :class="isShadow ? 'box-shadow-1' : ''" class="introduce pd-bt-15">
    <div class="introduce-main text-center">
      <div class="pic flex-h justify-center">
        <el-image style="border-radius:50%;width: 66px; height: 66px" :src="getAvatarUrl"  :lazy="true">
        
        </el-image>
      </div>
      <div class="myself mg-t-15">
        <p>{{getIntroName}}</p>
      </div>
      <div class="contact" v-show="isContact">
        <div :title="iconList.wx" @click="copyText(iconList.wx)">
          <svg
            t="1656822085335"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2852"
            width="25"
            height="25"
          >
            <path
              d="M368.832 374.816a26.656 26.656 0 0 0 0.128 53.28 26.656 26.656 0 0 0-0.128-53.28M502.08 428.096a26.592 26.592 0 1 0-0.288-53.248 26.656 26.656 0 0 0 0.32 53.248M566.4 513.888a22.24 22.24 0 0 0-22.08 22.336 22.048 22.048 0 0 0 22.08 22.016 21.984 21.984 0 0 0 22.08-22.272 22.144 22.144 0 0 0-22.08-22.08"
              :fill="!isDark ? '#222' : '#fff'"
              p-id="2853"
            ></path>
            <path
              d="M788.16 588.48c-1.76 25.728-11.36 48.384-27.2 68.48a150.112 150.112 0 0 1-28.576 27.68c-5.952 4.448-7.104 7.68-5.216 14.848 2.496 9.44 4.992 18.848 7.584 28.288 0.736 2.72 0.64 5.216-1.792 7.04-2.336 1.888-4.736 1.28-7.072-0.096-11.648-6.752-23.36-13.44-34.912-20.224a19.712 19.712 0 0 0-16.256-2.08c-44.992 12.128-89.088 9.6-131.744-9.408-31.04-13.824-56.096-34.784-72.736-64.864a116.704 116.704 0 0 1-14.752-63.136c1.344-27.584 11.52-51.84 29.024-72.992 21.824-26.368 49.984-43.136 82.528-52.8a196.192 196.192 0 0 1 58.72-7.68 183.744 183.744 0 0 1 81.6 19.712c29.92 15.04 53.76 36.576 68.8 66.88 9.44 19.04 13.44 39.264 12 60.384m-344.224 33.152a237.408 237.408 0 0 1-73.472-8.96 20.8 20.8 0 0 0-16.8 2.208l-41.952 24.288-1.696 0.96c-2.72 1.6-5.44 1.792-8.032-0.32-2.592-1.984-2.912-4.8-2.144-7.744 0.96-3.744 2.048-7.424 3.04-11.136 2.176-8.064 4.352-16.128 6.464-24.224 1.92-7.392 0.288-11.968-5.856-16.544a182.176 182.176 0 0 1-31.264-29.12c-18.432-21.888-30.72-46.656-35.008-75.072a139.52 139.52 0 0 1 14.72-87.264c16.512-31.68 41.44-55.136 72.32-72.544a219.488 219.488 0 0 1 80.384-26.24c10.24-1.28 20.576-2.016 30.912-1.952a226.464 226.464 0 0 1 93.92 19.648c35.744 16.128 65.088 39.776 85.408 73.792 8.256 13.856 14.048 28.672 17.28 44.48 0.64 2.784 0.608 2.784-2.24 2.688a211.072 211.072 0 0 0-78.4 11.648c-34.24 12.128-63.264 31.584-85.056 61.024a131.84 131.84 0 0 0-26.272 68.736 124.32 124.32 0 0 0 5.568 49.056c0.64 2.016 0.448 2.528-1.824 2.56M512 64C264.576 64 64 264.576 64 512c0 247.456 200.576 448 448 448s448-200.544 448-448c0-247.424-200.576-448-448-448"
              :fill="!isDark ? '#222' : '#fff'"
              p-id="2854"
            ></path>
            <path
              d="M677.408 513.888a22.304 22.304 0 0 0-22.144 22.08 22.112 22.112 0 1 0 44.256 0.256 22.304 22.304 0 0 0-22.112-22.336"
              :fill="!isDark ? '#222' : '#fff'"
              p-id="2855"
            ></path>
          </svg>
        </div>
        <div :title="iconList.qq" @click="copyText(iconList.qq)">
          <svg
            t="1656822149888"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3932"
            width="25"
            height="25"
          >
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m210.5 612.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.2 72.2-51.1 101.8 16.9 5.2 54.9 19.2 45.9 34.4-7.3 12.3-125.6 7.9-159.8 4-34.2 3.8-152.5 8.3-159.8-4-9.1-15.2 28.9-29.2 45.8-34.4-35-29.5-51.1-70.4-51.1-101.8 0 0-33.4 54.1-44.9 52.7-5.4-0.7-12.4-29.6 9.4-99.7 10.3-33 22-60.5 40.2-105.8-3.1-116.9 45.3-215 160.4-215 113.9 0 163.3 96.1 160.4 215 18.1 45.2 29.9 72.8 40.2 105.8 21.7 70.1 14.6 99.1 9.3 99.7z"
              p-id="3933"
              :fill="!isDark ? '#222' : '#fff'"
            ></path>
          </svg>
        </div>
        <div :title="iconList.tel" @click="copyText(iconList.tel)">
          <svg
            t="1656822246414"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4906"
            width="25"
            height="25"
          >
            <path
              d="M742.218667 526.666667c107.637333 0 194.848 87.573333 194.848 195.552V725.333333c0 103.168-93.578667 190.4-190.4 190.4h-45.44a30.4 30.4 0 0 1-2.517334-0.106666c-153.898667-12.778667-312.266667-80.128-411.914666-173.888C169.184 631.082667 86.933333 461.44 86.933333 303.818667c0-113.802667 84.405333-195.552 194.848-195.552 107.626667 0 194.837333 87.573333 194.837334 195.552 0 76.032-44.181333 138.773333-111.701334 169.12a507.658667 507.658667 0 0 0 81.6 100.266666c36.288 34.453333 76.544 62.336 118.752 81.813334 26.304-76.170667 94.186667-128.352 176.96-128.352z"
              p-id="4907"
              :fill="!isDark ? '#222' : '#fff'"
            ></path>
          </svg>
        </div>
        <div :title="iconList.email" @click="copyText(iconList.email)">
          <svg
            t="1656842239298"
            class="icon"
            viewBox="0 0 1299 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2664"
            width="25"
            height="25"
          >
            <path
              d="M1075.206695 0H224.499003A226.934154 226.934154 0 0 0 0.006695 228.627692V795.569231A226.934154 226.934154 0 0 0 224.499003 1024h850.707692a226.894769 226.894769 0 0 0 224.492308-228.430769V228.627692A226.894769 226.894769 0 0 0 1075.206695 0z m17.880616 292.115692L807.036849 590.769231a215.118769 215.118769 0 0 1-312.359384 0L206.775926 290.382769a52.145231 52.145231 0 0 1 0.866462-72.940307 49.979077 49.979077 0 0 1 71.68 0.866461l288.059077 300.386462a114.688 114.688 0 0 0 166.951384 0l286.011077-298.771693a49.979077 49.979077 0 0 1 71.68-0.905846 51.948308 51.948308 0 0 1 1.024 72.822154z m0 0"
              p-id="2665"
              :fill="!isDark ? '#222' : '#fff'"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, defineEmits, computed, toRefs, reactive ,onMounted,inject} from "vue";
import { useStore } from "vuex";
import copyText from "../../common/util/copyText";
export default defineComponent({
  props: {
    isShadow: {
      type: Boolean,
      default: true,
    },
    isContact: {
      type: Boolean,
      default: false,
    },
    avatar:{
      type:String,
      default:"https://images.unsplash.com/photo-1657403538510-1b324c4c1c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80"
    },
    introName:{
      type:String,
      default:"web前端开发"
    },
  },
  setup(props, context) {
    const store = useStore();
    const iconList = reactive({
      wx: "hyl158191",
      qq: "3409575546",
      tel: "19145077425",
      email: "3409575546@qq.com",
      github: "https://github.com/QinCongH",
    });
    const isDark = computed(() => store.state.theme.isDark);
    const avatarData=inject('avatarData')
    const getAvatarUrl=computed(() =>{
      if(avatarData){
          return avatarData.value.avatar
      }else{
          return props.avatar
      }
    });
    const getIntroName=computed(() =>{
    if(avatarData){
     return avatarData.value.name
    }else{
      return props.introName
    }
    });
    return {
      iconList,
      copyText,
      isDark,
      avatarData,
      getAvatarUrl,
      getIntroName
    };
  },
});
</script>

<style lang="less" scoped>
.introduce {
  .introduce-main {
    .pic {
      img {
        width: 66px;
        height: 66px;
      }
    }
    .contact {
      display: flex;
      align-content: center;
      justify-content: space-around;
      width: 50%;
      margin: 15px auto;
    }
  }
}
</style>
