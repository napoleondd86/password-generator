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
  var charArray = []
  
  
  //confirm  -- asks yes [confirm] or no [cancel] and add to charArray if yes
  function userChoices() {
    var special = confirm("Do you want to include special characters?");
    if (special){
      charArray.push(specialCharsStr);
      newPassword += specialCharsStr[random(specialCharsStr.length)];
      console.log(newPassword)
    }

    var upperCase = confirm("Do you want to include upper case letters?");
    if (upperCase){
      charArray.push(upperStr);
      newPassword += upperStr[random(upperStr.length)];
      console.log(newPassword);
    }
    var lowerCase = confirm("Do you want to include lower case letters?");
    if (lowerCase){
      charArray.push(lowerStr);
      newPassword += lowerStr[random(lowerStr.length)];
      console.log(newPassword);
    }
    var numbers = confirm("Do you want to include numbers?");
    if (numbers){
      charArray.push(numbersStr);
      newPassword += numbersStr[random(numbersStr.length)];
      console.log(newPassword);
    }
    if (charArray.length === 0) {
      alert("You must choose at least one character set.");
      userChoices();
    }
  }
  userChoices();


  // console.log(name);
  // console.log(length);
  // console.log(special);
  // console.log(numbers);
  // console.log(upperCase);
  // console.log(lowerCase);
  // console.log(randomArray);
  // console.log(charArray)

  function random(i){
    return Math.floor(Math.random() * i);
  }
  
  for (var i = newPassword.length; i < length; i++) {
    var randomArray = charArray[random(charArray.length)];
    newPassword += randomArray[random(randomArray.length)];
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
