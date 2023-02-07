import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),

    Components({
      resolvers: [VantResolver()],
    }),
  ],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url)),
  //   },
  // },
  // server: {
  //   proxy: {
  //     '/api': {
  //       // http://localhost:5173/api/course/login---> http://localhost:8088/course/login
  //       target: 'http://localhost:8088', // http://127.0.0.1:5173/api/接口
  //       // 允许跨域
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径，把路径变成空字符
  //     },
  //   },
  // },
})
