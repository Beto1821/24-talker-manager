const fs = require('fs/promises');
const { readFile } = require('./readFile');

const addUser = async (req, res) => {
  const newUser = req.body;
  const data = await readFile();
  newUser.id = data.length + 1;

  data.push(newUser);
  const path = 'src/talker.json';
  await fs.writeFile(path, JSON.stringify(data));
  return res.status(201).json(newUser);
};

module.exports = { addUser };