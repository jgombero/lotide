const eqArrays = (arr1, arr2) => arr1.join() === arr2.join() ? true : false;

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2)) 
    ? console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`) 
    : console.log(`❌❌❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
};

// Implement without which will return a subset of a given array, removing unwanted 
//  elements

// splice method
const sourceArray = function(source) {
  let output = [];
  for (let elem of source) {
    output.push(elem);
  }
  return output;
}

const without = function(source, itemsToRemove) {
  let output = sourceArray(source);
  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (output[i] === itemsToRemove[j]) {
        output.splice(i, (1));
      }
    }
  }
  return output;
};

/* push method
const exists = function (value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
const without = function (source, itemsToRemove) {
  const array = [];
  for (let i = 0; i < source.length; i++) {
    if (!exists(source[i], itemsToRemove)) {
      array.push(source[i]);
    }
  }
  return array;
}
*/

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);