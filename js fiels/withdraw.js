document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const currentWithdraw = parseFloat(withdrawField.value);

  if (isNaN(currentWithdraw)) {
    alert("Please enter amount");
    return;
  }

  const withdrawBalance = document.getElementById("withdraw-balance");
  const previousWithdraw = parseFloat(withdrawBalance.innerText);


  const totalWithdraw = currentWithdraw + previousWithdraw;

  const currentBalance = document.getElementById("current-balance");
  const TotalBalance = parseFloat(currentBalance.innerText);

  withdrawField.value = "";

  if (currentWithdraw > TotalBalance) {
    alert("moye moye");
    return;
  }
  withdrawBalance.innerText = totalWithdraw;

  const totalCurrentBalance = TotalBalance - currentWithdraw;
  currentBalance.innerText = totalCurrentBalance;
  //   else {
  //     alert("moye moye");
  //   }

  //   withdrawBalance.innerText = withdrawField;
});
