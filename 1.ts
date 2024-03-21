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

const root = init();
// const result = averageOfLevels(root);
// const result = invertTree(root)
const result = maxDepth(root)
console.log(
  "%c [ result ]-57",
  "font-size:13px; background:pink; color:#bf2c9f;",
  result
);
