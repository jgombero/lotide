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

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const elem in arr1) {

    if (Array.isArray(arr1[elem]) && Array.isArray(arr2[elem])) {
      return eqArrays(arr1[elem], arr2[elem]);

    } else if (arr1[elem] !== arr2[elem]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, [2, [5, 6]], 3], [1, [2, [5, 6]], 3]), true);
assertEqual(eqArrays([[1, 2], [5, 6], 3], [1, [2, [5, 6]], 3]), false);