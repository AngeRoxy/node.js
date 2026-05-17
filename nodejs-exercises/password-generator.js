// 4 - Password Generator
const generator = require("generate-password");

function generateRandomPassword() {
  const password = generator.generate({
    length: 16,       // password length
    numbers: true,    // include numbers
    symbols: true,    // include special characters
    uppercase: true,  // include uppercase letters
    lowercase: true,  // include lowercase letters
    strict: true,     // enforce all rule types are present
  });

  return password;
}

const myPassword = generateRandomPassword();
console.log("Generated Password:", myPassword);