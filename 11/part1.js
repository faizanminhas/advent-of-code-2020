const { input } = require('./input');

function within(from, to, val) {
  return val >= from && val <= to;
}

function numAdjacentSeatsOccupied(x, y, seats) {
  let numOccupied = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if ((i !== 0 || j !== 0) && within(0, seats.length - 1, x + i) && within(0, seats[x].length - 1, y + j)) {
        numOccupied += seats[x + i][y + j] === '#' ? 1 : 0;
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
          newSeats[x] += numAdjacentSeatsOccupied(x, y, seats) >= 4 ? 'L' : '#';
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
