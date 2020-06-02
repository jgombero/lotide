const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {

  it('returns true when passed { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it('returns false when passed { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it('returns false when passed { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});