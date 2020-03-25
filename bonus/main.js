
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
  // per selezionare l'array soggetto da confrontare
  for (var i = 0; i < parole.length; i++) {
    parole[i];
    // per selezionare l'array paragone
      for (var j = 0; j < parole.length; j++) {
        parole[i][j];
        var isLessThen = true;

        for (var k = 0; k < parole.length; k++) {
          //Se maggiore =
          if (parole[i][j] > parole[k][j]) {
            console.log(parole[i][k]);
            isLessThen = false;
          // Se le prime due lettere hanno stesso valore
          }else if (parole[i][j] == parole[k][j]) {
            for (var h=j; h < parole[i].length; h++) {
              if (parole[i][h] > parole[k][h]);
              isLessThen = false;
            }
            // DA IMPLEMENTARE CON CASI LIMITE
          }
        }

      }
      var itemOrdinato = parole.slice(i,(i+1));
      if (isLessThen) {
        listaOrdinata[i] = itemOrdinato;
      }

    }
  console.log("questa è la lista ordinata " + listaOrdinata);
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
