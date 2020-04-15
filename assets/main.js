// Un alert espone 5 numeri casuali (univoci).
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var pcArray = [];
var myArray = [];
var punteggio = 0;
var uguali= "";

for( var i = 0; i < 5; i++){
  var pcNumber = creaNumero();
  controlloPresenza(pcArray , pcNumber);
}

alert("Ecco i numeri: \n" + pcArray + "\npronto?");

setTimeout(myf, 30000 );

function myf(){
  for( var i = 0; i < 5; i++){
    var myNumber = parseInt(prompt("inserisci un numero"));
    controlloValidita(myNumber , myArray);
  }
}

for( var i = 0; i < 5; i++){
  var control = myArray[i];
  if(pcArray.includes(control)){
    punteggio++;
    uguali += control + " ";
  }
}

console.log("pc: " +pcArray);
console.log("my: " + myArray);
console.log("Hai trovato " + punteggio +  " numeri uguali\n Sono: " + uguali);

















function creaNumero (){
  return  Math.floor( Math.random() * 100) + 1;
}

function controlloPresenza(vetA , num){
   if (!vetA.includes(num)) {
       return vetA.push(num);
   } else {
     return i --;
   }
}

function controlloValidita(numControllo , vetPush){
  if (numControllo > 100 || numControllo < 1 ){
    return  alert("numero non valido") + (i--);
  }else if (!vetPush.includes(numControllo)) {
      return vetPush.push(numControllo);
    }else {
    return alert("non inserire numeri uguali!")  + (i--);
  }
}
