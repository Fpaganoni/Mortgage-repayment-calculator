let form = document.querySelector(".form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // Declaring variables to use and calculate
  let amount = parseFloat(document.querySelector(".amount").value),
    term = parseFloat(document.querySelector(".term").value) * 12,
    interestNominal =
      parseFloat(document.querySelector(".interest").value) / 12 / 100,
    repaymentOnly = document.querySelector(".input_repayment"),
    interestOnly = document.querySelector("input_interest"),
    monthlyRepayment = document.querySelector(".monthly_result");

  // Variables to use in other cases
  let resulltsContainer = document.querySelector(".your_result_container_all");

  let calculate = () => {
    let interestPow = Math.pow(interestNominal + 1, term);
    let calculateInterest = interestPow * interestNominal;
    let montlhyPayment = amount * (calculateInterest / (interestPow - 1));
    resulltsContainer.style.transform = "translate(-100%)";
    monthlyRepayment.innerHTML = `£${montlhyPayment.toFixed(2)}`;
  };

  calculate();
});
