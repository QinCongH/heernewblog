// 路由出口文件
// 创建router下的index.js
// 从vue-router中引入createRouter，以及模式
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
// 引入routes.ts文件
import routes from './routes.js'
//引入api
import api from '../api'
const router = createRouter({
  history: createWebHashHistory(), //createWebHashHistory是hash模式
  routes
});

//前置路由守卫
router.beforeEach(async (to, from, next) => {
  //to 目标路由
  //from 来源
  //next 放行
  //修改样式的状态
  //登陆、注册守卫
  if (to.meta.hasOwnProperty('cheakIsLogin')) {
    let checkTokenRes = await api.checkToken()
    if (checkTokenRes.status == 200) { //验证token是否通过,不通过不放行
      next()
    } else {
      next('/Login')
    }
  } else {
    next()
  }
})
//设置标题
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '禾耳' //自定义主页标题
  }
})

export default router