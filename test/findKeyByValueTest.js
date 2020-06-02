const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {

  it('returns "drama" when passed the object "bestTVShowsByGenre" and the string "The Wire"', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns undefined when passed the object "bestTVShowsByGenre" and the string "That 70s Show"', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);
  });
});