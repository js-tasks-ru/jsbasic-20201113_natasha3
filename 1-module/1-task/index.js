/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;
  
  for(i = 0; n > i; i++) {
    result *= n-i;
  };
  return result;
  
}
