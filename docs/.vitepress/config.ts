import { defineConfig } from "vitepress";
import { getSideBar } from "vitepress-plugin-autobar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GlobeMC",
  lang: "zh-CN",
  description: "为一般玩家编写的 Minecraft 崩溃分析指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "客户端崩溃", link: "/clients" },
      { text: "服务器崩溃", link: "/servers" },
    ],

    sidebar: getSideBar("./docs", {
      ignoreMDFiles: ['index'],
      ignoreDirectory: ['node_modules'],
    }),

    socialLinks: [{ icon: "github", link: "https://github.com/GlobeMC" }],

    editLink: {
      pattern: 'https://github.com/GlobeMC/crashmc.com/edit/main/docs/:path',
      text: '在 GitHub 上帮助我们完善这个页面',
    },
  },
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.png' }
      // would render:
      //
      // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ],
  ],
});