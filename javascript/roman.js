function romanizer(numbers) {
    console.log('..', numbers);
    // Write your code here
    const lookUp = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      VIII: 8,
      VII: 7,
      VI: 6,
      V: 5,
      IV: 4,
      III: 3,
      II: 2,
      I: 1
    };
  
    let romanArray = [];
    for (let i = 0; i < numbers.length; i++) {
      let result = '';
      for (const key in lookUp) {
        while (numbers[i] >= lookUp[key]) {
          result += key;
          numbers[i] -= lookUp[key];
        }
      }
      romanArray.push(result);
    }
    return romanArray;
  }
  
  const numArray = [1, 2, 3, 4, 35];
  const numA = [4, 35];
  console.log(romanizer(numArray));
  
  
  