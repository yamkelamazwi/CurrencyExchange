let form = document.querySelector("form");
let amountInput = document.querySelector("#amount");
let fromCurrency = document.querySelector("#from-currency");
let toCurrency = document.querySelector("#to-currency");
let results = document.querySelector("#results");


form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let exchangeUrl = `https://open.er-api.com/v6/latest/${fromCurrency.value}`;

  let response = await fetch(exchangeUrl);
  let data = await response.json();

  if (fromCurrency.value === toCurrency.value) {
  results.textContent = "Please select two different currencies.";
  return;
}

  let rate = data.rates[toCurrency.value];
  let convertedAmount = amountInput.value * rate;

  results.textContent = `${amountInput.value} ${fromCurrency.value} = ${convertedAmount.toFixed(2)}${toCurrency.value}`;


  console.log(amountInput.value);
  console.log(fromCurrency.value);
  console.log(toCurrency.value);
  console.log(data.rates.ZAR);
})
