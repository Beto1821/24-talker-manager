const fs = require('fs/promises');
const { readFile } = require('./readFile');

const delUser = async (req, res) => {
const id = Number(req.params.id);
const talkers = await readFile();
const delTalkers = talkers.filter((e) => e.id !== id);
const path = 'src/talker.json';
await fs.writeFile(path, JSON.stringify(delTalkers));
return res.status(204).json();
};

module.exports = { delUser };