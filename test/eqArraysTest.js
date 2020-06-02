const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {

  it('returns true when passed [1, [2, [5, 6]], 3], [1, [2, [5, 6]], 3]', () => {
    assert.deepEqual(eqArrays([1, [2, [5, 6]], 3], [1, [2, [5, 6]], 3]), true);
  });

  it('returns false when passed [[1, 2], [5, 6], 3], [1, [2, [5, 6]], 3]', () => {
    assert.deepEqual(eqArrays([[1, 2], [5, 6], 3], [1, [2, [5, 6]], 3]), false);
  });
});