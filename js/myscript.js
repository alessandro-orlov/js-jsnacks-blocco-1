//========== JSnack 1 =================
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

var snack1 = document.getElementById('jsnacks-1');

snack1.addEventListener('click',
  function() {
    //Inserimento numeri
    do {
      var primoNumero = parseInt(prompt('Inserisci il primo numero'));
    } while ( (primoNumero == '') || (primoNumero == null) || (isNaN(primoNumero)) )

    do {
      var secondoNumero = parseInt(prompt('Inserisci il secondo numero'));
    } while( (secondoNumero == '') || (secondoNumero == null) || (isNaN(secondoNumero)) )

    //Messagio universale
    var risultato = 'I numeri si equivalgono perché ' + primoNumero + ' è uguale a ' + secondoNumero;

    //LOGICA
    if(primoNumero > secondoNumero) {
      risultato = 'il primo numero ' + primoNumero + ' è maggiore del secondo';
    } else if (primoNumero < secondoNumero) {
      risultato = 'il secondo numero ' + secondoNumero + ' è maggiore del primo';
    }

    //Output
    alert(risultato);
  }
);

//========== JSnack 2 =================
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var snack2 = document.getElementById('jsnacks-2');

snack2.addEventListener('click',
  function() {

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
  }
);

//========== JSnack 3 =================
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

//Loop for
var snack31 = document.getElementById('jsnacks-3-for');

snack31.addEventListener('click',
  function() {

    var somma = 0;

    for(var i = 1; i <=5; i++) {
      do {
        var insertNumeber = parseInt(prompt('Inserisci un numero'));
      } while ( isNaN(insertNumeber) == true );
      console.log('hai inserito numero ' + insertNumeber)

      //Calcolo la somma
      somma = somma + insertNumeber;
    }

    alert('La somma dei numeri inseriti è: ' + somma);
  }
);

//Loop  While
var snack32 = document.getElementById('jsnacks-3-while');

snack32.addEventListener('click',
  function() {

    var somma = 0;

    var i = 1;
    while(i <= 5) {
      do {
        var numero = parseInt(prompt('inserisci numero'));
          } while (isNaN(numero) == true);

      console.log('hai inserito il numero: ' + numero);

      somma = somma + numero;

      //Interruzione del loop
      i++
    }
    console.log('somma dei numeri inseriti è ' + somma)
    alert('La somma dei numeri inseriti ' + somma);
  }
);


//========== JSnack 4 =================
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var snack4 = document.getElementById('jsnacks-4');

snack4.addEventListener('click',
  function() {

    //VARIABILI
    var listaNomi = ['Alessandro', 'Francesco', 'Chiara', 'Fabio', 'Nikolas'];
    var numeUtente = prompt('Quale il tuo nome?');
    var accessGranted = false;

    //LOGICA
    // Verifico se il nome è presente nella lista
    var i = 0;
    while( (accessGranted == false ) && (i < listaNomi.length) ) {

      if(numeUtente == listaNomi[i]) {
        accessGranted = true;
      }

      // Interruzione Loop
      i++
    }

    //OUTPUT
    if( accessGranted === true ) {
      alert('Puoi entrare')
    } else {
      alert('Smamma');
    }
  }
);

//========== JSnack 5 =================
// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var snack5 = document.getElementById('jsnacks-5');

snack5.addEventListener('click',
  function() {

    //VARIABILI
    do {
      var numeroUtente = prompt('Inserisci un numero di 4 cifre')
    } while ( (numeroUtente == '') || (numeroUtente == null) || isNaN(numeroUtente));
    console.log(numeroUtente);

    //LOGICA
    //Converto il valore inserito in Array con .split
    var numeroUtenteArray = numeroUtente.split("")
    console.log(numeroUtenteArray)

    //Calcolo la somma di tutti i numeri dell Array
    var somma = 0;
    var i = 0;
    while (i < numeroUtenteArray.length) {

      somma = somma + parseInt(numeroUtenteArray[i]);
      //Interruzione loop
      i++
    }

    //OUTPUT
    alert('La somma dei numeri inseriti è ' + somma);
  }
);

//=================================================//
//==================JSnack - Blocco 2==============//
//=================================================//

//================== Blocco2 Esercizio 1 ==========
// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di invitati.

var block2Snack1 = document.getElementById('block2-jsnacks-1');

block2Snack1.addEventListener('click',
  function() {
    //Quantità di invitati falsi da creare
    var numeroInvitatiFalsi = 10;

    // Lista Nomi
    var listaNomi = ['Alex', 'Leonardo', 'Jonny', 'Frank', 'Bruce', 'Matt', 'Christian'];
    console.log('lista di nomi: ' + listaNomi);

    // Lista Cognomi
    var listaCognomi = ['Willis', 'Lee', 'Obama', 'Depp', 'Damon', 'Sinatra', 'Trump'];
    console.log('lista di cognomi: ' + listaCognomi);

    // Lista invitati Falsi
    var invitatiFalsi = [];

    // LOGICA
    for(var i = 0; i < numeroInvitatiFalsi; i++) {
      // Elemento casuale della lista Nomi
      var casualeListaNomi = Math.floor(Math.random() * listaNomi.length);

      // Elemento casuale della lista Cognomi
      var casualeListaCognomi = Math.floor(Math.random() * listaCognomi.length);

      // Creo nome e cognome del invitato falso
      var invitatoFalso = listaNomi[casualeListaNomi] + ' ' + listaCognomi[casualeListaCognomi];

      // Aggungo invitato falso alla lista degli invitati falsi
      invitatiFalsi.push(invitatoFalso);
    }

    // Stampo la lista creata degli invitati falsi
    console.log('lista degli invitati falsi creata: ');
    console.log(invitatiFalsi);
  }
);

//================== Blocco2 Esercizio 2 =============
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var block2Snack2 = document.getElementById('block2-jsnacks-2');

block2Snack2.addEventListener( 'click',
  function() {

    //Creo 2 array di lunghezze diverse
    var primoArray = [15, 25, 16, 'ciao', 88, '0', 24];
    console.log(primoArray);

    var secondoArray = [45, 12, 63, 'yo', 79, 51, 14, 35, 96, 11, 39, 75, 'numeri'];
    console.log(secondoArray);

    while(primoArray.length != secondoArray.length) {
      var randomNumer = Math.floor(Math.random() * 100 + 1);

      if(primoArray.length > secondoArray.length ) {
          secondoArray.push(randomNumer);
      } else if(primoArray.length < secondoArray.length) {
            primoArray.push(randomNumer);
        }
    }

    //OUTPUT
    console.log(primoArray);
    console.log(secondoArray);

  }
);


//================== Blocco2 Esercizio 3 =============
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali
// tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

var block2Snack3 = document.getElementById('block2-jsnacks-3');

block2Snack3.addEventListener( 'click',
  function() {
    //Azzero il risultato se stampato
    var stampoArray = document.getElementById('lista-numeri-block2-jsnacks-3');
    stampoArray.innerHTML = '';

    // Chiedo il numero all'utente
    var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 10'));
    // Validazione numeroUtente
    while (
        numeroUtente > 10
        || numeroUtente == 0
        || isNaN(numeroUtente)
      ) {
      numeroUtente = parseInt(prompt('ERRORE: inserisci un numero da 1 a 10'));
    }

    // Stamo a scermo ogni array pari alla numeroUtente
    for(var i = 0; i < numeroUtente; i++) {

      // Creo quantita di array pari al numero inserito
      var numeriRandomArray = numeriRandom(10);
      console.log(numeriRandomArray);

      // Stampo a scermo tutti gli Array creati
      stampoArray.innerHTML += '<li>' + numeriRandomArray + '</li>'
    }

  }
);


//================== Blocco2 Esercizio 4 =============
// Crea due tag div con due id diversi: un div avrà il testo
// colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i
// numeri dispari e in verde i numeri pari.

var block2Snack4 = document.getElementById('block2-jsnacks-4');

block2Snack4.addEventListener( 'click',
  function() {
    // Assegno "id" alle variabili
    var verdiPari = document.getElementById('verdi-pari');
    var rossiDispari = document.getElementById('rossi-dispari');

    // Azzero il risultato precedente al click
    verdiPari.innerHTML = null;
    rossiDispari.innerHTML = null;

    // Array di numeri
    var numeriPariDispari = numeriRandom(20);
    console.log(numeriPariDispari);

    for(var i = 0; i < numeriPariDispari.length; i++) {
      if(numeriPariDispari[i] % 2 == 0) {
        verdiPari.innerHTML += ' ' + numeriPariDispari[i];
      } else {
        rossiDispari.innerHTML += ' ' + numeriPariDispari[i];
        }
    }

  }
);

//================ FINE ===================


// ===========FUNCTION===============
// Funzione per creare Numeri Casuali
// ---> numero: è un valore numerico
function numeriRandom(numero) {
  var arrayNumeri = [ ];
    for(var i= 0; i < numero; i++) {
      var randomNumbers = Math.floor(Math.random() * 100 + 1);
      arrayNumeri.push(randomNumbers);
    }
  return arrayNumeri;
}
