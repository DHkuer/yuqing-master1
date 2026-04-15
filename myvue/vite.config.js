import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  
  server: {
    proxy: {
      // 当请求路径以 /api 开头时，触发代理
      '/api': {
        target: 'http://47.238.70.31:5000', // 目标服务器地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, '/api') // 保持路径不变，因为你的 baseURL 已经包含了 /api
        // 注意：如果你的 baseURL 是 'http://47.238.70.31:5000/api'，
        // 而你想代理的是 '/api' 前缀，通常 rewrite 可以省略或者根据具体后端路径调整。
        // 如果后端接口实际上是 http://47.238.70.31:5000/api/user/getAll
        // 前端请求 /api/user/getAll -> 代理到 http://47.238.70.31:5000/api/user/getAll
      }
    }
  }
})
