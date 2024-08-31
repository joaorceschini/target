function countLetterA(str) {
  const count = (str.match(/a/gi) || []).length;

  if (count > 0) {
    console.log(`string: "${stringToCheck}"\nletter 'a' count: [${count}].`);
  } else {
    console.log("the letter 'a' does not appear in the string");
  }
}

const stringToCheck = "An apple a day keeps the doctor away.";

countLetterA(stringToCheck);
