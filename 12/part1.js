const { input } = require('./input');

const directions = input.split('\n').map(
  direction => ({
    action: direction[0],
    num: parseInt(direction.substring(1), 10)
  }));

const ANGLES = {
  0: 'E',
  90: 'N',
  180: 'W',
  270: 'S',
}


function move(direction, num) {
  let [dx, dy] = [0, 0];
  switch (direction) {
    case 'N':
      dy = num;
      break;
    case 'S':
      dy = -num;
      break;
    case 'E':
      dx = num;
      break;
    case 'W':
      dx = -num;
      break;
  }
  return [dx, dy];
}


let facing = 'E';
let angle = 0;
let [x, y] = [0, 0];

for (let { action, num } of directions) {
  switch (action) {
    case 'L':
      angle = (angle + num + 360) % 360;
      facing = ANGLES[angle];
      break;
    case 'R':
      angle = (angle - num + 360) % 360;
      facing = ANGLES[angle];
      break;
    case 'F':
      action = facing;
    // No break here! We continue to the default after setting the action accordingly
    default:
      const [dx, dy] = move(action, num);
      x += dx;
      y += dy;
  }
}

console.log(Math.abs(x) + Math.abs(y));
