function calculateSIP() {
  const monthlyInvestment = parseFloat(document.getElementById('input').value);
  const years = parseFloat(document.getElementById('year').value)
  const rate = parseFloat(document.getElementById('rate').value) / 100;

  const months = years * 12;
  const monthlyRate = rate / 12;
  const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  
  let investedAmt = monthlyInvestment * months
  let totalValue = futureValue.toFixed(2)
  let estReturn = totalValue - investedAmt

  document.getElementById('total-amount').innerText = totalValue
  document.getElementById('amount').innerText = investedAmt
  document.getElementById('return-amount').innerText = estReturn.toFixed(2)
}

document.getElementById('input').addEventListener('input', calculateSIP);
document.getElementById('year').addEventListener('input', calculateSIP);
document.getElementById('rate').addEventListener('input', calculateSIP);
calculateSIP();
