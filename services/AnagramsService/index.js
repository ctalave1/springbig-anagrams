const groupAnagrams = (words) => {
  let lettersMap = {};

  words.forEach(word => {
    const letters = word.split('').sort();

    if (!lettersMap[letters]) {
      lettersMap[letters] = [];
      lettersMap[letters].push(word);
      return;
    }

    lettersMap[letters].push(word);
  });

  return Object.values(lettersMap);
};

module.exports = {
  groupAnagrams
}