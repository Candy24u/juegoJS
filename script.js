var J1;
var J2;
var movea;
var moveb;

//JUGADOR UNO 
function aleatorio(min,max){
    return Math.random()*(max-min)*min;
}
J1 = Math.floor(aleatorio(1,4));

if (J1==1) {
    movea="PIEDRA"
}
if (J1==2) {
    movea="PAPEL"

}
if (J1==3) {
    movea="TIJERA"

}

//JUGADOR DOS
function aleatorio(min,max){
    return Math.random()*(max-min)*min;
}

J2 = Math.floor(aleatorio(1,4));

if (J2==1) {
    moveb="PIEDRA"

}
if (J2==2) {
    moveb="PAPEL"

}
if (J2==3) {
    moveb="TIJERA"

}

console.log("\nBienvenidos al juego de PIEDRA, PAPEL Y TIJERA\n")
console.log("El jugador uno saca: "+movea);
console.log("El jugador dos saca: "+moveb)

//CONDICIONES
if(movea=="PIEDRA" && moveb=="PIEDRA"){
    console.log("\nES UN EMPATE");
}
if(movea=="TIJERA"&& moveb=="TIJERA"){
    console.log("\nES UN EMPATE");
}
if(movea=="PAPEL"&& moveb=="PAPEL"){
    console.log("\nES UN EMPATE");
}
if(movea=="PIEDRA"&& moveb=="TIJERA"){
    console.log("\nEL GANADOR ES EL JUGADOR UNO");
}
if(movea=="TIJERA"&& moveb=="PIEDRA"){
    console.log("\nEL GANADOR ES EL JUGADOR DOS");
}
if(movea=="PIEDRA"&& moveb=="PAPEL"){
    console.log("\nEL GANADOR ES EL JUGADOR DOS");
}
if(movea=="PAPEL"&& moveb=="PIEDRA"){
    console.log("\nEL GANADOR ES EL JUGADOR UNO");
}
if(movea=="PAPEL"&& moveb=="TIJERA"){
    console.log("\nEL GANADOR ES EL JUGADOR DOS");
}
if(movea=="TIJERA"&& moveb=="PAPEL"){
    console.log("\nEL GANADOR ES EL JUGADOR UNO");
}
