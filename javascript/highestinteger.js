function printOutHighestInteger(str) {
  /**
   * if character is not a digit replace it with a white space(' ')
   * replace all white spaces with a comma(,)
   * split string at comma (,)
   * call Math.max on the array to pick out the largest int
   */
  let numberArray = [];
  for (let i = 0; i < str.length; i++) {
    if (!/[0-9]/.test(str[i])) {
      str = str.replace(str[i], " ");
    }
  }

  const commaSeparatedDigits = str.replace(/[ ,]+/g, ",");

  const splitStr = commaSeparatedDigits.split(",");

  for (let i = 0; i < splitStr.length; i++) {
    numberArray.push(Number(splitStr[i]));
  }

  return Math.max(...numberArray);
}

console.log(printOutHighestInteger("12FG90SGD264SGJDS10SD8")); //264
console.log(printOutHighestInteger("182FG900SGD264SGJDS10SD008")); //900

//The time complexity of this is O(N)
