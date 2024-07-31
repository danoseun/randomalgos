// MathChallenge(num) take the num parameter being passed and return the next number greater than num 
// using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. 
// If a number has no greater permutations, return -1 (ie. 999).
// Once your function is working, take the final output string and concatenate it with your ChallengeToken, 
// and then replace every fourth character with an underscore.

// Your ChallengeToken: aud62epnrf
// Examples
// Input: 11121
// Output: 11211
// Final Output: 112_1au_62e_nrf
// Input: 41352
// Output: 41523
// Final Output: 415_3au_62e_nrf

/**
 * loop from behind
 * replace index value with value of other indexes
 * store result in value
 * use the newly joined array as new value for the next iteration
 */
/**
 * from the rightmost, traverse between the digits
 * when you find a number that the current index is lesser than the previous
 * stop/break
 * from the rightmost of the index, search for the number greater than what is in the current index
 * swap their positions
 * then from the numbers after the current index,
 * rearrange those numbers
 */
//12453
function mathChallenge(number) {
  let stringDigit = number.toString();
  let arrDigits = stringDigit.split("");

  const arrLength = arrDigits.length;
  let i;
  for (i = arrDigits.length - 1; i > 0; i--) {
    if (Number(arrDigits[i - 1] < Number(arrDigits[i]))) {
      break;
    }
  }

  //12453
  const x = Number(arrDigits[i - 1]);
  let pos = i;
  console.log("pos", i, arrDigits[i]);

  for (let j = i + 1; j < arrLength; j++) {
    /**12453
     * if i=3
     * then arrDigits[4] > arrDigits[2] && arrDigits[4] < arrDigits[3]
     */
    console.log('??', Number(arrDigits[j]), x, Number(arrDigits[pos]))
    if (Number(arrDigits[j]) > x && Number(arrDigits[j]) < Number(arrDigits[pos])) {
      pos = j;
    }
  }

  [arrDigits[i - 1], arrDigits[pos]] = [arrDigits[pos], arrDigits[i - 1]];
  console.log("..", arrDigits);
}

//let number = 534976; //536974 -> 536479
let number = 12453; //-> //12354 -> 12534
//let number = 11121; //11211
console.log(mathChallenge(number));


/*
* 2341
* 2314
* 2134
*/




