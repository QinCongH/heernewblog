import {
  defineConfig
} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      //1.element
      resolvers: [ElementPlusResolver()],
      //2. 指定组件位置，默认是src/components
      dirs: ['src/components'],
      // ui库解析器
      // resolvers: [ElementPlusResolver()],
      extensions: ['vue'],
      // 配置文件生成位置
      dts: 'src/components.d.ts'
    }),
  ],
  server: { 
    host: '0.0.0.0',//启动局域网
    proxy: {  //配置跨域
      '/api': {
        target: 'http://localhost:3001/', //你要跨域访问的网址
        changeOrigin: true, // /是否访问时将自身端口更改为访问的端口（控制请求头的host值）
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径把路径变成空字符
      }
    }
  }
})