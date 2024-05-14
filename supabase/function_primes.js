// This function checks if a number is prime
function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
      if(num % i === 0) return false; 
    return num > 1;
  }
  
  // This function generates prime numbers less than 1000
  function generatePrimes() {
    let primes = [];
    for(let i = 2; i < 1000; i++)
      if(isPrime(i)) primes.push(i);
    return primes;
  }
