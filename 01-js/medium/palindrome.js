/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let alphanumericChars = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let revstr = alphanumericChars.split('').reverse().join('');
  return alphanumericChars === revstr;
}

module.exports = isPalindrome;
