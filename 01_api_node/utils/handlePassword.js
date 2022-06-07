const bcryptjs = require("bcryptjs");

/**
 * It takes a password, hashes it, and returns the hash
 * @param password - The password to be encrypted.
 * @returns The hash of the password.
 */
const encrypt = async (password) => {
  const hash = await bcryptjs.hash(password, 10);
  return hash;
};

/**
 * It takes a password and a hash, and returns true if the password matches the hash, and false if it
 * doesn't
 * @param password - The password to compare.
 * @param hash - The hash that was created by the hash() function.
 * @returns A promise that resolves to a boolean.
 */
const compare = async (password, hash) => {
  return await bcryptjs.compare(password, hash);
};

module.exports = { encrypt, compare };
