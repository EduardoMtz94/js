'use strict'

var year = 2018;

while (year <= 2051) {
  console.log('estamos en el año '+year);

  if (year == 2000) {
    break;
  }

  year++;
}

//Do while
var years = 30;
do {
  alert("Solo cuando sea diferente a 20");
  years--;
} while (years>25);
