// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId)
// console.log(typeof isEnrolled)
// console.log(typeof patientInfo)
// console.log(typeof patientEmail)


// const base = "5";
// let height = "8";
// const area = base * height;
// const perimeter = 5+5+8+8;

// console.log(area);
// console.log(perimeter);

// const grade = 90;

// if (grade >= 80) {
//     console.log("Parabéns, você foi aprovada(o)!")
//   } else if (grade < 80 && grade >= 60) {
//     console.log("Você está na nossa lista de espera");
//   } else if (grade < 60) {
//     console.log("Você foi reprovada(o)")
//   }


const currentHour = 18;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
  } else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
  } else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
  } else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
  } else if (currentHour < 11 && currentHour < 4) {
    message = "Hmmm, cheiro de café recém passado";
  }