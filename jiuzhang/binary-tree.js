/**
 * 1. Binary Tree DFS Traversal
 *    - preorder / inorder /postorder
 *    - Divid & Conquer
 *    - DFS Template
 * 2. Binary Tree BFS Traversal
 *    - BFS template
 * 3. Binary Search Tree
 *    - validate, insert, delete
 */

/**
 * binary-tree-preorder-traversal
 * Merge Sort
 * Most of the Binary Tree Problems
 * 
 * maximum-depth-of-binary-tree
 * balanced-binary-tree
 * binary-tree-maximum-path-sum
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// version 1: Traverse
  var preorderTraversal = function(root) {
    const result = []
    traverse(root, result)
    return result
  }
  function traverse (node, result) {
    if (node === null) {
      return
    }
    result.push(node.val)

    traverse(node.left, result)
    traverse(node,right, result)
  }

  // version 2: Divide & Conquer

  var preorderTraversal2 = function(root) {
    const result = []
    // null or leaf
    if (root === null) {
      return result
    }

    // Divide
    let left = preorderTraversal2(root.left)
    let right = preorderTraversal2(root.right)

    // Conquer
    result.push(root.val)
    result.push(...left)
    result.push(...right)

    return result
  }


  // Merge Sort

  const mergeSort = function (arr) {
    let result = []

    let len = arr.length
    // if (len === 1) {
    //   return result
    // }
    let mid = parseInt((len /2))
    let leftArr = arr.splice(0, mid)
    // divide
    let left = mergeSort(leftArr)
    let right = mergeSort(arr)

    // Conquer
    let i = 0
    let j = 0
    while(true) {
      if (!left[i] && right[j]) {
        result.push(right[j++])
      }
      if (!right[j] && left[i]) {
        result.push(left[i++])
      }
      if (!right[j] && !left[i]) {
        return
      }
      if (left[i] <= right[j]) {
        result.push(left[i++])
      } else {
        result.push(right[j++])
      }
    }
    
    return result
  }
  const arr = [1, 3, 6, 2, 4, 5, 9, 7]

  console.log(mergeSort(arr))

  // balanced-binary-tree
  var isBalanced = function(root) {
    return maxDepth(root) !== -1
  }
  function maxDepth (root) {
    if (root === null) {
      return 0
    }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1
    }
    return Math.max(left, right) + 1
  }