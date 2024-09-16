# ServerlessFunctionGenPrime
Laboratory Project 1 – Serverless function to generate prime numbers.

----------------------------------------------------------------------------------

1. Function Implementation: [Code](functions/index.js)
  
2. Function Deployment:
   - Create `functions` directory: `firebase init functions`
   - `cd functions`
   - Install dependencies: `npm install firebase-functions firebase-admin`
   - Deploy the function to the database: `firebase deploy --only functions`
     - [Function Page](https://us-central1-testecnultima.cloudfunctions.net/generatePrimes)
     - [Project Page](https://console.firebase.google.com/u/0/project/serverlessfunctiongenprime/functions?hl=en)
         
3. Measure and Evaluate
   - Latency and Concurrent Usage Latency:
     - joaom@joaom:~/Downloads/apache-jmeter-5.6.3/bin$ `./jmeter`
     - [Test Plan in JMeter](functions/index.js) 
   - Cold Start:
     - Enable Cloud Trace API
     - Install Stackdriver Trace Agent: `npm install --save @google-cloud/trace-agent`
     - Start Stackdriver Trace Agent in Function Code: `require("@google-cloud/trace-agent").start();`
     - Deploy Function: `firebase deploy --only functions`
     - View function's trace in Stackdriver: [StackDriver Function](https://console.cloud.google.com/traces/list?referrer=search&project=serverlessfunctiongenprime&tid=cfb00f81d0b0aa8c505a5133bb1f718d&spanId=ac1e8af9c04d4048)
