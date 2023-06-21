function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      // Calculate the square root of the number
      const sqrt = Math.sqrt(num);
      
      // Iterate from 2 up to the square root to check for divisors
      for (let i = 2; i <= sqrt; i++) {
        // If a divisor is found, the number is not prime, so return false
        if (num % i === 0)
          return false;
      }
      
      // If no divisor is found, the number is prime, so return true
      return true;
    }
  
    // Check all numbers from 2 up to the given number for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      // If the number is prime, add it to the sum
      if (isPrime(i))
        sum += i;
    }
    
    // Return the sum of prime numbers
    return sum;
  }
  
  // Example usage: Calculate the sum of prime numbers less than or equal to 10
  console.log(sumPrimes(10));
  