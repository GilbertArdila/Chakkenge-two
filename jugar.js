var palabras=localStorage.getItem("palabras");
palabras=palabras.split(",");
console.log(palabras);

var nuevoJuego=document.getElementById("nuevo");
var salir=document.getElementById("salir");
var pantalla=document.querySelector("canvas");
var pincel= pantalla.getContext("2d");

function random(palabras){

    var rand=~~(Math.random()*palabras.length);
    var choose=palabras[rand]
    return choose;
}

var choosed=random(palabras).toString();
console.log(choosed);
console.log(choosed.length);

nuevoJuego.addEventListener("click",function(choosed){

         pincel.fillStyle="lightgrey";
         pincel.fillRect(0,0,800,400);
         replicarLinea(3);



})
function crearLinea(){
    pincel.fillStyle="black";
    pincel.beginPath();
    pincel.moveTo(10,140);
    pincel.lineTo(30,140);
    pincel.strokeStyle="black";
    pincel.stroke();
}
function replicarLinea(numero) {
    for(var i;i<= numero;i++){
        crearLinea()
    }
}


salir.addEventListener("click",function(){
    window.location.href = "index.html";
})
