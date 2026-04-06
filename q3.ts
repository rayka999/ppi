const prompt = require('prompt-sync')();

let intervalo = prompt("Digite um intervalo (ex.: 2-10): ");

let num_inicio = Number(intervalo.split('-')[0]);
let num_fim = Number(intervalo.split('-')[1]);

let primos = [];

for (let i = num_inicio; i <= num_fim; i++) {
    if (i < 2) continue;

    let primo = true;

    for (let divisor = 2; divisor < i; divisor++) {
        if (i % divisor === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        primos.push(i);
    }
}

console.log(`Quantidade de números primos: ${primos.length}`);