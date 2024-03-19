/**
 * 20. 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * 解题关键词：栈、map、偶数
 * 解题思路：
 *  需要使用栈这种数据结构来解决该问题，遇到左括号，入栈，如果遇到右括号，就拿栈顶的元素与其匹配，如果匹配不成功/栈中没有元素了，那么就是无效的括号组合。
 *
 *  注：如果括号的数量是奇数个，那么就可以直接判定为无效的括号组合
 */

const validateParentheses = (s: string): boolean => {
  // 如果括号的数量是奇数个，那么直接返回
  if (s.length % 2 === 1) {
    return false;
  }

  // 创建 map 映射
  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  // 栈
  const stack: string[] = [];

  // 遍历每个符号
  for (let char of s) {
    // 如果是右括号
    if (pairs.has(char)) {
      // 如果栈中没有元素 / 栈顶元素不是对应的左括号
      // 那么直接返回 false
      if (!stack.length || stack[stack.length - 1] !== pairs.get(char)) {
        return false;
      }

      // 如果是对应的左括号，那么将该左括号直接 pop 掉
      stack.pop();
    } else {
      // 如果不是右括号，直接入栈
      stack.push(char);
    }
  }

  // 如果最后栈中没有元素了，那么就是有效的符号组合
  return !stack.length;
};
