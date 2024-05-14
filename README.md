# ServerlessFunctionGenPrime
Laboratory Project 1 – Serverless function to generate prime numbers.

----------------------------------------------------------------------------------

1. Implementação da Função: [Código](functions/index.js)
  
2. Deployment da Função:
   - Criar diretoria `functions`: `firebase init functions`
   - `cd functions`
   - Instalar dependências: `npm install firebase-functions firebase-admin`
   - Deploy da função para o database: `firebase deploy --only functions`
     - [Página Função](https://us-central1-serverlessfunctiongenprime.cloudfunctions.net/generatePrimes)
     - [Página Projeto](https://console.firebase.google.com/u/0/project/serverlessfunctiongenprime/functions?hl=pt-br)
         
3. Medir e Avaliar
   - A Latência e a Latência em Utilização Concurrente:
     - joaom@joaom:~/Downloads/apache-jmeter-5.6.3/bin$ `./jmeter`
     - [Test Plan in JMeter](functions/index.js) 
   - Cold Start:
     - Enable Could Trace API
     - Install Stackdriver Trace Agent: `npm install --save @google-cloud/trace-agent`
     - Start Stackdriver Trace Agent in Function Code:  `require("@google-cloud/trace-agent").start();`
     - Deploy Function: `firebase deploy --only functions`
     - View function's trace in Stackdriver: [StackDriver Function](https://console.cloud.google.com/traces/list?referrer=search&project=serverlessfunctiongenprime&tid=cfb00f81d0b0aa8c505a5133bb1f718d&spanId=ac1e8af9c04d4048)


------------------------------------------------------------------------------------

Supabase:
https://vercel.com/joaos-projects-449d401f/api/AEphfcZRDXSzh6tUWMD7LEX1vaww
1. Implementação da Função: [Código](supabase/function_primes.js)

2. Deployment da Função:
   - Instalar vercel: `npm install -g vercel`
   - Criar um novo diretório com os ficheiros básicos e a estrutura baseada no modelo escolhido: `vercel init`
   - `vercel --prod`
   - Instalar dependências: `npm install firebase-functions firebase-admin`
   - Deploy da função para o database: `firebase deploy --only functions`
     - [Página Função](https://us-central1-serverlessfunctiongenprime.cloudfunctions.net/generatePrimes)
     - [Página Projeto](https://console.firebase.google.com/u/0/project/serverlessfunctiongenprime/functions?hl

