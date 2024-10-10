const fibArray = [];
const Fibonacci = (n) => {
  if (n == 0) {
    if (!fibArray.includes(0)) {
      fibArray[0] = 0;
    }
    return 0;
  } else if (n == 1) {
    if (!fibArray.includes(1)) {
      fibArray[1] = 1;
    }
    return 1;
  } else {
    let result = Fibonacci(n - 1) + Fibonacci(n - 2);
    if (!fibArray.includes(result)) {
      fibArray[n] = result; // Assigning it directly at index `n`
    }
    return result;
  }
};

Fibonacci(8);
console.log(fibArray); // This will print the sequence up to the 8th Fibonacci number
