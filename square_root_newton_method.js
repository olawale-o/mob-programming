const newtonSquareRoot = (n, tolerance = 0) => {
  if (n < 0) {
    throw new Error('The method supports only positive integers');
  }  
  // Handle edge case with finding the square root of zero.
  if (n === 0) {
    return 0;
  }
  let delta = 1 / (10 ** tolerance);

  let root = 1;

  while (Math.abs(n - (root ** 2)) > delta) {
    root -= ((root ** 2) - n) / (2 * root);
  }
  return Math.round(root * (10 ** tolerance)) / (10 ** tolerance);
}
module.exports = newtonSquareRoot;