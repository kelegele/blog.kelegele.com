import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  {
    text: '主页',
    link: '/',
    icon: 'home'
  },
  {
    text: '内容',
    link: '/article',
    icon: 'circle-check',
    prefix: '/article',
    children: [
      { text: '创造力', link: '/creativity' },
      { text: '极客', link: '/geek' }
    ]
  },
  {
    text: '关于',
    link: '/ABOUT',
    icon: 'circle-info'
  }
])
