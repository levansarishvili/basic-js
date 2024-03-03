const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result;
  let index = email.lastIndexOf("@");

  result = email.slice(index + 1);

  return result;
}

module.exports = {
  getEmailDomain,
};
