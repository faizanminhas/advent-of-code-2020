const { input } = require('./input')

const parsedInput = input.split('\n').map(x => parseInt(x, 10)).sort((a, b) => a - b);
const allInput = [0, ...parsedInput, Math.max(...parsedInput) + 3];
// Part 1
const eachCons = (array, num) => {
  return Array.from({ length: array.length - num + 1 },
    (_, i) => array.slice(i, i + num))
}

const joltDifferenceCounts = eachCons(allInput, 2).map(([a, b]) => b - a)
  .reduce((occurances, i) => {
    occurances[i] = (occurances[i] || 0) + 1;
    return occurances;
  }, { 1: 0, 3: 0 });

console.log(joltDifferenceCounts);
console.log(joltDifferenceCounts[1] * joltDifferenceCounts[3]);
