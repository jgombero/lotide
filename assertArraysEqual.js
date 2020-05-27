const eqArrays = (arr1, arr2) => arr1.join() === arr2.join() ? true : false;

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2)) 
    ? console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`) 
    : console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);