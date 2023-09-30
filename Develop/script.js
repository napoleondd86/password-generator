// Assignment Code
var generateBtn = document.querySelector("#generate");  //DONT TOUCH THIS LINE

function generatePassword () {

  //prompt  -- asks for info
  var name = prompt("what is upir name?")

//confirm  -- asks yes [confirm] or no [cancel]
var areThepackersAwesome = confirm("are the packers awesome?")


}




// DO NOT TOUCH Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
