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
        text: "数组",
        items: [
          { text: "88.合并两个有序数组" },
          { text: "27.移除元素" },
          { text: "28.找出字符串中第一个匹配项的下标" },
          { text: "121.买卖股票的最佳时机" },
          { text: "122.买卖股票的最佳时机II" },
          { text: "13.罗马数字转整数" },
          { text: "12.整数转罗马数字" },
        ],
      },
      {
        text: "双指针",
        items: [
          { text: "125.验证回文串" }
        ]
      },
      {
        text: "回溯",
        items: [
          { text: "22.括号生成" }
        ]
      },
      {
        text: "链表",
        items: [
          { text: "21.合并两个有序链表" },
          { text: "141.环形链表" },
          { text: "19.删除链表" }
        ],
      },
      {
        text: "栈",
        items: [
          { text: "20.有效的括号" },
          { text: "224.基本计算器" },
          { text: "227.基本计算器II" }
        ],
      },
      {
        text: "二分查找",
        items: [
          { text: "704.二分查找" },
          { text: "300.最长递增子序列" },
          { text: "35.搜索插入位置" },
          { text: "744.寻找比目标字母大的最小字母" },
          { text: "1351.统计有序矩阵中的负数" },
          { text: "374.猜数字大小" },
          { text: "278.第一个错误的版本" },
          { text: "367.有效的完全平方数" },
          { text: "69.x的平方根" },
          { text: "441.排列硬币" },
          { text: "34.在排序数组中查找元素的第一个和最后一个位置" },
        ]
      },
      {
        text: "动态规划",
        items: [
          { text: '70.爬楼梯' },
          { text: '509.斐波那契数' },
          { text: '1137.第N个泰波那契数' },
          { text: '746.使用最小花费爬楼梯' },
          { text: '221.最大正方形' },
          { text: '5.最长回文子串' },
        ]
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
          { text: "112.路径总和" },
          { text: "530.二叉搜索树的最小绝对查" },
          { text: "114.二叉树展开为链表" },
          { text: "98.验证二叉搜索树" },
          { text: "230.二叉搜索树中第k小的元素" },
          { text: "117.填充每个节点的下一个右侧节点指针" },
          { text: "129.求根节点到叶节点数字之和" },
          { text: "236.二叉树的最近公共祖先" },
          { text: "173.二叉搜索树迭代器" },
          { text: "105.从前序与中序遍历序列构造二叉树" },
          { text: "106.从中序与后序遍历序列构造二叉树" },
          { text: "124.二叉树中的最大路径和" },
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
