// 路由出口文件
// 创建router下的index.js
// 从vue-router中引入createRouter，以及模式
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
// 引入routes.ts文件
import routes from './routes.js'
const router = createRouter({
  history: createWebHashHistory(), //createWebHashHistory是hash模式
  routes
});
//设置标题
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '禾耳' //自定义主页标题
  }
})
export default router