// global variables
var passwordLength;

// global const with password characters
const allowedValues = {
  lowerCase : "abcdefghijklmnopqrstuvwxyz",
  upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers : "0123456789",
  symbols : "!@#$%^&*(){}[]=<>/,."
}

const getRandCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length));

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //Adding values to password
  var password = "";
  userInput();
  for (let i = 0; i < passwordLength; i++) {
    password += getRandCharFromString(Object.values(allowedValues).join(''));
  }
  return password;
}

function userInput() {
  //asking user for thier desired password length and setting it to a INTEGER value
  passwordLength = parseInt(prompt("How many characters would you like your password to be? Between 8 and 128."));
    
  //Making sure password length is between 8 and 128 and is a number
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    prompt("Password must be a number between 8 and 128.");
  }
  //Checking if user wants symbols, if false set object string to empty string
  if (confirm("Do you want to include special characters? Ok / Cancel.") == true) {
    password == getRandCharFromString(allowedValues.symbols);
  } else {
    allowedValues.symbols = "";
  }
  //checking if user wants lowercase letters, if false set object string to empty string
  if (confirm("Do you want to include lowercase letters? Ok / Cancel.") == true) {
    password == getRandCharFromString(allowedValues.lowerCase);
  } else {
    allowedValues.lowerCase = "";
  }
  //checking if user wants uppercase letters, if false set object string to empty string
  if (confirm("Do you want to include uppercase letters? Ok / Cancel.") == true) {
    password == getRandCharFromString(allowedValues.upperCase);
  } else {
    allowedValues.upperCase = "";
  }
  //checking if user wants numbers, if false set object string to empty string
  if (confirm("Do you want to include numbers? Ok / Cancel.") == true) {
    password == getRandCharFromString(allowedValues.numbers);
  }  else {
    allowedValues.numbers = "";
  }

  return true;
}
