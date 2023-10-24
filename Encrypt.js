
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const alg = 'aes-256-ctr';
const pwd = '12345';

function crypt(txt) {
  const cipher = crypto.createCipher(alg, pwd);
  const crypted = cipher.update(txt, 'utf8', 'hex');
  return crypted;
}

function decrypt(txt) {
  const decipher = crypto.createDecipher(alg, pwd);
  const plain = decipher.update(txt, 'hex', 'utf8');
  return plain;
}

rl.question('What is your name? ', (name) => {
const encryptedName = crypt(name);

rl.question('What course do you take? ', (course) => {
const encryptedCourse = crypt(course);

rl.question('Tell me about you. ', (description) => {
const encryptedDescription = crypt(description);

console.log('ENCRYPTED DATA\nEncrypted name: ' + encryptedName + '\nEncrypted course ' + encryptedCourse + '\nEncrypted description: ' + encryptedDescription);

rl.question('Do you want to decrypt the code? (y/n) ', (answer) => {
  if (answer.toLowerCase() === 'y') {
    const decryptedName = decrypt(encryptedName);
    const decryptedCourse = decrypt(encryptedCourse);
    const decryptedDescription = decrypt(encryptedDescription);

  console.log('Decrypted course: ' + decryptedCourse + '\nDecrypted name: ' + decryptedName + '\nDecrypted description: ' + decryptedDescription);
  }
    else if (answer.toLowerCase() === 'n') {
    rl.close();
  } 
  else {
    console.log('Invalid response. Please respond with "y" or "n".');
    rl.close();
  }


rl.close();
});
});
});
});