function ordinamelo(array){
 var parole = [];
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    var lettere = [];

    for (var j = 0; j < item.length; j++) {
      var lettera = item.slice(j,(j+1))

      lettere[j] = getPosizioneLettera(lettera);
    }
    parole[i] = lettere;
  }
  ordinamento(parole);

  var prova = ordinamento(parole);
  decode(prova);
  return decode(prova);
}

//  Realizzazione funzione di ordinamento ------------------------
function ordinamento(parole){
  var listaOrdinata = [];
  var contatoreCondizione = -1;
  var itemOrdinato;
  for (var v = 0; v < parole.length; v++) {
    // parole[v];
    for (var b = 0; b < parole[v].length; b++) {
      // parole[v][b];
      var isLessThen = true;
      for (var n = 0; n < parole.length; n++) {
        if (parole[v][b] > parole[n][b]) {
          isLessThen = false;
          // DA IMPLEMENTARE CON CASI LIMITE
        }
      }
      if (isLessThen === false) {
        b = parole[v].length;

      }
      if (isLessThen) {
        contatoreCondizione++;
        itemOrdinato = parole[v]
        listaOrdinata[contatoreCondizione] = itemOrdinato;
        parole = parole.slice(0, v).concat(parole.slice(v + 1, parole.length));
        v = -1;
        break;
      }
    }
  }
  return listaOrdinata;
}
// console.log(listaOrdinata)



//funzione di assegnazione dei valori numerici-------------------------------------------------
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

// ordinamelo(surnameList);

function decode (multiArray) {
  var archivioFinale = [];
  var paragone = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ];

  let str;
  for (var e = 0; e < multiArray.length; e++){
    str = "";                                 // la stringa viene ripulita tra un push e l'altro
  	for (var i = 0; i < multiArray[e].length; i++) {
      str += paragone[multiArray[e][i]];      // separare concatenazione e push sevre a fare in modo che in archivioFinale non ci sia un'unica stringa
    }
    archivioFinale.push(str);                 // separare concatenazione e push sevre a fare in modo che in archivioFinale non ci sia un'unica stringa
  }
  return archivioFinale;
}
