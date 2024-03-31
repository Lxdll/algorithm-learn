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

function longestPalindrome(s: string): string {
  const dp = [1]
  let max = 0
  let result = ''

  for (let i = 1; i < s.length; i++) {
    if (s[i - 2] && s[i] === s[i - 2]) {
      dp[i] = dp[i - 2] + 2
    }

    if (s[i] === s[i - 1]) {
      dp[i] = dp[i - 1] + 1
    }

    dp[i] = 0

    if (dp[i] > max) {
      max = dp[i]
      result = s.slice(i - dp[i], i + 1)
    }
  }

  return result
};

function longestCommonSubsequence(text1: string, text2: string): number {
  const len1 = text1.length
  const len2 = text2.length

  const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0))

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[len1][len2]
};

function removeDuplicates(nums: number[]): number {
  const len = nums.length
  if (len === 1) return 1

  let slow = 0
  let fast = 1

  let repeatFlag = false

  while (fast < len) {
    if (nums[slow] === nums[fast]) {
      if (!repeatFlag) {
        repeatFlag = true
        slow++
      }
      fast++
    } else {
      repeatFlag = false
      nums[++slow] = nums[fast++]
    }
  }

  return slow + 1
};

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const len = nums.length

  if (len === 0) return null

  const mid = Math.floor((len - 1) / 2)

  const node = new TreeNode(nums[mid])

  const left = nums.slice(0, mid)
  const right = nums.slice(mid + 1)
  node.left = left.length ? sortedArrayToBST(left) : null
  node.right = right.length ? sortedArrayToBST(right) : null

  return node
};


const result = sortedArrayToBST([-10, -3, 0, 5, 9])

// const result = removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])

// const result = searchRange([2, 2], 2)
console.log('%c [ result ]-69', 'font-size:13px; background:pink; color:#bf2c9f;', result)