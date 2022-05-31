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

const chessPiece = 'cavaLo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

Exercício 7

const grade = 60;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}