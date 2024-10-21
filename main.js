/* Declare variables to use */

let button = document.querySelector(".calculate-repayments"),
  repaymentContainer = document.querySelector(".repayment-container"),
  interestContainer = document.querySelector(".interest-container");

button.addEventListener("click", () => {
  repaymentContainer.style.backgroundColor = "red";
});
