const invoicing = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  others: 19849.53,
};

const sum =
  invoicing.SP + invoicing.RJ + invoicing.MG + invoicing.ES + invoicing.others;

console.log(
  "Percentual de representação que cada estado teve dentro do valor total mensal da distribuidora:\n",
);

for (const state in invoicing) {
  const percent = (invoicing[state] / sum) * 100;
  console.log(`${state}: ${percent.toFixed(2)}%`);
}
