// ES. di oggi:
// lista cognomi, ordinamento e posizione cognome inserito
// DESCRIZIONE:
// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// dichiarazione array
var surnameList = ["Cinguetti", "Icardi" , "Fiaschi" , "Matonti" , "Fraternali" , "De Lorenzi" , "Delorenzi"];

// dichiarazione nuovo item
var addSurname = prompt("aggiungi nuovo cognome alla lista");

// inserimento nuovo item
surnameList.push(addSurname);

// ordinamento alfabetico array
surnameList.sort();
console.log(surnameList);

// ottengo indice del nuovo item in array ordinato
var indexNewItem = surnameList.indexOf(addSurname)

// stampa a schermo
document.getElementById("ciao").innerHTML = surnameList + "<br>" + "La posizione ordinata del nuovo cognome è la numero: " + (indexNewItem + 1);
