/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let num = x.toString().split("").join("");
  let numReversed = x.toString().split("").reverse().join("");
  if (numReversed === num) {
    return true;
  } else {
    return false;
  }
};

isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);
