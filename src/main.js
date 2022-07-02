import {
    createApp
} from 'vue' //使用createApp创建根组件
import less from 'less'
import App from './App.vue'
import router from './route/index'
createApp(App).use(router,less).mount('#app')