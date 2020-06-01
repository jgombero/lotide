# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jgombero/lotide`

**Require it:**

`const _ = require('@jgombero/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: asserts whether two primitive values are equal
* `assertArrayEquals(arr1, arr2)`: asserts whether two arrays are equal
* `eqArrays(arr1, arr2)`: returns true if two arrays are equal
* `head(arr)` : returns the head of an array
* `middle(arr)` : returns the middle element(s) of an array
* `tail(arr)` : returns the tail of an array