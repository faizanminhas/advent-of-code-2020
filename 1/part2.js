const { input } = require('./input')

const nums = new Set(input.split('\n').map(x => parseInt(x, 10)))

function twoSum(nums, target) {
  for(let num of nums) {
    if (nums.has(target - num)) {
      return [num, target - num];
      //console.log(`2020 = ${num} + ${2020 - num}, product = ${num * (2020-num)}}`);
    }
  }
  return [];
}

for (let num of nums) {
  let res = twoSum(nums, 2020 - num);
  if(res.length) {
    console.log(`nums = ${num}, ${res[0]}, ${res[1]}, product = ${num * res[0] * res[1]}`);

    process.exit(0);
  }
}

