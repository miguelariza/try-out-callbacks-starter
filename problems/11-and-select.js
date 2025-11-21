/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]

*******************************************************************************/

let andSelect = function(arr, cb1, cb2) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb1(arr[i]) === true && cb2(arr[i]) === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

let isDivisibleByTwo = function (num){
  //console.log(num);
  let toStr = String(num);
  let toArr = toStr.split('');
  let toNums = toArr.map(Number);
  if (toNums[toNums.length - 1] % 2 === 0) {
    return true;
  }
  return false;
};

let isDivisibleByThree = function(num){
  let toStr = String(num);
  let toArr = toStr.split('');
  let toNums = toArr.map(Number);
  let sumDigits = 0;
  toNums.forEach(function (digit) {
    sumDigits += digit;
  });
  if (sumDigits % 3 === 0) {
    return true;
  }
  return false;
};

let result = andSelect([12, 20, 36, 45, 54, 62, 78, 91, 108, 111, 126, 150, 215, 302, 500], isDivisibleByTwo, isDivisibleByThree);
console.log(result);

// [12, 20, 36, 45, 54, 62, 78, 91, 108, 111, 126, 150, 215, 302, 500]

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
