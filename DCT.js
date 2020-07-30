let input = [7, 2, 5, 1, 6, 3];

function createTable(width, height, defaultValue) {
  let table = [];
  for (let i = 0; i < width; i++) {
    let arr = [];
    for (let j = 0; j < height; j++) {
      arr.push(defaultValue);
    }
    table.push(arr);
  }
  return table;
}

function createTraceTable(input = []) {
  let table = createTable(input.length, input.length, 0);
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (i == j || input[i] < input[j]) {
        table[i][j] = 1;
      }
    }
  }
  return table;
}

function trace(inp = [], traceTable, current, previousResult = []) {
  let result = previousResult.concat(inp[current]);
  console.log(result);
  for (let i = current + 1; i < inp.length; i++) {
    if (traceTable[current][i] == 1) {
      trace(inp, traceTable, i, result);
    }
  }
}

let traceTable = createTraceTable(input);
//log for better understading
//console.log(input);
//console.log(traceTable);
for (let i = 0; i < input.length; i++) {
  trace(input, traceTable, i, []);
}
