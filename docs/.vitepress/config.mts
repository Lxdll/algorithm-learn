import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lxdll 的算法学习小册",
  description: "learn",
  base: "/algorithm-learn/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "生活每天都一样，你要积极又向上", link: "/" },
      { text: "坚持就是胜利", link: "/" },
      { text: "每天坚持算法，不管 easy medium hard", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
      { text: "加油～", link: "/" },
    ],

    sidebar: [
      {
        text: "模版",
        items: [{ text: "template" }],
      },
      {
        text: "链表",
        items: [{ text: "21.合并两个有序链表" }, { text: "141.环形链表" }],
      },
      {
        text: "栈",
        items: [{ text: "20.有效的括号" }],
      },
      {
        text: "二叉树",
        items: [
          { text: "102.二叉树的层序遍历" },
          { text: "107.二叉树的层序遍历II" },
          { text: "103.二叉树的锯齿形层序遍历" },
          { text: "637.二叉树的层平均值" },
          { text: "199.二叉树的右视图" },
          { text: "226.翻转二叉树" },
          { text: "104.二叉树的最大深度" },
          { text: "100.相同的树" },
          { text: "101.对称二叉树" },
          { text: "222.完全二叉树的节点个数" },
        ],
      },
    ].map((item) => {
      return {
        ...item,
        items: item.items.map((i) => ({ text: i.text, link: i.text })),
      };
    }),

    socialLinks: [{ icon: "github", link: "https://github.com/Lxdll" }],
  },
});
