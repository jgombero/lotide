const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

describe('#countOnly', () => {

  it('returns 1 when passed the value "Jason" from the object "firstNames', () => {
    assert.deepEqual(result1["Jason"], 1);
  });

  it('returns undefined when passed the value "Karima" from the object "firstNames', () => {
    assert.deepEqual(result1["Karima"], undefined);
  });

  it('returns 2 when passed the value "Fang" from the object "firstNames', () => {
    assert.deepEqual(result1["Fang"], 2);
  });
});