const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    console.log(object1[key]);
    console.log(object2[key]);

    if (typeof object1[key] === 'object' && typeof object2[key] === 'object' && (!Array.isArray(object1[key])) && (!Array.isArray(object2[key]))) {
      return eqObjects(object1[key], object2[key]);

    } else if ((Array.isArray(object1[key]) && (Array.isArray(object2[key])))) { // if both arrays
      if (!eqArrays(object1[key], object2[key])) // if eqArrays test results in false
        return false;

    } else if (object1[key] !== object2[key]) {
      return false;
    } 
  }
  return true;
};

module.exports = eqObjects;