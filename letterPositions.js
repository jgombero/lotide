const letterPositions = function(sentence) {
  const results = {};

  for (const i in sentence) {

    if (sentence[i] !== ' ') {

      if (results[sentence[i]]) {
        results[sentence[i]].push(i);

      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;