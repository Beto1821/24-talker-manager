const express = require('express');
const { readFile } = require('../utils/readFile');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
  const talkers = await readFile();
  return res.status(200).json(talkers);
  } catch (err) {
  return res.status(200).json([]);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile();
  const talker = talkers.find((person) => person.id === Number(id));
  if (talker) {
  return res.status(200).json(talker);
  }
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

router.post('/',
    nameValid,
    ageValid,
    talkValid,
    watchedartValid,
    rateValid,
    toeknValid,
    userValid,
  );

module.exports = router;