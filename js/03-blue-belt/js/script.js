var ratios = {
  usd: 25.6,
  eur: 29,
  sellUsd: 26.7,
  sellEur: 29.94
};

var operation,
    resultRate,
    course,
    amount,
    checkAmountValid;

var user = prompt('В какую валюту хотите обменять? USD или EUR', 'usd').toLowerCase();
if(user == 'usd'){
  operation = confirm('Покупка или продажа?');
  course = (operation) ? ratios['usd'] : ratios['sellUsd'];
  amount = +prompt('Сумма для обмена', '');
  resultRate = amount / course;
  alert('Сумма обмена: ' + resultRate.toFixed(2) + '$');
}else if(user == 'eur'){
  operation = confirm('Покупка или продажа?');
  course = (operation) ? ratios['eur'] : ratios['sellEur'];
  amount = +prompt('Сумма для обмена?', '');
  resultRate = amount / course;
  alert('Сумма обмена: ' + resultRate.toFixed(2) + '€');
}else {
  alert('Введите корректную валюту для обмена');
}