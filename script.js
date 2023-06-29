'use strict';

// 1. Write a JavaScript program to calculate the factorial of a given non-negative integer.
// Sample Input: (5);
// Sample Output: 120
function factorial(n) {
  if (n === 0 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const number = 5;
console.log(factorial(number));

// 2. Write a JavaScript function to find the maximum element in an array.
// Sample Input: ([5, 2, 9, 1, 7]);
// Sample output: 9

function findMax() {
  const max = Math.max(...arr);
  return max;
}
const arr = [1, 2, 33, 88, 99, 4, 6];

console.log(findMax(arr));
// 3. Write a JavaScript program to remove a specific element from an array.
// Sample Input: ([1, 2, 3, 4, 5], 3);
// Sample Output: [1, 2, 4, 5]

const array = [1, 2, 45, 8, 9];
function removeEle(arr, ele) {
  return arr.filter((item) => item !== ele);
}

console.log(removeEle(array, 2));
// 4. Write a JavaScript program to find the second smallest element in an array.
// Sample Input: ([5, 2, 9, 1, 7]);
// Sample Output: 2
const numbers = [5, 99, 7, 98, 1];

function secondSmallNum(arr) {
  const sorted = arr.sort((a, b) => a - b);
  return sorted[1];
}

const smallNum = secondSmallNum(numbers);
console.log(smallNum);

// 5. Write a JavaScript function to check if two arrays are equal (contain the same elements in
// the same order).
// Sample Input: ([1, 2, 3], [1, 2, 3]);
// Sample output: true

const arrOne = [5, 6, 7, 8, 9];

const arrTwo = [5, 6, 7, 8, 9];

function checkEqual(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
}

const result = checkEqual(arrOne, arrTwo);
console.log(result);
// 6. Write a JavaScript program to find the maximum sum subarray within a given array of
// numbers.
// Sample Input: ([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// Sample Ouput: 6

function maxSudArrSum(arr) {
  let maxSum = arr[0];
  let sum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum = Math.max(arr[i], sum + arr[i]);
    maxSum = Math.max(maxSum, sum);
  }

  if (maxSum < 0) {
    return 0;
  }
  return maxSum;
}

const num = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSum = maxSudArrSum(num);
console.log(maxSum);

// 7. Write a JavaScript function to calculate the power of a number recursively.
// Sample Input: (2, 4);
// Sample Output: 16

function calcPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * calcPower(base, exponent - 1);
}

const base = 4;
const exponent = 4;

const power = calcPower(base, exponent);
console.log(power);

// 8. Write a JavaScript function to sort an array of numbers in ascending order.
// Sample Input:5,2,9,1,8
// Sample Ouput:1,2,5,8,9

function sortAscending(num) {
  const numSort = num.sort((a, b) => a - b);
  return numSort;
}

const numberArr = [55, 22, 4, 8, 7, 66, 12, 3];
const order = sortAscending(numberArr);
console.log(order);
// 9. Write a JavaScript function tofind the number of occurrences of a substring in a given
// string.
// Sample Input: ("Hello, hello, hello", "hello");
// Sample Output: 3

function countOccurrences(str, substr) {
  const regex = new RegExp(substr, 'g');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

const string = 'ajay,ajay,mani,ajay';
const substring = 'ajay';
const occurrences = countOccurrences(string, substring);
console.log(occurrences);

// 10. Write a JavaScript function to find the intersection of two arrays without duplicates.
// Sample Input: ([1, 2, 2, 3], [2, 3, 4]);
// Sample Output: [2, 3]
function findIntersection(arr1, arr2) {
  const array = arr1.filter((item) => arr2.includes(item));
  return array;
}

const numArr1 = [1, 3, 5, 5, 8, 99, 9, 89];
const numArr2 = [2, 3, 99, 9, 6, 5];
const findDup = findIntersection(numArr1, numArr2);
console.log(findDup);