// step 1: add event handaler with the submit button.
document.getElementById("submit-btn").addEventListener("click", function () {
  // step 2: get the email and password input field.
  const email = document.getElementById("email-field");
  const password = document.getElementById("password-field");
  //step 3:   get the email and password input value.
  //DANGER : DO NOT VERIFY email password on the client side.
  //step 4: verify email and password.
  if (email.value === "fhhimel@gmail.com" && password.value === "himel123") {
    window.location.href = "bank.html";
  } else {
    alert('Moye Moye');
  }
});
