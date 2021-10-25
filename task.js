'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D === 0) {
    arr[0] = -b / (2 * a);
  } else if (D > 0) {
    arr[0] = (-b + Math.sqrt(D)) / (2 * a);
    arr[1] = (-b - Math.sqrt(D)) / (2 * a);
  };
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (percent < 0 || percent > 100) {
  return 'Параметр "Процентная ставка" содержит неправильное значение';
  };
  if (contribution < 0 || contribution > amount) {
    return 'Параметр "Начальный взнос" содержит неправильное значение';
  };
  if (amount < 0 ) {
    return 'Параметр "Общая стоимость" содержит неправильное значение';
  };  
  let creditAmount = amount - contribution;
  let monthsCredit = date.getMonth() - new Date().getMonth() + (date.getFullYear() - new Date().getFullYear()) * 12 - 1;
  let monthlyPercent = percent / 100 / 12;
  let payment = creditAmount * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ^ monthsCredit) - 1));
  totalAmount = payment * monthsCredit;

  return parseFloat(totalAmount.toFixed(2));
  
}

