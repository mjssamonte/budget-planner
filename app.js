const inputReason = document.querySelector("#input-reason");
const inputAmount = document.querySelector("#input-amount");
const btnClear = document.querySelector("#btn-clear");
const btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click", () => {
  const reason = inputReason.value;
  const amount = inputAmount.value;
  if (reason.trim().length === 0 || amount <= 0 || amount.trim().length === 0) {
    return;
  }
  console.log(reason, amount);
});
