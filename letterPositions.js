const eqArrays = (arr1, arr2) => arr1.join() === arr2.join() ? true : false;

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2))
    ? console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`)
    : console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
};

const letterPositions = function(sentence) {
  const results = {};
  for (const i in sentence) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello my friend").m, [6]);