const eqArrays = (arr1, arr2) => arr1.join() === arr2.join() ? true : false;

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2))
    ? console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`)
    : console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
};

const middle = function(array) {
  let output = [];
  if (array.length < 3) {
    return output;
  } else if (array.length % 2 !== 0) {
    output.push(array[(array.length - 1) / 2]);
  } else if (array.length % 2 === 0) {
    output.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return output;
};

console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
