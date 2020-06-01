const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, [2, [5, 6]], 3], [1, [2, [5, 6]], 3]), true);
assertEqual(eqArrays([[1, 2], [5, 6], 3], [1, [2, [5, 6]], 3]), false);