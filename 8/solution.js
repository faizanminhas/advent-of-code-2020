const { input } = require('./input');

const instructions = input.split('\n')
                          .map(x => ({
                              opcode: x.substring(0, 3),
                              arg: x.substr(4),
                              executed: false,
                            }));

let curr = 0;
let acc = 0;

while(instructions[curr].executed === false) {
  instructions[curr].executed = true;

  switch(instructions[curr].opcode) {
    case 'nop':
      curr++;
      break;
    case 'acc':
      acc += parseInt(instructions[curr].arg, 10);
      curr++;
      break;
    case 'jmp':
      curr += parseInt(instructions[curr].arg, 10);
      break;
  }
}

console.log('reached loop while acc =', acc);

