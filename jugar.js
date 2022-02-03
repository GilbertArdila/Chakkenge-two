var palabras=localStorage.getItem("palabras");
palabras=palabras.split(",");
console.log(palabras);

var nuevoJuego=document.getElementById("nuevo");
var salir=document.getElementById("salir");
var pantalla=document.querySelector("canvas");
var pincel= pantalla.getContext("2d");
let letra;

function random(palabras){

    var rand=~~(Math.random()*palabras.length);
    var choose=palabras[rand]
    return choose;
}

var choosed=random(palabras).toString();
console.log(choosed);
var num=choosed.length;

nuevoJuego.addEventListener("click",function(){

         pincel.fillStyle="lightgrey";
         pincel.fillRect(0,0,800,400);
         pincel.fillStyle="black";
         pincel.beginPath();
         pincel.moveTo(5,105);
         pincel.lineTo(30,105);
         pincel.lineTo(15,85);
         pincel.lineTo(5,105);
         pincel.strokeStyle="black";
         pincel.stroke();
         replicarLinea(num)
         ahorcado(1);
        
         ahorcado(2);
         ahorcado(3);
         ahorcado(4);
        
         ahorcado(5);
         ahorcado(6);
         ahorcado(7);
         ahorcado(8);
         ahorcado(9);
        
         /*
capturamos el evento onkeydown para saber que tecla presiona el usuario y la mostramos en el textarea
*/
window.onkeydown= function(event){
    letra=event.key;
    letra=letra.toUpperCase();
    var escribir=document.getElementById("texto");
    for(var i in choosed){
        if(letra===choosed[i]){
            console.log(choosed[i]);
            break;
        }else{
            //escribir.textContent+=letra;
            console.log("no existe");

        }
    }
    
    
}


})


    


var a=5;
var b=140;
var x=30;
var y=140;

function crearLinea(a,b,x,y){
    
    pincel.moveTo(a,b);
    pincel.lineTo(x,y);
    pincel.strokeStyle="black";
    pincel.stroke();
}

function replicarLinea(numero) {
    for(var i=0;i<numero;i++){
        crearLinea(a,b,x,y);
        a+=30;
        x+=30;
    }
}

function crearCirculo(x,y,radio){
        
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.fill();
}

function ahorcado(intentos){
    if(intentos==1){
        crearLinea(15,85,15,20)
    }
     else if(intentos==2){
        crearLinea(15,20,65,20)
    }
    else if(intentos==3){
        crearLinea(65,20,65,40)
    }
    else if(intentos==4){
        crearCirculo(65,40,10)
    }
    else if(intentos==5){
        crearLinea(65,50,65,90)
    }
    else if(intentos==6){
        crearLinea(65,65,45,75)
    }
    else if(intentos==7){
        crearLinea(65,65,85,75)
    }
    else if(intentos==8){
        crearLinea(65,90,45,105)
    }
    else if(intentos==9){
        crearLinea(65,90,85,105)
    }

}

salir.addEventListener("click",function(){
    window.location.href = "index.html";
})


