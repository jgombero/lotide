const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const elem in arr1) {

    if (Array.isArray(arr1[elem]) && Array.isArray(arr2[elem])) {
      return eqArrays(arr1[elem], arr2[elem]);

    } else if (arr1[elem] !== arr2[elem]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;