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

class NodeClass {
  val: number
  left: NodeClass | null
  right: NodeClass | null
  next: NodeClass | null
  constructor(val?: number, left?: NodeClass, right?: NodeClass, next?: NodeClass) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}

const init = () => {
  const root = new TreeNode(4);
  root.left = new TreeNode(9, new TreeNode(5), new TreeNode(1));
  root.right = new TreeNode(0);

  return root;
};

const root1 = init();

const initNodeClass = () => {
  const root = new NodeClass(1)
  root.left = new NodeClass(2, new NodeClass(4), new NodeClass(5))
  root.right = new NodeClass(3, undefined, new NodeClass(7))

  return root
}

function searchRange(nums: number[], target: number): number[] {
  let left = 0
  let right = nums.length - 1

  let startIndex = -1
  let endIndex = -1
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left

    if (nums[mid] === target) {
      startIndex = startIndex === -1 ? mid : Math.min(startIndex, mid)
      endIndex = Math.max(endIndex, mid)
      break
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  while (startIndex) {
    if (nums[startIndex - 1] === target) {
      startIndex--
    } else {
      break
    }
  }

  while (endIndex) {
    if (nums[endIndex + 1] === target) {
      endIndex++
    } else {
      break
    }
  }

  return [startIndex, endIndex]
};

function maximalSquare(matrix: string[][]): number {
  const m = matrix[0].length
  const n = matrix.length

  const dp = new Array(n).fill(new Array(m).fill(0))

  let result = 1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = +matrix[i][j]
      } else {
        dp[i][j] = Math.min(
          +dp[i - 1][j],
          +dp[i - 1][j - 1],
          +dp[i][j - 1],
        ) + 1;
        result = Math.max(result, dp[i][j])
      }
    }
  }

  return result * result
};

const result = maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])

// const result = searchRange([2, 2], 2)
console.log('%c [ result ]-69', 'font-size:13px; background:pink; color:#bf2c9f;', result)