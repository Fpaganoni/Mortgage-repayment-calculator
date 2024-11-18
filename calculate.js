let buttonCalculate = document.querySelector(".calculate_repayments_container"),
  inputInterest = document.querySelector("#interest-only-input"),
  inputTerm = document.querySelector(".term"),
  inputAmount = document.querySelector(".amount"),
  monthlyRepayment = document.querySelector(".monthly_result");

buttonCalculate.addEventListener("click", () => {
  let amountResult = inputAmount.value,
    interestResult = inputInterest.value,
    termResult = inputTerm.value,
    monthlyRepayment = document.querySelector(".monthly_result");

  let result = amountResult * interestResult;

  monthlyRepayment.innerHTML = `£${amountResult}`;
});

let amountResult = inputAmount.value,
  interestResult = inputInterest.value,
  termResult = inputTerm.value;

let result = amountResult * interestResult;

console.log(result);
