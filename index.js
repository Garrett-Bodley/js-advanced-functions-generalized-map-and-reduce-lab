function map(array, block){
  let result = [];
  array.forEach(el => result.push(block(el)));
  return result
};

// function reduce(array, block, starting){
//   return starting != undefined ? array.reduce(block, starting) : array.reduce(block)
// };

function reduce(array, block, starting){
  let memo = !!starting ? starting : array[0];
  let i = !!starting ? 0 : 1;

  for (; i < array.length; i++){
    memo = block(array[i], memo)
  };
  return memo;
}

