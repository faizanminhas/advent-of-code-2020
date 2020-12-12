const { input } = require('./input')

const nums = new Set(input.split('\n').map(x => parseInt(x, 10)))

function twoSum(nums, target) {
  for(let num of nums) {
    if (nums.has(target - num)) {
      return [num, target - num];
    }
  }
  return [];
}

console.log("the solution is", twoSum(nums, 2020), 'product is', twoSum(nums, 2020).reduce((x, i) => x * i, 1))

