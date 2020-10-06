// website: https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

// brief: 
  // Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.
  // Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

  //Requirements
    // - You can assume you will be given an integer input.
    // - You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
  
  // NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. 
  // Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.

// solution:
  function isPrime(num) {
      for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
  }

// test:
  if (
    isPrime(0) === false &&
    isPrime(1) === false &&
    isPrime(2) === true &&
    isPrime(73) === true &&
    isPrime(75) === false &&
    isPrime(-1) === false &&
    isPrime(3) === true &&
    isPrime(5) === true &&
    isPrime(7) === true &&
    isPrime(41) === true &&
    isPrime(5099) === true &&
    isPrime(4) === false &&
    isPrime(6) === false &&
    isPrime(8) === false &&
    isPrime(9) === false &&
    isPrime(45) === false &&
    isPrime(-5) === false &&
    isPrime(-8) === false &&
    isPrime(-41) === false
  ) {
    console.log("PASSED!! :D");
  } else {
    console.log("FAILED :(");
  }