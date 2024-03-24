class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;

  let left = root.left, right = root.right;
  let leftDepth = 0, rightDepth = 0;
  while (left) {
    leftDepth += 1
    left = left.left
  }
  while (right) {
    rightDepth += 1
    right = right.right
  }

  if (leftDepth === rightDepth) return 2 ** leftDepth - 1

  return 1 + countNodes(root.left) + countNodes(root.right)
};

const init = () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
  root.right = new TreeNode(3, new TreeNode(6), null);

  return root;
};

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // 都为 null
  if (p === null && q === null) return true;
  // 有一个为 null，一个不为 null
  if (p === null || q === null) return false;
  // 两个的值不一样
  if (p.val !== q.val) return false;

  // 队列1
  const queue1: (TreeNode | null)[] = [p];
  // 队列2
  const queue2: (TreeNode | null)[] = [q];

  while (queue1.length && queue2.length) {
    const node1 = queue1.shift()!;
    const node2 = queue2.shift()!;

    // 如果两个 node 都为 null，继续比较剩下的
    if (node1 === null && node2 === null) continue;
    // 如果有一个为 null，有一个不为 null
    if (node1 === null || node2 === null) return false;
    // 值不一样
    if (node1.val !== node2.val) return false;

    // 将左右节点都 push 进去
    queue1.push(node1.left, node1.right);
    queue2.push(node2.left, node2.right);
  }

  return !queue1.length && !queue2.length;
}


function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0

  let maxDepth = 0
  const queue: TreeNode[] = [root]

  while (queue.length) {
    let size = queue.length

    while (size--) {
      const node = queue.shift()!
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    maxDepth++
  }

  return maxDepth
};

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null

  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.left = right
  root.right = left

  return root
};

function averageOfLevels(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [];

  if (root !== null) {
    stack.push(root);
  } else {
    return [];
  }

  const result: number[] = [];

  while (stack.length) {
    let size = stack.length;

    const curLayerNodeValues: number[] = [];
    while (size--) {
      const nodeTarget = stack.shift()!;
      curLayerNodeValues.push(nodeTarget.val);
      if (nodeTarget.left) {
        stack.push(nodeTarget.left);
      }
      if (nodeTarget.right) {
        stack.push(nodeTarget.right);
      }
    }

    result.push(
      curLayerNodeValues.reduce((pre, cur) => pre + cur, 0) /
      curLayerNodeValues.length
    );
  }

  return result;
}

const root1 = init();
// const root2 = init();
// const result = averageOfLevels(root);
// const result = invertTree(root)
// const result = maxDepth(root)
// const result = isSameTree(root1, root2)
const result = countNodes(root1)
// console.log(
//   "%c [ result ]-57",
//   "font-size:13px; background:pink; color:#bf2c9f;",
//   result
// );

// var calculate = function (s: string) {
//   const ops = [1];
//   let sign = 1;

//   let ret = 0;
//   const n = s.length;
//   let i = 0;
//   while (i < n) {
//     if (s[i] === ' ') {
//       i++;
//     } else if (s[i] === '+') {
//       sign = ops[ops.length - 1];
//       i++;
//     } else if (s[i] === '-') {
//       sign = -ops[ops.length - 1];
//       i++;
//     } else if (s[i] === '(') {
//       ops.push(sign);
//       i++;
//     } else if (s[i] === ')') {
//       ops.pop();
//       i++;
//     } else {
//       let num = 0;
//       while (i < n && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
//         num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
//         i++;
//       }
//       ret += sign * num;
//     }
//   }
//   return ret;
// };

function calculate(s: string): number {
  let result = 0;
  const ops = [1];
  let currentSign = 1;
  const length = s.length

  let i = 0;
  while (i < length) {
    const curChar = s[i]

    if (curChar === ' ') {
      i++
    } else if (curChar === '+') {
      currentSign = ops[ops.length - 1]
      i++
    } else if (curChar === '-') {
      currentSign = -ops[ops.length - 1]
      i++
    } else if (curChar === '(') {
      ops.push(currentSign)
      i++
    } else if (curChar === ')') {
      ops.pop()
      i++
    } else {
      let num = 0
      while (i < length && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
        num = num * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0))
        i++
      }
      result += currentSign * num
    }
  }

  return result
};

let pre: TreeNode | null = null
function isValidBST(root: TreeNode | null): boolean {
    if (root === null) return true
    const leftIsValidBST = isValidBST(root.left)
    if (pre !== null && root.val <= pre.val) {
        return false
    }
    pre = root
    const rightIsValidBST = isValidBST(root.right)

    return leftIsValidBST && rightIsValidBST
};

// const result1 = calculate("1 + 1")
const result1 = isValidBST(new TreeNode(0))
console.log('%c [ result1 ]-187', 'font-size:13px; background:pink; color:#bf2c9f;', result1)