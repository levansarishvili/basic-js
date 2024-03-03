const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];
      if (char >= "A" && char <= "Z") {
        const shift = key[j % key.length].charCodeAt() - "A".charCodeAt();
        const encryptedChar = String.fromCharCode(
          ((char.charCodeAt() - "A".charCodeAt() + shift) % 26) +
            "A".charCodeAt()
        );
        encryptedMessage += encryptedChar;
        j++;
      } else {
        encryptedMessage += char;
      }
    }

    return this.isDirect
      ? encryptedMessage
      : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = "";

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
      if (char >= "A" && char <= "Z") {
        const shift = key[j % key.length].charCodeAt() - "A".charCodeAt();
        const decryptedChar = String.fromCharCode(
          ((char.charCodeAt() - "A".charCodeAt() + 26 - shift) % 26) +
            "A".charCodeAt()
        );
        decryptedMessage += decryptedChar;
        j++;
      } else {
        decryptedMessage += char;
      }
    }

    return this.isDirect
      ? decryptedMessage
      : decryptedMessage.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
