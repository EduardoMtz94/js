'use strict'

//Parametros REST que van en la funcion para recibir mas Parametros
//Parametros Spread que van en la llamada de la funcion para
//agregar un array

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
  console.log("Fruta 1: ", fruta1);
  console.log("Fruta 2: ", fruta2);
  console.log(restoDeFrutas);
}

//listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Coco");

var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Coco");
