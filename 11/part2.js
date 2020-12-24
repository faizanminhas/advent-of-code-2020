const { input } = require('./input');

function within(from, to, val) {
  return val >= from && val <= to;
}

function numAdjacentSeatsOccupied(x, y, seats) {
  let numOccupied = 0;
  let directionDeltas = [
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // up
    [0, 1], // down
    [-1, -1], // top left
    [1, 1], // top right
    [-1, 1], // bottom left
    [1, -1], // bottom right
  ];

  for (const [dx, dy] of directionDeltas) {
    for (let i = dx, j = dy; within(0, seats.length - 1, x + i) && within(0, seats[x].length - 1, y + j); i += dx, j += dy) {
      if (['#', 'L'].includes(seats[x + i][y + j])) {
        numOccupied += seats[x + i][y + j] === '#' ? 1 : 0;
        break;
      }
    }
  }

  return numOccupied;
}

function simulateRound(seats) {
  const newSeats = [];

  for (let x = 0; x < seats.length; x++) {
    newSeats.push('');

    for (let y = 0; y < seats[x].length; y++) {
      switch (seats[x][y]) {
        case '.':
          newSeats[x] += '.';
          break;
        case '#':
          newSeats[x] += numAdjacentSeatsOccupied(x, y, seats) >= 5 ? 'L' : '#';
          break;
        case 'L':
          newSeats[x] += numAdjacentSeatsOccupied(x, y, seats) === 0 ? '#' : 'L';
          break;
      }
    }
  }

  return newSeats;
}

let seats = input.split('\n');
let newSeats = simulateRound(seats);

while (seats.join('\n') !== newSeats.join('\n')) {
  seats = newSeats;
  newSeats = simulateRound(newSeats);
}

console.log(seats.join('\n').match(/#/g).length)
