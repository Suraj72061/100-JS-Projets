function calculateTip() {
  const billAmount = document.getElementById("bill-amount").value;
  const tipPercentage = document.getElementById("tip-percentage").value;
  const totalAmount = (tipPercentage * billAmount) / 100;
  document.getElementById("total-amount").textContent = `$${totalAmount.toFixed(
    2
  )}`;
}
