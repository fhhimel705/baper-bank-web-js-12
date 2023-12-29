// step 1: add event handaler to the deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  // step 2: get the deposite input field and the deposite balance
  const depositField = document.getElementById("deposit-field");
  const currentDeposit = parseFloat(depositField.value);

  if (isNaN(currentDeposit)) {
    alert("Please enter an amount");
    return;
  }
  const depositeBalance = document.getElementById("deposite-balance");
  const previousDeposit = parseFloat(depositeBalance.innerText);

  //   step 3: assign the deposite input field value to the deposite balance.
  //   depositeBalance.innerText = depositField.value;

  const totalDiposit = currentDeposit + previousDeposit;

  depositeBalance.innerText = totalDiposit;

  //   step 4:
  depositField.value = "";

  const currentBalance = document.getElementById("current-balance");
  const TotalBalance = parseFloat(currentBalance.innerText);

  const totalCurrentBalance = TotalBalance + currentDeposit;
  currentBalance.innerText = totalCurrentBalance;
});
