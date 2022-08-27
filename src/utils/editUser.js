const fs = require('fs/promises');
const { readFile } = require('./readFile');

const editUser = async (req, res) => {
const id = Number(req.params.id);

const talkers = await readFile();

const update = { id, ...req.body };

talkers[id] = update;

const path = 'src/talker.json';
await fs.writeFile(path, JSON.stringify(talkers));
return res.status(200).json(talkers[id]);
};

module.exports = { editUser };