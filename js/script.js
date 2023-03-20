
// Dichiarazione e assegnazione delle variabili
let numbKm = parseInt(prompt('Inserire km da percorrere'));

let age = parseInt(prompt('Inserire età del passeggero'));

//Dichiarazione variabili per applicare sconto previsto in punto 5 e 6 del README
let discount20;
let discount40;
let prTicketDisc20;
let prTicketDisc40;

//Calcolo prezzo del biglietto con 2 decimali dopo virgola
let prTicket = Math.round((numbKm * 0.21)*100)/100;

// Associazione variabili a id html
document.getElementById('number-km').innerHTML= numbKm;
document.getElementById('age-passenger').innerHTML= age;

