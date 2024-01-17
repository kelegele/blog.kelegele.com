// import { getDirname, path } from '@vuepress/utils'
import { hopeTheme } from 'vuepress-theme-hope'
import { enNavbar, zhNavbar } from './navbar/index.js'
import { enSidebar, zhSidebar } from './sidebar/index.js'
// import { SPONSOR_ICON } from './sponsorIcon.js'

// const __dirname = getDirname(import.meta.url)

export default hopeTheme({
  print: true,
  fullscreen: true,
  backToTop: true,
  rtl: false,
  pure: false,
  darkmode: 'switch',
  logo: '/logo-black-bg.png',
  logoDark: '/logo.png',

  hostname: 'https://blog.kelegele.com',

  author: {
    name: 'Felix',
    url: '/ABOUT',
    email: 'kelegele@qq.com'
  },

  repo: 'kelegele/blog.kelegele.com',
  repoLabel: 'GitHub',
  repoDisplay: true,

  iconAssets: 'fontawesome-with-brands',

  docsDir: 'src',

  blog: {
    avatar: '/avatar.jpg',
    name: 'Felix',
    roundAvatar: true,
    medias: {
      Email: 'mailto:kelegele@qq.com',
      GitHub: 'https://github.com/kelegele',
      Wechat: '/ABOUT'
      // Sponsor: ['sponsor', path.resolve(__dirname, 'icons/sponsor-icon.svg')]
    }
  },

  navbarLayout: {
    start: ['Brand'],
    center: ['Links', 'Search'],
    end: ['Outlook', 'Repo', 'Language']
  },

  // 路径导航
  breadcrumb: false,

  // meta
  contributors: false,
  editLink: false,

  locales: {
    '/en/': {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,
      sidebarIcon: true,

      footer: 'Kelegele',

      displayFooter: true,
      copyright: 'MIT Licensed | Copyright © 2019~2023 Kelegele',

      blog: {
        description: 'INFJ | Explore | idealist',
        intro: '/en/ABOUT.html',
        timeline: 'Timeline'
      },

      metaLocales: {
        editLink: 'Edit this page on GitHub'
      }
    },

    /**
     * Chinese locale config
     */
    '/': {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,
      sidebarIcon: true,

      footer: '可了个乐',

      displayFooter: true,
      copyright: 'MIT Licensed | Copyright © 2019~2023 可了个乐',

      blog: {
        description: '⁉️复杂多元世界探索家<br/>现实的理想主义者➿',
        intro: '/ABOUT.html',
        timeline: '时间轴',
      },

      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页'
      }
    }
  },

  // 加密
  // encrypt: {
  //   config: {
  //     '/demo/encrypt.html': ['1234'],
  //     '/zh/demo/encrypt.html': ['1234']
  //   }
  // },

  plugins: {
    blog: true,
    activeHeaderLinks: true,
    copyright: {
      global: true,
      author: 'Felix (blog.kelegele.com)',
      license: 'MIT',
      triggerLength: 1
    },
    feed: {
      rss: true
    },
    // Github: blog-comment
    // Vercel: blog-comment
    // LeanCloud: blog-comment
    // comment: {
    //   provider: 'Waline',
    //   serverURL: 'https://blog-comment-kelegele.vercel.app/',
    //   dark: 'auto',
    //   requiredMeta: ['nick', 'mail'],
    //   wordLimit: [3, 1000]
    // },

    // Github: kelegele/blog-comment
    comment: {
      provider: 'Giscus',
      repo: 'kelegele/blog-comment',
      repoId: 'R_kgDOK8wYgw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOK8wYg84Cb8Xp'
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended'
              }
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,
    }

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
})
