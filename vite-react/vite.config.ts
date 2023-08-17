import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path"
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import postcsspxtoviewport from 'postcss-px-to-viewport'
import viteImagemin from 'vite-plugin-imagemin'

const isDev = process.env.NODE_ENV === 'production'
// https://vitejs.dev/config/
export default defineConfig({
  base: isDev ? '//ali.bczcdn.com/nocturne/' : '/',
  plugins: [
    react(),
    // 注册所有的svg文件生成svg雪碧图
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")], // icon存放的目录
      symbolId: "icon-[name]", // symbol的id
      inject: "body-last", // 插入的位置
      customDomId: "__svg__icons__dom__" // svg的id
    }),
    viteImagemin({
      // 无损压缩配置
      optipng: {
        optimizationLevel: 7
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],
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
    modules: {
      generateScopedName: '[name]_[local]_[hash:5]',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/styles/common.less')}";`
      }
    },
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 1000, // 1rem = 10px
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'rem', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'rem', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          landscape: false // 是否处理横屏情况
        })
      ]
    }
  }
})
