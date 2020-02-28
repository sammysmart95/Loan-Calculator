let button = document.getElementById("button");
let change = document.getElementById("change");

const calculate = e => {
  e.preventDefault();
  let amount = document.getElementById("loan-amount");
  let rate = document.getElementById("interest-rate");
  let time = document.getElementById("payment-year");

  if ((amount.value === "", rate.value === "", time.value === "")) {
    // show error if inputs are empty
    errorLoading();
  } else {
    loading();
    //total interest
    let totalInterest = (amount.value * rate.value * time.value) / 100;
    let totalGain = document.getElementById("total-gain");
    totalGain.value = totalInterest.toFixed(2);
    //total amount to be paid
    let totalAmount = document.getElementById("total-payment");
    totalAmount.value = (Number(amount.value) + totalInterest).toFixed(2);
    // monthly payment
    let monthlyPayment = document.getElementById("monthly-payment");
    monthlyPayment.value = (
      totalAmount.value /
      (12 * Number(time.value))
    ).toFixed(2);

    //clear input
    amount.value = "";
    rate.value = "";
    time.value = "";
  }
};

// set loader
const loading = () => {
  let result = document.getElementsByClassName("result-container")[0];
  result.style.display = "none";
  let loader = document.getElementById("loader");
  loader.style.display = "block";
  setTimeout(clearLoader, 3000);
};

//set loader time out
const clearLoader = () => {
  let result = document.getElementsByClassName("result-container")[0];
  result.style.display = "block";
  let loader = document.getElementById("loader");
  loader.style.display = "none";
};

//show error loading
const errorLoading = () => {
  loading();
  setTimeout(showError, 3000);
};

// show error
const showError = () => {
  let error = document.getElementById("error");
  error.style.display = "block";
  setTimeout(clearError, 3000);
};

// set error time out function
const clearError = () => {
  let error = document.getElementById("error");
  error.style.display = "none";
};
button.addEventListener("click", calculate, false);

let colors = [
  "rgb(209, 209, 209)",
  "rgb(132, 33, 245)",
  "rgb(240, 90, 45)",
  "rgb(45, 240, 149)",
  "rgb(236, 41, 148)",
  "rgb(177, 236, 41)"
];
let body = document.getElementsByTagName("body")[0];

const changeBackground = () => {
  //   let colors = "#";
  //   const randomColors = Math.floor(Math.random() * 255);
  //   console.log(randomColors);
  //   for (let i = 0; i < 3; i++) {
  //     body.style.backgroundColor = colors += [randomColors];
  //   }

  for (let i = 0; i < colors.length; i++) {
    body.style.backgroundColor = colors[i];
  }
};
change.addEventListener("click", changeBackground, false);
