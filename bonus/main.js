
var surnameList = ["Randazzo","Capone","Grossano","Fiaschi","Barbara","Matonti", "Icardi","Luigi", "Jessica","AlbertoG"];

var addSurname = prompt("aggiungi nuovo cognome alla lista");

surnameList.push(addSurname);

ordinamelo(surnameList);
console.log(ordinamelo(surnameList));
var listaordinata= ordinamelo(surnameList);
var listapuntata="";
for (var i = 0; i < listaordinata.length; i++) {
  listapuntata = listapuntata + "<li style='color:red'>" + listaordinata[i] + "</li>";
}



document.getElementById("prima").innerHTML ="Questa era la lista di cognomi non ordinata: " + surnameList

document.getElementById("dopo").innerHTML = "Questa è la lista di cognomi ordinata dalla funzione 'ordinamelo' by pink_hat: " + "<ul>"+listapuntata+"</ul>"
