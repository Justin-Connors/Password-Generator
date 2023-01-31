// Assignment Code
passArr = [];

var includeSymbols;
var includeLowerCase;
var includeUpperCase;
var includeNumbers;
var passwordLength;

var allowedValues = {
  lowerCase : "abcdefghijklmnopqrstuvwxyz",
  upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers : "0123456789",
  symbols : "!@#$%^&*(){}[]=<>/,."
}

var getRandCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length));

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
  password == getRandCharFromString(allowedValues.numbers);
  password == getRandCharFromString(allowedValues.lowerCase);
  password == getRandCharFromString(allowedValues.upperCase);
  password == getRandCharFromString(allowedValues.symbols);
  for (let i = 0; i < passwordLength; i++) {
    password += getRandCharFromString(Object.values(allowedValues).join(''));
  }
  return password;
}

function userInput() {
  passArr = [];

  passwordLength = parseInt(prompt("How many characters would you like your password to be? Between 8 and 128."));
    
  //Making sure password length is between 8 and 128 and is a number
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    prompt("Password must be a number between 8 and 128.");
  }

  if (confirm("Do you want to include special characters? Ok / Cancel.")) {
    passArr = passArr.concat(allowedValues.symbols);
  }
  if (confirm("Do you want to include lowercase letters? Ok / Cancel.")) {
    passArr = passArr.concat(allowedValues.lowerCase);
  } 
  if (confirm("Do you want to include uppercase letters? Ok / Cancel.")) {
    passArr = passArr.concat(allowedValues.upperCase);
  } 
  if (confirm("Do you want to include numbers? Ok / Cancel.")) {
    passArr = passArr.concat(allowedValues.numbers);
  } 
  return true;
}
