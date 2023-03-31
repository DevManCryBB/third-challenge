// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//variables

var lowerCaseArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCaseArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var nums = ["1", "2", "3", "4", "5" , "6", "7", "8", "9", "0"];
var characterSpecial = ["!", "@", "#", "$", "%"];
var availableChar = []

//make generatePassword function
function getUserChoice() {
  //prompt for pw length
  var pwdLength = prompt(
    "How long would you like your password to be (enter a number)"
    );
    console.log(pwdLength);
    
    if (pwdLength >= 8 && pwdLength <= 128) {
      alert("Great!");
    }
      
     // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(pwdLength)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (pwdLength < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (pwdLength > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }
    
    // confirm lowercase() {
      var userChoiceLow = confirm("Would you like to use lowercase letters?");
      {
        if (userChoiceLow) {
          alert("nice, lowercase letters it is");
          // add lowercase letters to avail char array (concat)
          console.log(userChoiceLow);
        } else{
          alert("alright, no lowercase");
        }
      }
      
      var userChoiceUp = confirm("Would you like to use uppercase letters?");
      {
        if (userChoiceUp == true) {
          alert("nice, uppercase letters it is");
          // add uppercase letters to avail char array (concat)
          console.log(userChoiceUp);
        } else {
          
          alert("alright, no uppercase");
          console.log(userChoiceUp);
        }
      }
      
      var userChoiceSpec = confirm("Would you like to use special characters?");
      {
        if (userChoiceSpec == true) {
          alert("nice, special characters it is");
          // add specials to availchar
          console.log(userChoiceSpec);
        } else {
          alert("alright, no uppercase");
          console.log(userChoiceSpec);
        }
      }
      var userNum = confirm("Would you like to use numbers?");
      {
        if (userNum == true) {
          alert("nice, numbers it is");
          console.log(userNum);
        } else {
          alert("alright, no uppercase");
          console.log(userNum);
        }
      }
      //store their response in a variable
      
        var answers = {
           length: pwdLength, 
           lowerCase: userChoiceLow,
           upperCase: userChoiceUp,
           specChar: userChoiceSpec,
           numbers: userNum,
        }
        console.log("answers", answers)
        return answers
      }
    
    // Function for getting a random element from an array
    function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randElement = arr[randIndex];
    
      return randElement;
    }

    function generatePassword() {
      var userChoice = getUserChoice()
      
      if (userChoice.lowerCase){
        availableChar = availableChar.concat(lowerCaseArray)
      }
      if (userChoice.upperCase){
        availableChar = availableChar.concat(upperCaseArray)
      }
      if (userChoice.numbers){
        availableChar = availableChar.concat(nums)
      }
      if (userChoice.specChar){
        availableChar = availableChar.concat(characterSpecial)
      }
      console.log("New Array", availableChar)
      var password = pickCharacters(availableChar, userChoice.length)
      return password
    }

     //for loop while i is less than their answer for num length promp
    function pickCharacters (array, length){
      var userPassword = []
      for (var i = 0; i <length; i++)
      {
      var passwordChar = getRandom(array)
      userPassword.push(passwordChar)
      }
      var result = userPassword.join("")
      return result
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);