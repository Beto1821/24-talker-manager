const express = require('express');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const { application } = require('express');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (req, res) => {
  const path = 'src/talker.json';
  console.log(path);
  const talkers = JSON.parse(await fs.readFile(path));
  if (talkers.length > 0) {
  return res.status(200).json(talkers);
  }
  return res.status(200).json([]);
});
