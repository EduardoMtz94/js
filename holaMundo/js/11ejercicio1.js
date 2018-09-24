'use strict'

var num1 = parseInt(prompt('Introduce el primer numero',0);)
var num2 = parseInt(prompt('Introduce el segundo numero',0);)

if (num1 == num2) {
  alert('Los numeros son iguales');
}else if(num1 > num2){
  alert('El numero mayor es '+num1);
  alert('El numero menor es '+num2);
}else{
  alert('Introduce numeros correctos');
}
