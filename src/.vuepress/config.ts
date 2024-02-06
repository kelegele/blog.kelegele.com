import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

import theme from './theme'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '',
      description: '可了个乐 博客'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Blog',
      description: 'Kelegele Blog'
    }
  },

  theme,

  plugins: [],

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {}
  }),

  // Enable it with pwa
  // shouldPrefetch: false,

  alias: {
    '@Components': path.resolve(__dirname, 'components/index.js')
  }
})
