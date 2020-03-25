
// dichiarazione array
var surnameList = ["Matonti", "Icardi"];

// dichiarazione nuovo item
var addSurname = prompt("aggiungi nuovo cognome alla lista");

// inserimento nuovo item
surnameList.push(addSurname);

// ordinamento alfabetico array


console.log(surnameList);
// creo una funzione che mi ordinerò alfabeticamente l'array

function ordinamelo(array){

 var parole = [];
 // primo ciclo: selezione item
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    var lettere = [];

    // secondo ciclo: selezione lettera
    for (var j = 0; j < item.length; j++) {
      var lettera = item.slice(j,(j+1))

      // terzo ciclo: assegnazione valore numerico alla lettera
      lettere[j] = getPosizioneLettera(lettera);
    }
    // assegnazione array lettere(contenente valori numerici) agli item dell'array parole
    parole[i] = lettere;
  }
  console.log(parole);
  confronto(parole);

}

//  Realizzazione funzione di confronto tra valori numerici
function confronto(parole){
  var listaOrdinata = [];
  var contatoreCondizione = -1;

  // per selezionare l'array soggetto da confrontare
  for (var v = 0; v < parole.length; v++) {
    parole[v];
    // per selezionare l'array paragone
      for (var b = 0; b < parole[v].length; b++) {
        parole[v][b];
        var isLessThen = true;

        for (var n = 0; n < parole.length; n++) {
          //Se maggiore =
          console.log("questo è la lunghezza di array parole " + parole.length);
          if (parole[v][b] > parole[n][b]) {
            console.log("questo è il soggetto di paragone " + parole[v][b] + "questo è l'oggetto di paragone " + parole[n][b]);
            isLessThen = false;
          // Se le prime due lettere hanno stesso valore
        // }else if (parole[v][b] == parole[n][b]) {
        //     for (var h=b; h < parole[v].length; h++) {
        //       if (parole[v][h] > parole[n][h]);
        //       isLessThen = false;
        //     }
            // DA IMPLEMENTARE CON CASI LIMITE
          }
        }
        console.log("questa è la condizione di precedenza" + isLessThen);

        if (isLessThen === false) {
          b = parole[v].length;
        }

        //Creazione di una variabile che si incrementa solo quando a questo punto il valore di "isLessThen" è true
        //Soluzione
        if (isLessThen) {
          contatoreCondizione++
          console.log("questo è lo slice " + parole.slice(v,(v+1)));
          var itemOrdinato = parole.slice(v,(v+1));
          listaOrdinata[contatoreCondizione] = itemOrdinato;
          console.log("questa è la lista ordinata " + listaOrdinata);

        }
      }
      // var itemOrdinato = parole.slice(v,(v+1));
      // if (isLessThen) {
      //   listaOrdinata[v] = itemOrdinato;
      // }

    }
}

// funzione per ottenere la posizione
function getPosizioneLettera(lettera) {
  var paragone = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var pesoLettera = -1;
  for (var k = 0; k < paragone.length; k++) {
    if (lettera === paragone[k]) {
      pesoLettera = k;
    }
  }
  // implementare con casi limite
  return pesoLettera;

}

ordinamelo(surnameList);
