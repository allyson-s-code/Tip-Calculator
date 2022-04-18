const billInput = document.getElementById("bill");
const tipButtons = document.querySelectorAll("percent-input");
const customTip = document.getElementById("custom-btn");
const numPeople = document.getElementById("num-people");
const alert = document.querySelector(".alert-text");
const tipAmountPP = document.querySelector(".tip-amount span");
const totalAmount = document.querySelector(".total span");
const reset = document.getElementById("reset");

//Global variables
let bill, selectedTip, tipInput, people;

//input
function input() {
  bill = Number(billInput.value);
  tipInput = selectedTip || Number(customTip.value);
  people = Number(numPeople.value);
}

//update tip and total amount
function updateAmount() {
  input();
  updateTip();
  updateTotal();
}

//calcuate tip and update tip span
function updateTip() {
  if (people !== 0) {
    tip = (bill * tipInput) / 100 / people;
    tipAmountPP.innerText = `${tip.toFixed(2)}`;
    alert.classList.add("hide");
  } else {
    alert.classList.remove("hide");
  }
}

//calculate total and update total span
function updateTotal() {
  if (people !== 0) {
    total = (bill + (bill * tipInput) / 100) / people;
    totalAmount.innerText = `${total.toFixed(2)}`;
  }
}

//grab what was entered in the bill input
billInput.addEventListener("input", function (e) {
  updateAmount();
});

//grab what was selected from tip buttons
for (const button of tipButtons) {
  button.addEventListener("click", function (e) {
    selectedTip = e.target.value;
    updateAmount();
    console.log(selectedTip);
  });
}

//grab custom tip
customTip.addEventListener("input", function (e) {
  selectedTip = null;
  updateAmount();
});

//grab number of people input
numPeople.addEventListener("input", function (e) {
  updateAmount();
});

//reset form
reset.addEventListener("click", function () {
  document.querySelector("form").reset();
  tipAmountPP.innerText = "0.00";
  totalAmount.innerText = "0.00";
  alert.classList.add("hide");
});
