const string = "random string for test";
let invertedString = "";

for (let i = string.length - 1; i >= 0; i--) {
  invertedString += string[i];
}

console.log("original string: ", string);
console.log("inverted string: ", invertedString);
