// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

/**
 * Function to check if a number is prime
 * @param {number} num - The number to check
 * @return {boolean} - Whether the number is prime
 */
function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// Cloud Function to generate prime numbers less than 1000
exports.generatePrimes = functions.https.onRequest(async (req, res) => {
  const primes = [];
  const startTime = Date.now();
  for (let i = 2; i < 1000; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  res.json({result: primes});

  const endTime = Date.now();
  console.log(`Function execution time: ${endTime - startTime}ms`);
});

