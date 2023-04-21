// Erjercicio: calcular los dias que fatan para el dia de la madre
//proximo 14 de Mayo.
let hoy = new Date();

let mayo14= new date(hoy.getFullYear(),4,14);

let milisegundosDia= 1000 * 60 * 24;

let cantidadDias= math.ceil((mayo14.getTime()-hoy.getTime)/ milisegundosDia);
console.log('La cantidad de dias para el siguiente 14 de mayo es:${cantidadDias}');