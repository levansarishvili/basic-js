const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let str = n.toString();

  for (let i = 0; i < str.length; i++) {
    const currentNum = Number(str.slice(0, i) + str.slice(i + 1));
    if (currentNum > result) {
      result = currentNum;
    }
  }

  return result;
}

module.exports = {
  deleteDigit,
};
