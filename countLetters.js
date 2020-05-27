const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(string) {
  const output = {};
  for (const i of string) {
    if (i !== ' ') {
      if (output[i]) {
        output[i] += 1;
      } else {
        output[i] = 1;
      }
    }
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));