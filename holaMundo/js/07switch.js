'use strict'

var edad = 18;
var imprime = "";

switch (edad) {
  case 18:
    imprime = "Acabas de cumplir la mayoria de edad";
    break;
  case 25:
    imprime = "Ya eres un adulto";
    break;
  default:
    imprime: "Tu edad es neutra";
}
console.log(imprime);
