const inputReason = document.querySelector("#input-reason");
const inputAmount = document.querySelector("#input-amount");
const btnClear = document.querySelector("#btn-clear");
const btnAdd = document.querySelector("#btn-add");
const expenseList = document.querySelector("#expense-list");

btnAdd.addEventListener("click", () => {
  const reason = inputReason.value;
  const amount = inputAmount.value;
  if (reason.trim().length === 0 || amount <= 0 || amount.trim().length === 0) {
    return;
  }
  let newItem = document.createElement("ion-item");
  newItem.textContent = reason + ": ₱" + amount;
  expenseList.appendChild(newItem);
});