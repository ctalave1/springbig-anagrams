const express= require('express');

const { groupAnagrams } = require('../../services/AnagramsService');

const router = express.Router();

router.get('/', (req, res) => {
  if (!req.query || !req.query.words) {
    return res.status(200).json({ anagrams: [] });
  }

  const words = req.query.words.split(',');

  const anagrams = groupAnagrams(words);

  return res.status(200).json({ anagrams });
});

module.exports = router;