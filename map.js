const eqArrays = (arr1, arr2) => arr1.join() === arr2.join() ? true : false;

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2))
    ? console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`)
    : console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
};

const words = ["ground", "control", "to", "major", "tom"];

const nums = [1, 2, 3, 4, 5, 6];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + " Bowie");
const results3 = map(nums, num => num + 10);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ["ground Bowie", "control Bowie", "to Bowie", "major Bowie", "tom Bowie"]);
assertArraysEqual(results3, [11, 12, 13, 14, 15, 16]);