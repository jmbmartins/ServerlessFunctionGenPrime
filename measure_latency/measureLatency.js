const axios = require('axios');
const now = require('performance-now');

async function measureLatency(url, concurrentRequests) {
    let requests = [];
    let startTimes = new Array(concurrentRequests).fill(0);
    let endTimes = new Array(concurrentRequests).fill(0);

    for (let i = 0; i < concurrentRequests; i++) {
        startTimes[i] = now();
        requests.push(axios.get(url));
    }

    let responses = await Promise.all(requests);

    for (let i = 0; i < concurrentRequests; i++) {
        endTimes[i] = now();
    }

    let totalLatency = 0;
    for (let i = 0; i < concurrentRequests; i++) {
        totalLatency += (endTimes[i] - startTimes[i]);
    }

    console.log(`Average latency for ${concurrentRequests} concurrent requests: ${totalLatency / concurrentRequests} ms`);
}

// Replace with your Firebase Cloud Function URL
let url = 'https://us-central1-serverlessfunctiongenprime.cloudfunctions.net/generatePrimes';

// Measure latency for 10 concurrent requests
measureLatency(url, 10);
