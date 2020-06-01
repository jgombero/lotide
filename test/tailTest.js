const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('returns "Lighthouse" as the first element when passed ["Hello", "Lighthouse", "Labs]', () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const expected = 'Lighthouse'

    assert.strictEqual(tail(input)[0], expected);
  });

  it('returns "Labs" as the second element when passed ["Hello", "Lighthouse", "Labs"]', () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const expected = "Labs";

    assert.strictEqual(tail(input)[1], expected);
  });

  it('returns its original length of 3 when passed through the function', () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    tail(input);
    const expected = 3;

assert.strictEqual(input.length, expected);
  });
});