// Assignment Code
var includeSymbols;
var includeLowerCase;
var includeUpperCase;
var includeNumbers;

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*(){}[]=<>/,.";

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
  let password = "";
  passwordLength();
  userInput();
  for (let i = 0; i <= password; i++) {
    if (includeLowerCase == true) {
      password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    }
    if (includeUpperCase == true) {
      password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    }
    if (includeNumbers == true) {
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    if (includeSymbols == true) {
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
  }
  return password;
}

function passwordLength() {
  var passwordLength = prompt(
    "How many characters would you like your password to be? Between 8 and 128."
  );
    
  //Making sure password length is between 8 and 128
  if (passwordLength >= 8 && passwordLength <= 128) {
    password.length = parseInt(passwordLength);
  } else if (passwordLength < 8 || passwordLength > 128) {
    prompt("Password must be between 8 and 128 characters.");
  }
}

function userInput() {
  if (
    confirm("Do you want to include special characters? Ok / Cancel.") == true
  ) {
    includeSymbols = true;
  } else {
    includeSymbols = false;
  }
  if (
    confirm("Do you want to include lowercase letters? Ok / Cancel.") == true
  ) {
    includeLowerCase = true;
  } else {
    includeLowerCase = false;
  }
  if (
    confirm("Do you want to include uppercase letters? Ok / Cancel.") == true
  ) {
    includeUpperCase = true;
  } else {
    includeUpperCase = false;
  }
  if (confirm("Do you want to include numbers? Ok / Cancel.") == true) {
    includeNumbers = true;
  } else {
    includeNumbers = false;
  }

}
