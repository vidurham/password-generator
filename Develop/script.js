var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passwordLength = ""
var getPasswordLength = function () {
  var passwordLength = window.prompt("How many characters would you like your password to be? (8-128 characters)");
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid number of characters! Please enter a number between 8 - 128")
    getPasswordLength()
  }
  else {
  }
}
getPasswordLength()  

console.log(passwordLength)

var upperCaseConfirm = window.confirm("Would you like there to be uppercase characters in your password?")

var numberConfirm = window.confirm("Would you like there to be numbers in your password?")

var specialConfirm = window.confirm("Would you like there to be special characters in your password?")



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
