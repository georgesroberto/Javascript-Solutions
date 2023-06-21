// The function sumFibs takes a number n as input and returns the sum of all odd Fibonacci numbers less than or equal to n.
function sumFibs(n) {
    // Initialize fibPrev as 0, representing the previous Fibonacci number.
    let fibPrev = 0; 
    // Initialize fibCurrent as 1, representing the current Fibonacci number.
    let fibCurrent = 1;
  
    // Initialize the variable sum as 0, which will accumulate the sum of the odd Fibonacci numbers.
    let sum = 0;
  
    // The while loop runs as long as the current Fibonacci number (fibCurrent) is less than or equal to the input number (n).
    while (fibCurrent <= n) {
      // Inside the loop, we check if the current Fibonacci number is odd using the condition fibCurrent % 2 !== 0. If it is odd, we add it to the sum variable.
      if (fibCurrent % 2 !== 0) {
        sum += fibCurrent;
      }
  
      // Use array destructuring to swap the values of fibPrev and fibCurrent efficiently.
      // Assign the value of fibCurrent to fibPrev and the sum of the previous two Fibonacci numbers to fibCurrent.
      [fibPrev, fibCurrent] = [fibCurrent, fibPrev + fibCurrent];
    }
  
    // Finally, when the loop ends, we return the value of sum, which represents the sum of all odd Fibonacci numbers less than or equal to the given number n.
    return sum;
  }
  
  // Example usage: Calculate the sum of odd Fibonacci numbers less than or equal to 10.
  console.log(sumFibs(10)); // Output: 10
  