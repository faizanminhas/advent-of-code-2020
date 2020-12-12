const { input } = require('./input');

function twoSum(nums, target) {
  for(let num of nums) {
    if (nums.has(target - num)) {
      return [num, target - num];
    }
  }
  return [];
}

const allNums = input.split('\n').map(x => parseInt(x, 10));

for(let i = 25; i < allNums.length; i++) {
  if(twoSum(new Set(allNums.slice(i - 25, i)), allNums[i])?.length === 0){
    console.log('the first number to not be a sum of the previous 25 is', allNums[i]);
    console.log('at pos', i)
  }
}

