'use strict'

// Transformación de textos
var numero = 444;
var texto1 = "Curso";
var texto2 = "otro texto";

var dato = numero.toString();
dato = texto1.toUpperCase();
dato = texto2.toLowerCase();

console.log(typeof dato);

// Calcular longitud
var nombre = ["Hola", "Mundo"];
console.log(nombre.length);

//Concatenar 
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);