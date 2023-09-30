// Assignment Code
var generateBtn = document.querySelector("#generate");  //DONT TOUCH THIS LINE

function generatePassword () {

  //prompt  -- asks for info
  var name = prompt("what is your name?");
  var length = "";
  var specialChars = "!#$%&()*+-/=@<>^~|";
  var numbersStr = "0123456789";
  var upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerStr = "abcdefghijklmnopqrstuvwxyz";
  var newPassword = "";
  var charArray = [specialChars, numbersStr, upperStr, lowerStr]
  function passwordLength(){
    while (!(length >= 8 && length <= 128)){
      var length = prompt("Enter a number between 8 and 128");
      if (!(length >= 8 && length <= 128)) {
        alert("Please enter a number between 8 and 128.");
      }
    }
  }
  passwordLength()

  //confirm  -- asks yes [confirm] or no [cancel]
  var special = confirm("Do you want to include special characters?");
  var upperCase = confirm("Do you want to include upper case letters?");
  var lowerCase = confirm("Do you want to include lower case letters?");
  var numbers = confirm("Do you want to include numbers?");

  console.log(name)
  console.log(numbers)
  console.log(length)
  console.log(special)
  console.log(upperCase)
  console.log(lowerCase)

  function random(){
    Math.floor(Math.random() * length.length);
  }

  for (var i = 0; i < length.length; i++) {
    
  }





}




// DO NOT TOUCH Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
