import {
    createApp
} from 'vue' //使用createApp创建根组件
import './common/css/style.css'
import './common/css/layout.css'
import './common/css/index.css'
import less from 'less'
import Clipboard from 'v-clipboard'
import App from './App.vue'
import router from './route/index'
createApp(App).use(router,less,Clipboard).mount('#app')
