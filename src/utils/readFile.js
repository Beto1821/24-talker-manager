const fs = require('fs/promises');

const readFile = async () => {
   const path = 'src/talker.json';
   const talkers = JSON.parse(await fs.readFile(path));
   return talkers;
};

module.exports = { readFile };
