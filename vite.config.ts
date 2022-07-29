import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

const {resolve} = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve:{
    alias:{
      '@':resolve(__dirname, './src')
    }
  },
  server: {
    port: 8080, //启动端口
    hmr: {
        host: '127.0.0.1',
        port: 8080
    },
    // 设置 https 代理
    proxy: {
        // '/api': {
        //     target: 'your https address',
        //     changeOrigin: true,
        //     rewrite: (path: string) => path.replace(/^\/api/, '')
        // }
    }
  } 
})
