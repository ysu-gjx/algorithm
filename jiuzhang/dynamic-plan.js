/**
 * 从递归到动规 - Triangle
 * 什么样的题适合动态规划？
 * 当我们谈论动态规划的时候，我们在谈论什么：
 * 面试中常见动态规划的分类
 * 矩阵上的动态规划
 * 序列上的动态规划
 */

/**
 * triangle
 * minimum-path-sum
 * unique-paths
 * unique-paths-ii
 * 
 * climbing-stairs
 * Jump-game 
 * Jump-game-ii
 * palindrome-partitioning-ii
 */

/**
 * 
 * 如何想到使用DP
 * 1. One of the following three
 *    a> Maximum/ Minimum
 *    b> Yes/ No
 *    c> Count(*)
 *  2. Can not sort / swap
 */
/**
 * 
 * 动态规划的4点要素
 * 1. 状态 State
 *    灵感，创造力，存储小规模的问题的结果
 * 2. 方程 Function
 *    状态之间的联系，怎么通过小的状态，来算大的状态
 * 3. 初始化 Intialization
 *    最极限的小状态是什么，起点
 * 4. 答案 Answer
 *    最大的那个状态是什么，终点
 *  
 */
/**
 * 1. Matrix DP
 *  
 *    a> state: f[x][y] 表示我从起点走到坐标 x,y...
 *    b> function: 研究走到 x,y 这个点之前的一步
 *    c> intialize: 起点
 *    d> answer: 终点
 *  
 * 2. Sequence DP
 *    
 *    a> state: f[i]表示“前i”个位置/数字/字母，（以第i个为）...
 *    b> function: f[i] = f[j]... j 是 i 之前的一个位置
 *    c> intialize: f[0]..
 *    d> answer: f[n-1]..
 */

/**
 * 
 * Minimum Path Sum
 * state: f[x][y] 从起点走到 x,y 的最短路径
 * function: f[x][y] = min(f[x-1][y], f[x][y-1]) + A[x][y]
 * intialize: f[0][0] = A[0][0]
 *            // f[i][0] = sum(0,0 -> i,0)
 *            // f[0][j] = sum(0,0 -> 0,j)
 * answer: f[n-1][m-1] 
 */

/**
 * 
 * Jump game 
 * state: f[i] 代表我能否从起点跳到第i个位置
 * function: f[i] = OR(f[j],j<i && j能跳到i)
 * intialize: f[0] = true
 * answer: f[n-1]
 * 
 * Jump game II
 * state: f[i] 代表我跳到这个位置最少需要几步
 * function: f[i] = min(f[j]+1,j<i && j能够跳到i)
 * intialize: f[0] = 0
 * answer: f[n-1]
 */


//  分治法

// 记忆化搜索
// Memorization Search
// ---->  动态规划  的递归实现方式

/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function (triangle) {
  let hash = {}
  let n = triangle.length
  return dfs(0, 0, triangle, hash)

  function dfs(x, y) {
    if (x === n) {
      return 0
    }
    if (hash[x + '-' + y] !== undefined) {
      return hash[x + '-' + y]
    }
    // divide
    let left = dfs(x + 1, y)
    let right = dfs(x + 1, y + 1)
  
    //conquer
    hash[x + '-' + y] = Math.min(left, right) + triangle[x][y]
    return hash[x + '-' + y]
  }
}

// console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))

/**
 * @param {number[][]} triangle
 * @return {number}
 */

 var minimumTotal2 = function(triangle) {
  let n = triangle.length
  
  let f = []
  // f[i][j] 表示
  // 初始化
  f[n-1] = []
  for (let j = 0; j < n; j++) {
    f[n-1][j] = triangle[n-1][j]
  } 

  for (let i = n-2; i>=0; i--) {
    f[i] = []
    for (let j = 0; j <= i; j++) {
      f[i][j] = Math.min(f[i+1][j], f[i+1][j+1]) + triangle[i][j]
    }
  }
  return f[0][0]
};
console.log(minimumTotal2([[2],[3,4],[6,5,7],[4,1,8,3]]))