const fecha = new Date();
const fecha = new Date('Jul 12 2011');
const añoActual = fecha.getFullYear();
console.log(añoActual); //2020
const hoy = fecha.getDate();
const mesActual = fecha.getMonth() + 1; 
const tiempoTranscurrido = Date.now();
const hoy = new Date(tempoTranscurrido);
hoy.toDateString(); // "Sun Jun 14 2020"
hoy.toISOString(); // "2020-06-13T18:30:00.000Z"
hoy.toLocaleDateString(); // "14/6/2020"

