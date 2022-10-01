// 创建vuex的store

//引入依赖文件
import {createStore} from 'vuex'
//使用vuex
import theme from './modules/theme' //引入store模块
import permissions from './modules/permissions' //引入store模块
export default createStore({
    modules:{
        permissions,
        theme
    }
})