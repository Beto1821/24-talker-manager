const express = require('express');
const emailValid = require('../middlewares/emailValid');
const generateToken = require('../utils/generateToken');

const login = express.Router();

login.post('/', emailValid, (req, res) => {
    const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = login;