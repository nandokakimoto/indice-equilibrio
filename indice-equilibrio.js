var process = function(input) {
  var result = [],
      sumLeft = 0,
      sumRight = 0;

  for(var i=0; i<input.length; i++) {
    sumRight += input[i];
  }

  for(var i=0; i<input.length; i++) {
    if(i !== 0) sumLeft += input[i-1];
    sumRight -= input[i];
    if (sumLeft === sumRight) return i;
  }

  return -1;
}

module.exports = {
  process: process
};
