var palabras=localStorage.getItem("palabras");
console.log(palabras);

var nuevoJuego=document.getElementById("nuevo");
var salir=document.getElementById("salir");
var pantalla=document.querySelector("canvas");
var pincel= pantalla.getContext("2d");

nuevoJuego.addEventListener("click",function(palabras){
         pincel.fillStyle="lightgrey";
         pincel.fillRect(0,0,800,400);
palabras=palabras.toArray();
console.log(palabras.length);

    pincel.fillStyle="black";
    pincel.beginPath();
    pincel.moveTo(10,140);
    pincel.lineTo(30,140);
    pincel.strokeStyle="black";
    pincel.stroke();
})


salir.addEventListener("click",function(){
    window.location.href = "index.html";
})
