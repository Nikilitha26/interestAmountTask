let interestAmountInput = document.getElementById('interestAmount');
let amountInput = document.getElementById('amount');
let interestPercentageInput = document.getElementById('interestPercentage');
let button = document.querySelector('button');

button.addEventListener('click', calculateInterest);

function calculateInterest() {
    let amount = parseFloat(amountInput.value);
    let percentage = parseFloat(interestPercentageInput.value.replace('%', '')) / 100;

    let interestAmount = (amount * percentage).toFixed(2);

    interestAmountInput.value = interestAmount;
}