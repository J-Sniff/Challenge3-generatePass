// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = " !'()*+#,%-./:&;$<=>?@[]^_`{|}~,";
var numChar = "0123456789";


function generatePassword() {
  var userPass = "";
  var emptyString = "";
  var passLength = parseInt(prompt("Please enter the desired length of your password. (Must be 8 - 128)"));
  if (Number.isNaN(passLength)) {
    alert("Please enter a valid number within the perameters.");
  }
  if (!passLength) {
    return;
  }
  else if (passLength < 8 || passLength > 128) {
    window.alert("Please enter a length within the parameters.");
    return;
  }
  var lowerChoice = confirm("Please confirm if you would like to include lowercase characters.")
  if (lowerChoice === true) {
    emptyString += lowerChar;
  }
  var upperChoice = confirm("Please confrim if you would like to include uppercase characters.")
  if (upperChoice === true) {
    emptyString += upperChar;
  }
  var specialChoice = confirm("Please confirm if you would like to include special characters.")
  if (specialChoice === true) {
    emptyString += specialChar;
  }
  var numberChoice = confirm("Please confirm if you would like to include numbers.")
  if (numberChoice === true) {
    emptyString += numChar;
  }
  if (lowerChoice === false && upperChoice === false && specialChoice === false && numberChoice === false) {
    alert("You must include at least one of the password variables.")
    return;
  }

  for (var i = 0; i < passLength; i++) {
    var placeHolder = emptyString[Math.floor(Math.random() * emptyString.length)];
    userPass += placeHolder;
  }
  return userPass;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


let button = document.querySelector('button');

button.addEventListener('click', function () {
  console.log('Button was clicked!');
});
