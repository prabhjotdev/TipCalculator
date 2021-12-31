let bill, tip, numberOfPeople, totalTip, totalBill;

function getTip() {
  bill = parseInt(document.getElementById("bill").value);
  tip = parseInt(document.getElementById("tip").value);
  numberOfPeople = parseInt(document.getElementById("numOfPeople").value);

  totalTip = document.getElementById("totalTip");
  totalBill = document.getElementById("totalBill");

  let tipValue = (bill * tip) / 100;
  totalTip.innerHTML = "Total Tip: $" + tipValue.toString();

  let billValue = (tipValue + bill) / numberOfPeople;
  totalBill.innerHTML = "Bill: $" + billValue;
}
