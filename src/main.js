import {
    createApp,
    nextTick
} from 'vue' //使用createApp创建根组件
import './common/css/style.css'
import './common/css/layout.css'
import './common/css/index.css'
import less from 'less'
import App from './App.vue'
import router from './route/index'
import dayjs from 'dayjs' //全局使用dayJs
import api from './api/index'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const app = createApp(App)
nextTick(() => {
    app.config.globalProperties.$day = dayjs //全局挂载
    app.config.globalProperties.$api = api //全局挂载
})
app.use(router, less).mount('#app')
app.component("MdEditor", MdEditor);