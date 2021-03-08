/**
 * @param {string} digits
 * @return {string[]}
 */
let obj = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}
var letterCombinations = function(digits) {
  let nums = digits.split('').map(t => obj[t])

  // let result = nums.reduce((acc, cur) => {
  //   if (!acc.length) {
  //     acc = [...cur]
  //   } else {
  //     let res = []
  //     acc.forEach(item => {
  //       for (let t of cur) {
  //         res.push(item + t)
  //       }
  //     })
  //     acc = res
  //   }
  //   return acc
  // }, [])


  let result = {}
  if (nums.length) {
    subsetsHelper(result, [], nums, 0)
  }
  console.log(result[nums.length-1])
  return result[nums.length-1] ? result[nums.length-1] : []
};

function subsetsHelper (result, list, nums, pos) {
  if (pos === 0) {
    result[pos] = [...nums[pos]]
  } else {
    result[pos] = []
  }
  
  for(let i = 0; i < list.length; i++) {
    for (let j = 0; j < nums[pos].length; j++) {
      result[pos].push((list[i]+nums[pos][j]))
    }
  }
  let acc = result[pos].concat()
  if (pos < nums.length - 1) {
    subsetsHelper(result, acc, nums, pos+1)
  }
}
letterCombinations('')

