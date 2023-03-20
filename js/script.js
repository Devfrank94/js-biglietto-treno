
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

/*Condizione per il calcolo dei biglietti scontati, altrimenti se l'utente
  non rientra nei parametri gli verrà applicato il prezzo normale. 
*/
if (age < 18) {
  discount20 = (prTicket * 20) / 100;
  prTicketDisc20 = prTicket - discount20;
  prTicketDisc20 = prTicketDisc20.toFixed(2);
  document.getElementById('discount-20').innerHTML = prTicketDisc20 + '€';

}else if (age > 65) {
  discount40 = (prTicket * 40) / 100;
  prTicketDisc40 = prTicket - discount40;
  prTicketDisc40 = prTicketDisc40.toFixed(2);
  document.getElementById('discount-40').innerHTML = prTicketDisc40 + '€';

}else{
  prTicket = prTicket.toFixed(2);
  document.getElementById('price-ticket').innerHTML = prTicket + '€';
}