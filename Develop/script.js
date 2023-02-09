// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = [];
let arr = [];
for (var i = 8; i < 128; i++) {
    passLength.push(i);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", e => {
  window.prompt( "Please enter the desired length of your password. (Characters cannot be less than 8 or exceed 128)");
})



// function passCriteria() {
//   window.prompt( "Please enter the desired length of your password. (Characters cannot be less than 8 or exceed 128)");
// }





////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function myFunction() {
  var element = document.body;
  element.classList.toggle( "dark-mode" );
}


let button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log('Button was clicked!');
});
