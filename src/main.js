import {
    createApp
} from 'vue' //使用createApp创建根组件
import './common/css/style.css'
import './common/css/layout.css'
import './common/css/index.css'
import less from 'less'
import App from './App.vue'
import router from './route/index'
const app = createApp(App)
app.use(router, less).mount('#app')