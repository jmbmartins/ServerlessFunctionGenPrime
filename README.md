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
     - [Página Projeto](https://console.firebase.google.com/project/serverlessfunctiongenprime/overview)
         
3. Medir e Avaliar
   - A Latência e a Latência em Utilização Concurrente:
     - joaom@joaom:~/Downloads/apache-jmeter-5.6.3/bin$ `./jmeter`
     - [Test Plan in JMeter](functions/index.js) 
