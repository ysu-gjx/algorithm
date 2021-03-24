/**
 * Graph:
 *      Clone graph
 *            Copy List with Random Pointer
 *      Topological sorting
 * 
 * Search: 
 *      Depth First Search
 *      Breadth First Search
 */


/**
 * Clone graph
 * copy-list-with-random-pointer
 * Topological sorting
 * 
 * permutations
 * subsets
 * subsets-ii
 * 
 * n-queens
 * 
 * palindrome-partitioning
 * combination-sum
 * combination-sum-ii
 * 
 * word-ladder
 * word-ladder-ii
 */

/**
 *
 * Conclusion
 * 
 * DFS (O(2^n), O(n!) )(思想： 构建搜索树+判断可行性)
 *    1. Find all possible solutions
 *    2. Permutations / Subsets
 * BFS (O(m), O(n))
 *    1. Graph traversal(每个点只遍历一次)
 *    2. Find shortest path in a simple graph
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
  var cloneGraph = function(node) {
    if (node === null) {
      return null
    }

    let map = new Map()
    let nodes = []
    let copyNode = new Node(node.val)
    
    map.set(node, copyNode)
    nodes.push(node)

    // clone the graph node
    let start = 0
    while(start < nodes.length) {
      let root = nodes[start++]

      for (const neighbor of root.neighbors) {
        if (!map.get(neighbor)) {
          copyNode = new Node(neighbor.val)
          map.set(neighbor, copyNode)
          nodes.push(neighbor)
        }
        
      }
    }

    // clone the edge
    for (const oldNode of nodes) {
      let newNode = map.get(oldNode)
      for (const neighbor of oldNode.neighbors) {
        newNode.neighbors.push(map.get(neighbor))
      }
    }

    return map.get(node)
  }


/**
 * Topological sorting
 * 
 * @param {*} graph: A list of Directed graph node
 * @return: Any topological order for the given graph
 */
  var topSort = function(graph) {
    let order = []
    let indegree = new Map()

    // 遍历图 将节点的入度 存起来
    for (const node of graph) {
      for (const neighbor of node.neighbors) {
        if (indegree.has(neighbor)) {
          indegree.set(neighbor, indegree.get(neighbor) + 1)
        } else {
          indegree.set(neighbor, 1)
        }
      }
    }

    //
    let queue = []
    // 入度为0的节点加入队列 
    for (const node of graph) {
      if (!indegree.has(node)) {
        queue.push(node)
        order.push(node)
      }
    }

    // 按顺序遍历队列  bfs
    while(queue.length) {
      let node = queue.shift()

      for (const neighbor of node.neighbors) {
        indegree.set(neighbor, indegree.get(neighbor) - 1)
        if (indegree.get(neighbor) === 0) {
          queue.push(neighbor)
          order.push(neighbor)
        }
      }
    }

    return order
  }

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
  var permute = function(nums) {
    let result = []
    if (nums === null || nums.length === 0) {
      return result
    }
    let list = []
    helper(result, list, nums)
    return result
  };

  function helper(result, list, nums) {
    if (nums.length === list.length) {
      result.push(list.concat())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!list.includes(nums[i])) {
        list.push(nums[i])
        helper(result, list, nums)
        list.pop()
      }
    }
  }

  // console.log(permute([1,2,3]))

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let result = []
  let list = []
  helper2(result, list, nums, 0)
  return result
};

function helper2(result, list, nums, pos) {
  result.push(list.concat())

  for (let i = pos; i < nums.length; i++) {
    
    list.push(nums[i])
    console.log(i === pos, i, pos)
    helper2(result,list,nums, i+1)
    list.pop()
  }
}

// console.log(subsets([1,2,3]))

/**
 * n-queens
 * 
 * @param {number} n
 * @return {string[][]}
 */
  var solveNQueens = function(n) {
    let result = []
    if (n <= 0) {
      return result
    }
    search(result, [], n)

    return result
  }
  function search (result, cols, n) {
    if (cols.length === n) {
      result.push(drawChessboard(cols))
      return
    }
    for (let colIndex = 0; colIndex < n; colIndex++) {
      if (!isValid(cols, colIndex)) {
        continue
      }
      cols.push(colIndex)
      search(result, cols, n)
      cols.pop()
    }
  }
  function isValid (cols, colIndex) {
    let row = cols.length
    for (let rowIndex = 0; rowIndex < row; rowIndex++) {
      if (cols[rowIndex] === colIndex) {
        return false
      }
      if (rowIndex + cols[rowIndex] === row + colIndex) {
        return false
      }
      if (rowIndex - cols[rowIndex] === row - colIndex) {
        return false
      }
    }
    return true
  }

  function drawChessboard (cols) {
    return cols.map(col => {
      let c = new Array(cols.length).fill('.')
      c.splice(col, 1, 'Q')
      return c.join('')
    })
  }

  // console.log(solveNQueens(5))
  
/**
 * palindrome-partitioning
 * 
 * @param {string} s
 * @return {string[][]}
 */
  var partition = function(s) {
    let result = []

    partitionHelper(result, [], s, 0)

    return result
  }
  function partitionHelper (result, list, s, pos) {
    if (pos === s.length) {
      result.push(list.concat())
      return
    }
    let str = ''
    for (let i = pos; i < s.length; i++) {
      str += s[i]
      if (isPalindrome(str)) {
        list.push(str)
        partitionHelper(result, list, s, i+1)
        list.pop()
      }
    }
  }
  function isPalindrome (str) {
    return str === str.split('').reverse().join('')
  }

  // console.log(partition('aabaa'))
  
/**
 * combination-sum
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
  var combinationSum = function(candidates, target) {
    let result = []
    candidates.sort((a,b) => a-b)

    combinationSumHelper(result, [], candidates, target, 0)

    return result
  }

  function combinationSumHelper(result, list, nums, target, pos) {
    
    if (target === 0) {
      result.push(list.concat())
      return 
    }
    for (let i = pos; i < nums.length; i++) {
      if (target < nums[i]) {
        break
      }
      list.push(nums[i])
      combinationSumHelper(result, list, nums, target - nums[i], i)
      list.pop()
    }
  }

  // console.log(combinationSum([2,3,6,7], 7))

/**
 * word-ladder-ii
 * 
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
*/
  var findLadders = function(beginWord, endWord, wordList) {
    let result = []
    if (!wordList.includes(endWord)) {
      return result
    }

    let map = new Map()
    let graph = [...new Set([beginWord, ...wordList, endWord])]
    graph = graph.map(val => {
      return new GraphNode(val)
    })
    for (const node1 of graph) {
      for (const node2 of graph) {
        if (isNeighbors(node1.val, node2.val)) {
          node1.neighbors.push(node2)
        }
      }
    }
    
    bfsHelper(graph, map, beginWord)
    dfsHelper(result, graph, [], beginWord, endWord, map)
    console.log(graph, map)
    return result
  }

  function dfsHelper (result, graph, list, beginWord, endWord, map) {
    let end = graph.find(v => v.val === endWord)
    let endIndex = map.get(end)
    if (list.length && list[list.length - 1].val === beginWord) {
      result.push(list.concat().reverse().map(v => v.val))
      return
    }
    if (!list.find(v => v.val === endWord)) {
      list.push(end)
    }
    for (const neighbor of end.neighbors) {
      if (map.get(neighbor) >= endIndex) {
        continue
      }
      
      list.push(neighbor)
      dfsHelper(result, graph, list, beginWord, neighbor.val, map)
      list.pop()
    }
  }
  function bfsHelper (graph, map, beginWord) {
    let queue = []
    let firNode = graph.find(v => v.val === beginWord)
    map.set(firNode, 0)
    firNode.dep = 0
    queue.push(firNode)

    while (queue.length) {
      let node = queue.shift()
      
      for (const neighbor of node.neighbors) {
        if (!map.has(neighbor)) {
          neighbor.dep = node.dep+1
          queue.push(neighbor)
          map.set(neighbor, neighbor.dep)
        }
      }
    }
  }
  // Definition for a Node.
  function GraphNode(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }

  // 两个节点可以通过变换一个字母实现的  互为neighbors
  function isNeighbors (s1, s2) {
    let count = 0
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        count++
      }
    }
    return count === 1
  }

  // console.log(findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))
  // console.log(findLadders('hit', 'cog', ["hot","dot","dog","lot","log"]))
  console.log(findLadders('hot', 'dog', ["hot","dog","cog","pot","dot"]))