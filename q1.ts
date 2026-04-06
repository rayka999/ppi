const prompt = require('prompt-sync')();

let renda = Number(prompt('Renda familiar: '));
let numfilhos = Number(prompt('Quantidade de filhos: '));

let media_renda = 0;
let media_filhos = 0;
let contador = 0;

while (renda > 0) {
    media_renda += renda;
    media_filhos += numfilhos;
    contador++;

    renda = Number(prompt('Renda familiar: '));
    if (renda > 0) {
        numfilhos = Number(prompt('Quantidade de filhos: '));
    }
}

console.log(`Renda familiar média da cidade: ${media_renda / contador}`);
console.log(`Média do número de filhos: ${media_filhos / contador}`);