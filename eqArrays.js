const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement a function eqArrays which takes in two arrays and returns true or false,
//  based on a perfect match.

const eqArrays = function(arr1, arr2) {
  return arr1.join() === arr2.join() ? true : false;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);