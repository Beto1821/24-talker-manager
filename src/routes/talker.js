const express = require('express');
const { readFile } = require('../utils/readFile');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
  const talkers = await readFile();
  console.log(talkers);
  return res.status(200).json(talkers);
  } catch (err) {
  return res.status(200).json([]);
  }
});

module.exports = router;