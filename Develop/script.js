function generatePassword() {
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var characters = ""
var password = ""
  
  var passwordLength = window.prompt("How many characters would you like your password to be? (8-128 characters)");
    passwordLength = parseInt(passwordLength)
    console.log(passwordLength)
    if (isNaN(passwordLength)) {
      window.alert("Invalid response! Please enter a number between 8 - 128")
      generatePassword()
    }
    else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid number of characters! Please enter a number between 8 - 128")
      generatePassword()
    }
    else {
      var lowerCaseConfirm = window.confirm("Would you like there to be lowercase characters in your password?")
        if (lowerCaseConfirm) {
          characters += lowercase
          console.log(characters)
        }
      var upperCaseConfirm = window.confirm("Would you like there to be uppercase characters in your password?")
        if (upperCaseConfirm) {
          characters += uppercase
          console.log(characters)
        }
      var numberConfirm = window.confirm("Would you like there to be numbers in your password?")
        if (numberConfirm) {
          characters += numbers
          console.log(characters)
        }
      var specialConfirm = window.confirm("Would you like there to be special characters in your password?")
        if (specialConfirm) {
          characters += special
          console.log(characters)
        }
        for (var i = 0; i < passwordLength; i++) {
          password += characters.charAt(Math.floor(Math.random()*characters.length))
        }
        console.log(password)
        return password;
  }
}
 



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
