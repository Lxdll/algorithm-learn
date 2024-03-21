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
  const root = new TreeNode(3);
  root.left = new TreeNode(9, null, null);
  root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

  return root;
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
const result = invertTree(root)
console.log(
  "%c [ result ]-57",
  "font-size:13px; background:pink; color:#bf2c9f;",
  result
);
