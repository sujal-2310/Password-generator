const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%&*";

const allChars = upperCase + lowerCase + number + symbol;  

function cratePassword(){
  let password = "";
  password += upperCase[Math.floor(Math.random()* upperCase.length)];
  password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
  password += number[Math.floor(Math.random()* number.length)];
  password += symbol[Math.floor(Math.random()* symbol.length)];

  while(length > password.length){
    password += allChars[Math.floor(Math.random()* allChars.length)];
  }
 passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value).then(() => {
    alert("Password copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy password: ", err);
  });
}