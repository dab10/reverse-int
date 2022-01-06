module.exports = function reverse (n) {
  let reverseN = Math.abs(n) + '';
  let result = '';  

  for (i = 0; i < reverseN.length; i = i + 1) {
    result = `${reverseN[i]}${result}`;
  }
  return +result;
}
