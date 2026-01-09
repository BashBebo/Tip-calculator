const BillAmount = document.getElementById("billamount");
const TipPercentage = document.getElementById("tippercentage");
const CalculateBtn = document.getElementById("calculatebtn");
const TotalAmount = document.getElementById("totalamount");
const Clearbtn = document.getElementById("clear");

CalculateBtn.addEventListener("click", function() {
    const bill = parseFloat(BillAmount.value)
    const tip = parseFloat(TipPercentage.value)
    if (isNaN (bill) || isNaN (tip)) {
         TotalAmount.textContent = "Please enter valid numbers for bill amount and tip percentage.";
    return;}
    const TotalTip = bill * (tip / 100);
    const TotalBill = bill + TotalTip;
    console.log(TotalBill);
    TotalAmount.textContent = "Total Bill Amount: $" + TotalBill.toFixed(2);
});


Clearbtn.addEventListener("click", function() {
    BillAmount.value = "";
    TipPercentage.value = "";
    TotalAmount.textContent = "";
});