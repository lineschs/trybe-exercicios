// Exercício 1

const a = 2;
const b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

// Exercício 2

const c = 40;
const d = 45;

if (c > d) {
  console.log("'c' é maior que 'd'");
} else {
  console.log("'d' é maior que 'c'");
};

// Exercício 3

const e = 10;
const f = 20;
const g = 30;

if (e > f && e > g) {
  console.log('O maior número é: ' + e + ' (e)');
} else if (f > e && f > g) {
  console.log('O maior número é: ' + f + ' (f)');
} else {
  console.log('O maior número é: ' + g + ' (g)');
};

// Exercício 4

const number = 2;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
};

// Exercício 5

let angIntA = 90;
let angIntB = 45;
let angIntC = 45;

let somaAng = angIntA + angIntB + angIntC;

let allAnglesArePositives = angIntA > 0 && angIntB > 0 && angIntC > 0;

if(allAnglesArePositives){
  if (somaAng === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: valor inválido para ângulo');
}

Exercício 6