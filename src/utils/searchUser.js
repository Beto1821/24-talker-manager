const { readFile } = require('./readFile');

const searchName = async (req, res) => {
const { q } = req.query;
const talkers = await readFile();
const search = talkers.filter((e) => e.name.includes(q));

    if (!q || q.length === 0) {
      return res.status(200).json(talkers); 
    }
    if (!search) {
      return res.status(200).json([]);
    }
  return res.status(200).json(search);
};

module.exports = { searchName };
