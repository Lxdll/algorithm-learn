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

const init = () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2, new TreeNode(4), null);
  root.right = new TreeNode(3, null, new TreeNode(5));

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
const root2 = init();
// const result = averageOfLevels(root);
// const result = invertTree(root)
// const result = maxDepth(root)
const result = isSameTree(root1, root2)
console.log(
  "%c [ result ]-57",
  "font-size:13px; background:pink; color:#bf2c9f;",
  result
);
