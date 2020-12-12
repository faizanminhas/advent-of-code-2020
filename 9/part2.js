const { input } = require('./input');

const sum = nums => nums.reduce((t, i) => t + i, 0);

function contiguousSum(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      let range = nums.slice(i, j);
      if(sum(range) === target) {
        return range;
      }
    }
  }
}

const allNums = input.split('\n').map(x => parseInt(x, 10));
let i = 683;
const sol = contiguousSum(allNums.slice(0, i), allNums[i]);
console.log(sol);
console.log('the min is', Math.min(...sol));
console.log('the max is', Math.max(...sol));
if (sol)
  console.log('the sum is', Math.min(...sol) + Math.max(...sol));

