const bcryptjs = require("bcryptjs");

const encrypt = async (password) => {
  const hash = await bcryptjs.hash(password, 10);
  return hash;
};

const compare = async (password, hash) => {
  return await bcryptjs.compare(password, hash);
};

module.exports = { encrypt, compare };
