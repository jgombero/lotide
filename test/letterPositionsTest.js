const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {

  it('returns ["6"] when passed "hello my friend"', () => {
    assert.deepEqual(letterPositions("hello my friend").m, ["6"]);
  });
});