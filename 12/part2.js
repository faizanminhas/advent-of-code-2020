const { input } = require('./input');

const directions = input.split('\n').map(
  direction => ({
    action: direction[0],
    num: parseInt(direction.substring(1), 10)
  }));

let [waypointX, waypointY] = [10, 1];

let [x, y] = [0, 0];

for (let { action, num } of directions) {
  switch (action) {
    case 'N':
      waypointY += num;
      break;
    case 'S':
      waypointY += -num;
      break;
    case 'E':
      waypointX += num;
      break;
    case 'W':
      waypointX += -num;
      break;
    case 'L':
      for (let i = 0; i < num; i += 90) {
        [waypointX, waypointY] = [-waypointY, waypointX];
      }
      break;
    case 'R':
      for (let i = 0; i < num; i += 90) {
        [waypointX, waypointY] = [waypointY, -waypointX];
      }
      break;
    case 'F':
      x += waypointX * num;
      y += waypointY * num;
      break;
  }
}

console.log(Math.abs(x) + Math.abs(y));
