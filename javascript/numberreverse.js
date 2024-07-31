function isWithinRange(value) {
  const min = -(2 ** 31);
  const max = 2 ** 31 - 1;
  return value >= min && value <= max;
}

function reverseNum(x) {
  if (x < 0) {
    let i,
      newStr = "";
    const xStr = x.toString();
    const xStrSymbol = xStr.charAt(0);
    for (i = xStr.length - 1; i >= 0; i--) {
      newStr += xStr[i];
    }
    const result = parseInt(`${xStrSymbol}${newStr}`, 10);
    if (isWithinRange(result)) {
      return result;
    } else {
      return 0;
    }
  } else {
    let i,
      newStr = "";
    const xStr = x.toString();
    for (i = xStr.length - 1; i >= 0; i--) {
      newStr += xStr[i];
    }
    const result = parseInt(newStr, 10);
    if (isWithinRange(result)) {
      return result;
    } else {
      return 0;
    }
  }
}

const num1 = 123;
//Output: 321

const num2 = -123;
//Output: -321

const num3 = 120;
//Output: 21

const num4 = 2**29;
//Output: 219078635

const num5 = 2**32;
//Output: 0

console.log(reverseNum(num5));
