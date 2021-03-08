/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0
  if (haystack == null || needle == null) return -1
  let len1 = haystack.length
  let len2 = needle.length
  for (let i = 0; i < len1 - len2 + 1; i++) {
    for (let j = 0; j < len2; j++) {
      if (haystack[i + j] !== needle[j]) {
        break
      }
      if (j == len2 - 1) {
        return i
      }
    }
  }
  return -1
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  let result = []
  let list = []
  subsetsHelper(result, list, nums, 0)
  
  return result
};
function subsetsHelper (result, list, nums, pos) {
  result.push(list.concat())
  for (let i = pos; i < nums.length; i++) {
    list.push(nums[i])
    subsetsHelper(result, list, nums, i+1)
    list.pop()
  }
}

let res = subsets([1, 2, 3])

console.log(res)

/**
 * @param {number[]} nums [1, 2, 2]
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let result = []
  let list = []
  nums.sort()
  subsetsHelper2 (result, list, nums, 0)

  return result
};

function subsetsHelper2 (result, list, nums, pos, arr) {
  result.push(list.concat())

  for (let i = pos; i < nums.length; i++) {
    if (i !== pos && nums[i] === nums[i - 1]) {
      continue
    }
    list.push(nums[i])
    subsetsHelper2(result, list, nums, i+1)
    list.pop()
  }
}

let res2 = subsetsWithDup([1, 2, 2])
console.log(res2)
