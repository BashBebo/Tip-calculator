const BillAmount = document.getElementById("billamount");
const TipPercentage = document.getElementById("tippercentage");
const CalculateBtn = document.getElementById("calculatebtn");
const TotalAmount = document.getElementById("totalamount");

CalculateBtn.addEventListener("click", function() {
    const bill = parseFloat(BillAmount.value)
    const tip = parseFloat(TipPercentage.value)
    console.log(bill);
});
