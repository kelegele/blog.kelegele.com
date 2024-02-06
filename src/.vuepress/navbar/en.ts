import { navbar } from 'vuepress-theme-hope'

export const enNavbar = navbar([
  {
    text: 'Home',
    link: '/en/',
    icon: 'home'
  },
  {
    text: 'Content',
    icon: 'circle-check',
    prefix: '/en/article/',
    children: [
      { text: '🍑Creativity', link: 'creativity' },
      { text: '🥬Geek', link: 'geek' }
    ]
  },
  {
    text: 'About',
    link: '/en/ABOUT',
    icon: 'circle-info'
  },
  {
    text: 'Links',
    link: '/en/LINKS',
    icon: 'link'
  }
])
