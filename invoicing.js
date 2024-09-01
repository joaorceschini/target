const invoicesOfTheMonth = [
  { day: 1, value: 1000.0 },
  { day: 2, value: 1200.0 },
  { day: 3, value: 0.0 },
  { day: 4, value: 0.0 },
  { day: 5, value: 1500.0 },
  { day: 6, value: 1100.0 },
  { day: 7, value: 0.0 },
  { day: 8, value: 2000.0 },
  { day: 9, value: 1700.0 },
  { day: 10, value: 0.0 },
  { day: 11, value: 0.0 },
  { day: 12, value: 1300.0 },
  { day: 13, value: 1400.0 },
  { day: 14, value: 0.0 },
  { day: 15, value: 0.0 },
  { day: 16, value: 1600.0 },
  { day: 17, value: 1800.0 },
  { day: 18, value: 0.0 },
  { day: 19, value: 0.0 },
  { day: 20, value: 1900.0 },
  { day: 21, value: 2100.0 },
  { day: 22, value: 0.0 },
  { day: 23, value: 0.0 },
  { day: 24, value: 1000.0 },
  { day: 25, value: 1200.0 },
  { day: 26, value: 0.0 },
  { day: 27, value: 0.0 },
  { day: 28, value: 1400.0 },
  { day: 29, value: 1600.0 },
  { day: 30, value: 0.0 },
  { day: 31, value: 0.0 },
];

function invoiceCalc(invoices) {
  const invoicesOverZero = invoices.filter((day) => day.value > 0);

  const lowestValue = Math.min(...invoicesOverZero.map((day) => day.value));
  const highestValue = Math.max(...invoicesOverZero.map((day) => day.value));

  const sum = invoicesOverZero.reduce((sum, day) => sum + day.value, 0);

  const average = sum / invoicesOverZero.length;

  const daysAboveAverage = invoicesOverZero.filter(
    (day) => day.value > average,
  ).length;

  return {
    lowestValue,
    highestValue,
    daysAboveAverage,
  };
}

const result = invoiceCalc(invoicesOfTheMonth);

console.log(
  `O menor valor de faturamento ocorrido em um dia do mês: ${result.lowestValue}`,
);
console.log(
  `O maior valor de faturamento ocorrido em um dia do mês: ${result.highestValue}`,
);
console.log(
  `Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${result.daysAboveAverage}`,
);
