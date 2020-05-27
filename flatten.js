const eqArrays = (arr1, arr2) => arr1.join() === arr2.join() ? true : false;

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2)) 
    ? console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`) 
    : console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
};

// Create a function flatten which will take in an array containing elements including
//  nested arrays of elements, and return a "flattened" version of the array.

// Loops and Conditionals
const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i][j]; j++) {
        flatArray.push(array[i][j]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};

/*
Concat and Spread Operator
const flatten = array => [].concat(...array); 
*/

flatten([1, 2, [3, 4], 5, [6]]);

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])