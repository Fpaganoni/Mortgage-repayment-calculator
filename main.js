/* Declare variables to use */

let button = document.querySelector(".calculate-repayments"),
  interestContainer = document.querySelector(".interest-container"),
  inputsCheckbox = document.querySelector(".inputs-checkbox");

button.addEventListener("click", () => {});

/* Function for REPAYMENTS input */

let checkRepayments = () => {
  let repaymentInput = document.querySelector(".input_repayment"),
    repaymentContainer = document.querySelector(".repayment-container"),
    repaymentCheckbox = document.querySelector(".checkbox_repayment");

  repaymentInput.addEventListener("click", () => {
    if (repaymentInput.checked) {
      repaymentContainer.style.border = "2px solid var(--Lime)";
    } else {
      repaymentContainer.style.border = "var(--border-inputs)";
    }
  });
};

/* Function for INTEREST input */

let checkInterest = () => {
  let interestInput = document.querySelector(".input_interest"),
    interestContainer = document.querySelector(".interest-container"),
    interestCheckbox = document.querySelector(".checkbox_interest");

  interestInput.addEventListener("click", () => {
    if (interestInput.checked) {
      interestContainer.style.border = "2px solid var(--Lime)";
    } else {
      interestContainer.style.border = "var(--border-inputs)";
    }
  });
};

checkRepayments();
checkInterest();
