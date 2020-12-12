const { input } = require('./input');

const getInstructions = () => input.split('\n')
  .map(x => ({
    opcode: x.substring(0, 3),
    arg: x.substr(4),
    executed: false,
  }));

function executeProgram(instructions) {
  let curr = 0;
  let prevCurr = 0;
  let acc = 0;
  while(curr < instructions.length && instructions[curr].executed === false) {
    instructions[curr].executed = true;

    switch(instructions[curr].opcode) {
      case 'nop':
        prevCurr = curr;
        curr++;
        break;
      case 'acc':
        acc += parseInt(instructions[curr].arg, 10);
        prevCurr = curr;
        curr++;
        break;
      case 'jmp':
        prevCurr = curr;
        curr += parseInt(instructions[curr].arg, 10);
        break;
    }
  }
  return [curr === instructions.length, acc]
}
let instructions = getInstructions();

// Totally bruteforcing it, why not?
for(let i = 0; i < instructions.length; i++) {

  if(instructions[i].opcode !== 'jmp') {
    continue;
  }

  instructions[i].opcode = 'nop';
  const [finishedExecuting, accValue] = executeProgram(instructions);
  if (finishedExecuting) {
    console.log('acc value was', accValue);
    process.exit(0);
  }

  instructions = getInstructions();
}


