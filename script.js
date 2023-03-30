// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//variables
var upperCase = Array.from({length: 26}, (_,i) => String.fromCharCode("A".fromCharCodeAt(0) + i));
var lowerCase = Array.from({length: 26}, (_,i) => String.fromCharCode("a".fromCharCodeAt(0) + i));
var nums = "1234567890"
var characterSpecial = ["!", "@", "#", "$", "%"]

//make generatePassword function
function generatePassword()


//prompt for pw length
var pwdLength =
prompt("How long would you like your password to be (enter a number)");
console.log (pwdLength)

if (pwdLength >=8 && pwdLength <= 128) {
  alert("Great!")
}

//if statement if number is above 8 and below 128
if (num > 8)
  console.log("try again")
else if (num < 128)
  console ("try again")

//confirm for lowercase


// function lowercase() {
  var userChoiceLow = confirm("Would you like to use lowercase letters?");
  {
  if (userChoiceLow == true)
  {
    alert("nice, lowercase letters it is")
    console.log(userChoiceLow)
  } else if (userChoiceLow == false); {
    alert("alright, no lowercase");
  }
}

var userChoiceUp = confirm("Would you like to use lowercase letters?");
{
if (userChoiceUp == true)
{
  alert("nice, uppercase letters it is")
  console.log(userChoiceUp)
} else if (userChoiceUp == false); {
  alert("alright, no uppercase");
  console.log (userChoiceUp)
}
}

var randomLower = lowerCase [randomInput]
var randomInput = Math.floor(Math.random() * pwdLength.length);
  var randomLower = lowerCase[randomInput]
    console.log (randomLower)

//store their response in a variable called characterCase

var characterCase = 

//if else statements checking each confirm and if it yes or true , push or add random characters to a big array of all characters selected so far

//for loop while i is less than their answer for num length prompt

//in this for loop we would randomly pull characters from the big array

//pull random characters from array using math.floor(math.random)*array.length

//have a var declared above for loop 

//that var += theRandomChar

//Return the pw var

//EDGE cases: picking no for every prompt


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
