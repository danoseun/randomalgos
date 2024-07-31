function findGreaterNum(number) {
  let digits = Array.from(number, (char) => parseInt(char, 10));
  
  let i;
  let n = digits.length;
  // Traverse the digits to find if they are in some order
  for (i = n - 1; i > 0; i--) {
    if (digits[i] > digits[i - 1]) {
      // This means digits are not in descending order
      break;
    }
  }

  if (i === 0) {
    // Means we traversed all the digits and found them in descending order
    console.log("This is the greatest number");
  }

  // If the for loop above break is executed, means we found
  // a number smaller than its predecessor while moving towards left from right
  const x = digits[i - 1];
  console.log('x', x);
  let pos = i;
  console.log('pos', pos);
  for (let j = i + 1; j < n; j++) {
    //12453
    console.log('..', j, digits[j], '...', pos, digits[pos]);
    if (digits[j] > x && digits[j] < digits[pos]) {
      pos = j;
    }
  }

  // Swapping the numbers at position j and i-1
  [digits[i - 1], digits[pos]] = [digits[pos], digits[i - 1]];

  let result = 0;
  for (let j = 0; j < i; j++) {
    result = result * 10 + digits[j];
  }

  // Sort the digits after i-1 in ascending order
  digits = digits.slice(i).sort((a, b) => a - b);
  console.log('digits', digits);

  for (let j = 0; j < n - i; j++) {
    result = result * 10 + digits[j];
  }

  console.log("The next number with the same set of digits is:", result);
}

const number = "12453";

console.log(findGreaterNum(number));
