const express= require('express');

const { groupAnagrams } = require('../../services/AnagramsService');

const router = express.Router();

router.get('/', (req, res) => {
  if (!req.query || !req.query.words) {
    return res.status(200).json({ anagrams: [] });
  }

  let words = req.query.words.split(',');

  words = words.map(word => word.toLowerCase());

  const anagrams = groupAnagrams(words);

  return res.status(200).json({ anagrams });
});

module.exports = router;