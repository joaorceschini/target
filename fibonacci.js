function isFibonacci(number) {
  if (number < 0) return false;

  let a = 0;
  let b = 1;

  if (number === a || number === b) return true;

  let next = a + b;

  while (next <= number) {
    if (next === number) return true;
    a = b;
    b = next;
    next = a + b;
  }

  return false;
}

const numberToCheck = 3416454622906707;

if (isFibonacci(numberToCheck)) {
  console.log(`${numberToCheck} pertence a sequencia de fibonacci`);
} else {
  console.log(`${numberToCheck} nao pertence a sequencia de fibonacci.`);
}
