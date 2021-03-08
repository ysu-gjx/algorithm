//给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，
//写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

/**
 * 1. start + 1 < end
 * 2. start + (end - start) / 2
 * 3. nums[mid]  ==, <, >
 * 4. nums[start] nums[end]?target
 * 
 */
  // 二分法 O(logN)
  var search = function(nums, target) {
    if (nums.length === 0) return -1
    let end = nums.length - 1
    let start = 0
    let mid
    while (start + 1 < end) {
      mid = parseInt(start + (end - start) / 2)

      if (nums[mid] === target) {
        end = mid
      } else if (nums[mid] > target) {
        end = mid
      } else {
        start = mid
      }
    }
    if (nums[start] === target) {
      return start
    }
    if (nums[end] === target) {
      return end
    }

    return -1
  };


const nums = [-1,0,3,5,9,12]

console.log(search(nums, 9))
console.log(search(nums, 2))
console.log(search(nums, -1))
console.log(search(nums, 12))

// ----------------------
// 相同类型  Binary Search
// Search for a Range
// Search Insert Position
// search-a-2d-matrix
// search-a-2d-matrix-ii  矩阵对角线二分法
// first-bad-version
// find-peak-element
// find-minimum-in-rotated-sorted-array   黑盒测试
// search-in-rotated-sorted-array  
// median-of-two-sorted-arrays

var searchInsert = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  let mid 

  while (start + 1 < end) {
    mid = parseInt(start + (end - start) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid
    } else {
      end = mid
    }
  }

  if (nums[start] >= target) {
    return start
  } else if (nums[end] < target) {
    return end + 1
  } else {
    return end
  }
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
  var searchMatrix = function(matrix, target) {
    let row = matrix.length - 1
    let column = 0
    const maxColumn = matrix[0].length
    let mid

    while(true) {
      console.log('1111', row, column)
      if (row < 0 || column >= maxColumn) {
        return false
      }
      mid = matrix[row][column]

      if (mid === target) {
        return true
      } else if (mid < target) {
        column++
      } else {
        row--
      }
    }
  };
  let m = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
  // searchMatrix(m, 5)

  var findMin = function(nums) {
    let start = 0
  let end = nums.length - 1
  let mid

  while(start + 1 < end) {
    mid = start + parseInt((end - start) / 2)

    nums[end] > nums[mid] ? end = mid : start = mid
  }
  return Math.min(nums[start], nums[end])
  };
  findMin([11,13,15,17])

  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchFromRotateArray = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  let mid

  while (start + 1 < end) {
    mid = start + parseInt((end - start) / 2)

    if (nums[mid] === target) {
      return mid
    }
    if (nums[start] < nums[mid]) {
      if (nums[start] < target && nums[mid] > target) {
        end = mid
      } else {
        start = mid
      }
    } else {
      if (nums[end] > target && nums[mid] > target) {
        end = mid
      } else {
        start = mid
      }
    }
  }
};

/**merge-sorted-array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
  var merge = function(nums1, m, nums2, n) {
    let i = 0
    let j = 0
    let res = []
    if (n === 0) return nums1
    while (i < m || j < n) {
      if (nums1[i] <= nums2[j] && i !== m) {
        res.push(nums1[i])
        i++
      } else {
        res.push(nums2[j])
        j++
      }
    }
    return res
  };

  console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
  console.log(merge([1],1,[],0))

/** median-of-two-sorted-arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
*/

// 从2个升序数组中  找第K大的数字
function findKth (A, B, k) {
  let m = A.length - 1
  let n = B.length - 1
  let k1 = parseInt(m/2)
  let k2 = parseInt(n/2)
  let aStart = 0
  let bStart = 0

  while (k1 > 0) {
    if (A[k1] <= B[k2]) {
      aStart = k1
      k1 = parseInt((m - aStart)/2)
    } else {
      bStart = k2
      k2 = parseInt((n - bStart)/2)
    }
    if (k2 === 0) {
      return A[k - n]
    }
    if (k1 === 0) {
      return B[k - m]
    }
  }
}  
  