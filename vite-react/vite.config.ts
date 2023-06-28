import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path"
import pxtorem from 'postcss-px2rem-options'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5003,
    proxy: {
      '/cap': {
        target: 'http://target.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cap/, ''),
      },
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        pxtorem([{
          remUnit: 16, include: /src\/views\/pc/i,
        },{
          remUnit: 50, include: /src\/views\/app/i
        }])
      ]
    }
  }
})
