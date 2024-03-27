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

function findKthPositive(arr: number[], k: number): number {
  let left = 1
  let right = arr.length - 1

  let start = -1
  let startPreEmpty = -1

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left

    const preEmptyCount = (arr[mid] - 1) - arr.slice(0, mid).length
    if (preEmptyCount === k) {
      return arr[mid] - 1
    }
    if (preEmptyCount < k) {
      start = mid
      startPreEmpty = preEmptyCount

      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  if (start !== -1) {
    const count = k - startPreEmpty
    return arr[start] + count
  } else if (arr[0] > k) {
    return k
  } else {
    return arr[0] + k
  }
};

// const result = findKthPositive([6, 7, 10, 20, 28, 29, 33, 37, 39, 40, 49, 53, 55, 72, 75, 76, 85, 87, 88, 94, 106, 107, 119, 120, 129, 142, 147, 152, 157, 159, 161, 173, 178, 183, 187, 188, 193, 199, 202, 212, 215, 224, 227, 230, 237, 239, 246, 251, 256, 260, 266, 268, 273, 277, 279, 281, 291, 297, 298, 310, 312, 314, 315, 321, 324, 326, 329, 341, 342, 348, 355, 367, 370, 374, 387, 389, 394, 413, 420, 424, 429, 446, 447, 458, 460, 464, 467, 473, 477, 478, 498, 500, 501, 503, 514, 515, 523, 525, 528, 529, 531, 535, 539, 555, 566, 569, 572, 583, 588, 591, 596, 602, 604, 605, 606, 610, 611, 616, 619, 622, 623, 631, 632, 640, 642, 645, 647, 661, 680, 684, 685, 687, 694, 696, 698, 714, 717, 720, 726, 734, 738, 742, 745, 753, 770, 775, 780, 781, 783, 787, 788, 798, 806, 821, 835, 852, 865, 873, 888, 897, 926, 932, 935, 939, 945, 956, 966, 967, 969, 973, 979, 980, 986, 992, 995, 997], 96)
const result = findKthPositive([1, 3], 1)
console.log('%c [ result ]-69', 'font-size:13px; background:pink; color:#bf2c9f;', result)