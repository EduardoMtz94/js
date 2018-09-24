'use strict'
function porConsola(num1, num2){
  console.log("Suma "+(num1+num2));
  console.log("Resta "+(num1-num2));
};

function porPantalla(num1, num2){
  document.write("Suma "+(num1+num2));
  document.write("Resta "+(num1-num2));
};

function calculadora(num1, num2, mostrar = false){
  if (mostrar) {
    porPantalla(num1, num2);
  }else{
    porConsola(num1, num2);
  }
}

calculadora(12,8);
