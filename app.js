const calculadora = require('./calculadora.js');

let resultadosoma = calculadora.soma(1, 2);

console.log(resultadosoma);


// Subtração
let resultadoSubtracao = calculadora.subtracao(10, 5);
console.log(resultadoSubtracao);

// Multiplicação
let resultadoMultiplicacao = calculadora.multiplicacao(4, 3);
console.log(resultadoMultiplicacao);

// Divisão
let resultadoDivisao = calculadora.divisao(20, 4);
console.log(resultadoDivisao);