/* Declare variables to use */

// let button = document.querySelector(".calculate-repayments"),
//   interestContainer = document.querySelector(".interest-container"),
//   inputsCheckbox = document.querySelector(".inputs-checkbox");

// button.addEventListener("click", () => {});

/* Function for REPAYMENTS input */

let checkRepayments = () => {
  let repaymentInput = document.querySelector(".input_repayment"),
    repaymentContainer = document.querySelector(".repayment-container"),
    repaymentCheckbox = document.querySelector(".checkbox_repayment");

  repaymentInput.addEventListener("click", () => {
    if (repaymentInput.checked) {
      repaymentContainer.style.border = "1px solid var(--Lime)";
      repaymentContainer.style.backgroundColor = "var(--Lime-ligth)";
      repaymentCheckbox.style.setProperty(
        "--before-white-repayment",
        "#d7da2f"
      );
      repaymentCheckbox.style.setProperty("--outline-repayment", "#d7da2f");
    } else {
      repaymentContainer.style.border = "var(--border-inputs)";
      repaymentContainer.style.backgroundColor = "var(--White)";
      repaymentCheckbox.style.setProperty(
        "--before-white-repayment",
        "#ffffff"
      );
      repaymentCheckbox.style.setProperty("--outline-repayment", "#6b94a8");
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
      interestContainer.style.border = "1px solid var(--Lime)";
      interestContainer.style.backgroundColor = "var(--Lime-ligth)";
      interestCheckbox.style.setProperty("--before-white-interest", "#d7da2f");
      interestCheckbox.style.setProperty("--outline-interest", "#d7da2f");
    } else {
      interestContainer.style.border = "var(--border-inputs)";
      interestContainer.style.backgroundColor = "var(--White)";
      interestCheckbox.style.setProperty("--before-white-interest", "#ffffff");
      interestCheckbox.style.setProperty("--outline-interest", "#6b94a8");
    }
  });
};

checkRepayments();
checkInterest();
