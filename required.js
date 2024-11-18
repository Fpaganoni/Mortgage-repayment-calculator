/* Mortgage amount validation */

let amountCheck = () => {
  let amountContainer = document.querySelector(".input-libra-container"),
    figureContainer = document.querySelector(".libra-img-container"),
    svgPath = document.querySelector("svg .libra-path"),
    amountRequired = document.querySelector(".amount-required"),
    libraBackground = document.querySelector(".libra-img"),
    inputAmount = document.querySelector(".amount");

  if (inputAmount.value === "") {
    amountContainer.style.border = "2px solid #d73328";
    figureContainer.style.backgroundColor = "#d73328";
    svgPath.style.fill = "white";
    amountRequired.style.display = "block";
    libraBackground.style.backgroundColor = "transparent";
  } else {
    amountContainer.style.border = "1px solid #6b94a8";
    figureContainer.style.backgroundColor = "#e3f3fd";
    svgPath.style.fill = "#4e6e7e";
    amountRequired.style.display = "none";
    libraBackground.style.backgroundColor = "#e3f3fd";
  }
};

/* Mortgage Term validation */

let termCheck = () => {
  let termContainer = document.querySelector(".input-year-container"),
    yearContainer = document.querySelector(".years"),
    yearsTitle = document.querySelector(".years-title"),
    inputTerm = document.querySelector(".term"),
    termRequired = document.querySelector(".term-required");

  if (inputTerm.value === "") {
    termContainer.style.border = "2px solid #d73328";
    yearContainer.style.backgroundColor = "#d73328";
    yearsTitle.style.color = "white";
    termRequired.style.display = "block";
  } else {
    termContainer.style.border = "1px solid #6b94a8";
    yearContainer.style.backgroundColor = "#e3f3fd";
    yearsTitle.style.color = "#4e6e7e";
    termRequired.style.display = "none";
  }
};

/* Interest rate validation */

let interestCheck = () => {
  let interestContainer = document.querySelector(".input-interest-container"),
    percentageContainer = document.querySelector(".percentage-container"),
    percentageTitle = document.querySelector(".percentage"),
    inputInterest = document.querySelector(".interest"),
    rateRequired = document.querySelector(".rate-required");

  if (inputInterest.value === "") {
    interestContainer.style.border = "2px solid #d73328";
    percentageContainer.style.backgroundColor = "#d73328";
    percentageTitle.style.color = "white";
    rateRequired.style.display = "block";
  } else {
    interestContainer.style.border = "1px solid #6b94a8";
    percentageContainer.style.backgroundColor = "#e3f3fd";
    percentageTitle.style.color = "#4e6e7e";
    rateRequired.style.display = "none";
  }
};

/* Mortgage Type validation */

let typeCheck = () => {
  let inputRepayment = document.querySelector(".input_repayment"),
    inputInterest = document.querySelector(".input_interest"),
    oneField = document.querySelector(".one_field"),
    interestRequired = document.querySelector(".interest-required");

  if (!inputRepayment.checked && !inputInterest.checked) {
    interestRequired.style.display = "block";
    oneField.style.display = "none";
  } else if (inputInterest.checked && inputRepayment.checked) {
    interestRequired.style.display = "none";
    oneField.style.display = "block";
  } else {
    interestRequired.style.display = "none";
    oneField.style.display = "none";
  }
};

/* Mortgage Type inputs, checked validation */

let isChecked = () => {
  let inputRepayment = document.querySelector("#repayment-input"),
    inputInterest = document.querySelector("#interest-only-input");

  if (inputInterest.checked) {
    inputRepayment.disabled = true;
  } else if (inputRepayment.checked) {
    inputInterest.disabled = true;
  } else {
    inputRepayment.disabled = false;
    inputInterest.disabled = false;
  }
};

/* Clear all, clear inputs */

/* Click on button to validate and send the form */

let checkFunction = () => {
  amountCheck();
  termCheck();
  interestCheck();
  typeCheck();
};

let button = document
  .querySelector(".calculate_repayments_container")
  .addEventListener("click", () => {
    if (checkFunction() === true) {
      console.log("validado");
    }
  });
