const eqArrays = (arr1, arr2) => arr1.join() === arr2.join() ? true : false;

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2))
    ? console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`)
    : console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
};

const takeUntil = function(array, callback) {
  const output = [];
  for (const elem of array) {
    if (!callback(elem)) {
      output.push(elem)
    } else {
      break;
    }
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);