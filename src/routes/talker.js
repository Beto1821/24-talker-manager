const express = require('express');
const { readFile } = require('../utils/readFile');
const nameValid = require('../middlewares/nameValid');
const ageValid = require('../middlewares/ageValid');
const talkValid = require('../middlewares/talkValid');
const watchedAtValid = require('../middlewares/watchedAtValid');
const rateValid = require('../middlewares/rateValid');
const tokenValid = require('../middlewares/tokenValid');
const { addUser } = require('../utils/addUser');
const { editUser } = require('../utils/editUser');
const { delUser } = require('../utils/delUser');
const { searchName } = require('../utils/searchName');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
  const talkers = await readFile();
  return res.status(200).json(talkers);
  } catch (err) {
  return res.status(200).json([]);
  }
});

router.get(
  '/search',
  tokenValid,
  searchName,
);

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile();
  const talker = talkers.find((person) => person.id === Number(id));
  if (talker) {
  return res.status(200).json(talker);
  }
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

router.post(
    '/',
    tokenValid,
    nameValid,
    ageValid,
    talkValid,
    watchedAtValid,
    rateValid,
    addUser,
  );

router.put(
    '/:id',
    tokenValid,
    nameValid,
    ageValid,
    talkValid,
    watchedAtValid,
    rateValid,
    editUser,
  );

router.delete(
  '/:id',
  tokenValid,
  delUser,
);

module.exports = router;