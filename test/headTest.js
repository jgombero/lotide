const head = require('../head');
const assertEqual = require('../assertEqual');

const example = head([1, 2, 3, 4, 5]);
assertEqual(example, 1);