const inputReason = document.querySelector("#input-reason");
const inputAmount = document.querySelector("#input-amount");
const btnClear = document.querySelector("#btn-clear");
const btnAdd = document.querySelector("#btn-add");
const expenseList = document.querySelector("#expense-list");
const totalExpenses = document.querySelector("#total-expenses");

let expenses = 0;

const clear = () => {
  inputReason.value = "";
  inputAmount.value = "";
};

const showAlert = async () => {
  const alert = document.createElement("ion-alert");
  alert.header = "Invalid Inputs";
  alert.message = "Please enter a valid expense reason and amount.";
  alert.buttons = ["Ok"];
  document.body.appendChild(alert);
  await alert.present();
};

btnAdd.addEventListener("click", async () => {
  const reason = inputReason.value;
  const amount = inputAmount.value;
  if (reason.trim().length === 0 || amount <= 0 || amount.trim().length === 0) {
    await showAlert();
    return;
  }
  let newItem = document.createElement("ion-item");
  newItem.textContent = reason + ": ₱" + amount;
  expenseList.appendChild(newItem);
  totalExpenses.textContent = expenses += +amount;
  clear();
});

btnClear.addEventListener("click", clear);
