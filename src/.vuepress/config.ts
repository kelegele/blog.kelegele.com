import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { searchProPlugin } from 'vuepress-plugin-search-pro'

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

  plugins: [
    // search-pro
    searchProPlugin({
      indexContent: true,
      customFields: [
        {
          getter: (page: any) => page.frontmatter.category,
          formatter: '分类：$content'
        },
        {
          getter: (page: any) => page.frontmatter.tag,
          formatter: '标签：$content'
        }
      ]
    })
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
})
