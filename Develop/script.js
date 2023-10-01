// Assignment Code
var generateBtn = document.querySelector("#generate");  //DONT TOUCH THIS LINE

function generatePassword () {

  //prompt  -- asks for info
  var name = prompt("what is your name?");
  var length = "";
  
  
  function passwordLength(){
    while (!(length >= 8 && length <= 128)){
      length = prompt("Enter a number between 8 and 128");
      if (!(length >= 8 && length <= 128)) {
        alert("Please enter a number between 8 and 128.");
      }
    }
  }
  passwordLength()
  
  var specialCharsStr = "!#$%&()*+-/=@<>^~|";
  var numbersStr = "0123456789";
  var upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerStr = "abcdefghijklmnopqrstuvwxyz";
  var newPassword = "";
  var charArray = [specialCharsStr, numbersStr, upperStr, lowerStr]
  var randomArray = charArray[random(charArray.length)]
  
  //confirm  -- asks yes [confirm] or no [cancel]
  var special = confirm("Do you want to include special characters?");
  var upperCase = confirm("Do you want to include upper case letters?");
  var lowerCase = confirm("Do you want to include lower case letters?");
  var numbers = confirm("Do you want to include numbers?");

  console.log(name);
  console.log(length);
  console.log(numbers);
  console.log(special);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(randomArray);

  function random(i){
    return Math.floor(Math.random() * i);
  }

  //STILL NEED TO CHANGE BASED ON USER PREFERENCES
  for (var i = 0; i < length; i++) {
    if (i === 0) {
      newPassword += specialCharsStr[random(specialCharsStr.length)]
    } else if(i === 1) {
      newPassword += numbersStr[random(numbersStr.length)]
    } else if (i === 2) {
      newPassword += upperStr[random(upperStr.length)]
    } else if (i === 3 ) {
      newPassword += lowerStr[random(lowerStr.length)]
    } else {
      newPassword += randomArray[random(randomArray.length)]}; 
  }




  return newPassword
}




// DO NOT TOUCH Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
