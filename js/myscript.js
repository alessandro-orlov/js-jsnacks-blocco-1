//========== JSnack 1 =================
//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

// alert('JSnack - Esercizio 1')
//
// //Inserimento numeri
// do {
//   var primoNumero = prompt('Inserisci il primo numero');
// } while ( (primoNumero == '') || (primoNumero == null) || (isNaN(primoNumero)) )
//
// do {
//   var secondoNumero = prompt('Inserisci il secondo numero');
// } while( (secondoNumero == '') || (secondoNumero == null) || (isNaN(secondoNumero)) )
//
// //Messagio universale
// var risultato = `I numeri si equivalgono perché ${primoNumero} è uguale a ${secondoNumero}`
//
// //LOGICA
// if(primoNumero > secondoNumero) {
//   risultato = `il primo numero ${primoNumero} è maggiore del secondo`;
// } else if (primoNumero < secondoNumero) {
//   risultato = `il secondo numero ${secondoNumero} è maggiore del primo`;
// }
//
// //Output
// alert(risultato);
//


//========== JSnack 2 =================

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

//Chiedo di inserire due parole all0utente
do {
  var primaParola = prompt('Inserisci la prima parola');
} while ( (primaParola == null) || (primaParola == '') );

do {
  var secondaParola = prompt('Inserisci la seconda parola');
} while ( (secondaParola == null) || (secondaParola == '') );

//Lungheza delle parole
var lunghezzaPrimaParola = primaParola.length;
var lunghezzaSecondaParola = secondaParola.length;

//LOGICA
var messaggio = 'La parole hanno la stessa lungheza ';
//Comparazione delle lunghezze delle parole
if( lunghezzaPrimaParola > lunghezzaSecondaParola) {
  messaggio = secondaParola + ' ' + primaParola;
} else if (lunghezzaPrimaParola < lunghezzaSecondaParola ) {
  messaggio = primaParola + ' ' + secondaParola;
}

//OUTPUT
alert(messaggio)



//========== JSnack 3 =================

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.




//========== JSnack 4 =================

// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.




//========== JSnack 5 =================

// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
