var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var captcha = "";
for (var i = 0; i < 6; i++) {
  captcha += chars[Math.floor(Math.random() * chars.length)];
}

document.getElementById("captcha").innerHTML = captcha;

function checkCaptcha() {
  var userInput = document.getElementById("captcha-input").value;
  if (userInput === captcha) {
    alert("Thank you! We will contact you soon.");
  } else {
    alert("Captcha incorrect. Please try again.");
  }
}

function refreshCaptcha() {
  var captcha = "";
  for (var i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("captcha").innerHTML = captcha;
}
