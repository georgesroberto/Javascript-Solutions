function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

smallestCommons([1, 5]);

// Find the SCM of a range of numbers
function smallestCommons(arr) {
  const primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    const currentFactors = getPrimeFactors(i);
    for (let prime in currentFactors) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
        primeFactors[prime] = currentFactors[prime]
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let prime in primeFactors) {
    multiple *= prime ** primeFactors[prime];
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let i = 2; i <= num; i++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while ((num % i) === 0) {
      factors[i] = (factors[i]) ? factors[i] + 1 : 1;
      num /= i;
    }
  }
  return factors;
}

smallestCommons([1, 5]);