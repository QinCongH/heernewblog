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
 
export default router