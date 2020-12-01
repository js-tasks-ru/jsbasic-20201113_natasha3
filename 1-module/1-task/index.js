/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
 
  for (let n = 0; n < 6; n++) {
    
    if (n / 2 != 0 && n % 2 == 0) continue;
    alert(n);
  }

  let result = n;
  for(let i = n - 1; i >= 1; --i) {
    result *= i;
  }

  return result;

}
