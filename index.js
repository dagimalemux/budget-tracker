const form = document.querySelector(".add");
let transactions =[];

form.addEventListener("submit", event=>{
  event.preventDefault()
  const time = new Date();
  const transaction = {
    id: Math.floor(math.random()*100000),
    source: form.source.value,
    amount: form.amount.value
  };
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
})