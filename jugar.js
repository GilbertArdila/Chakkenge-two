var palabras=localStorage.getItem("palabras");
palabras=palabras.split(",");
console.log(palabras);
var imagen=document.getElementById("imagen");
var nuevoJuego=document.getElementById("nuevo");
var salir=document.getElementById("salir");
var repetir=document.getElementById("repetir");
var resultado=document.getElementById("resultado");
var pantalla=document.querySelector("canvas");
var pincel= pantalla.getContext("2d");

let letra;
/* ************************************************************ */
function random(palabras){

    var rand=~~(Math.random()*palabras.length);
    var choose=palabras[rand]
    return choose;
}
/* ************************************************************ */

var choosed=random(palabras).toString();
console.log(choosed);
let num=choosed.length;
/* ************************************************************ */

nuevoJuego.addEventListener("click",function(){
    //escondemos el botón una vez iniciado el juego
         nuevoJuego.style.display="none";
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
         capturarLetra();
         


})
/* ************************************************************ */
function pintarAhorcado(index){
    switch(index){
        case 1:
            ahorcado(1);
        break;
        case 2:
            ahorcado(2);
        break;
        case 3:
            ahorcado(3);
        break;
        case 4:
            ahorcado(4);
        break;
        case 5:
            ahorcado(5);
        break;
        case 6:
            ahorcado(6);
        break;
        case 7:
            ahorcado(7);
        break;
        case 8:
            ahorcado(8);
        break;
        case 9:
            ahorcado(9);
        break;
        case 10:
            ahorcado(10);

        break;

    }

}

    

/* ************************************************************ */

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
/* ************************************************************ */

function replicarLinea(numero) {
    for(var i=0;i<numero;i++){
        crearLinea(a,b,x,y);
        a+=30;
        x+=30;
    }
}
/* ************************************************************ */

function crearCirculo(x,y,radio){
        
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.fill();
}
/* ************************************************************ */

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
/* ************************************************************ */

function capturarLetra(){
   
    var escribir=document.getElementById("texto");
    escribir.textContent="";
    var permitidas=/[A-Z]/;
    var usadas=[];
    let errores=0;
    var aciertos=0;

    window.onkeydown= function(event){
        letra=event.key;
        letra=letra.toUpperCase();
        if(permitidas.test(letra)===false){
           alert(letra+" no es una letra");
        }else{
            if(usadas.includes(letra)){
               alert("La letra "+letra+" ya las has usado en este juego, no se puede repetir letra");
            }else{
                if(choosed.includes(letra)){
                    for(var i in choosed){
                        if(letra===choosed[i]){
                            let index=parseInt(i)
                            agregarLetra(index+1,letra);
                            usadas.push(letra);
                            index=0;
                            aciertos++;
                            if(aciertos===choosed.length){
                                imagen.setAttribute("src","https://image.freepik.com/vector-gratis/ganaste-ilustracion_183875-222.jpg");
                                repetir.style.display="inline"
                            }
                        }
                    }
                }else{
                    escribir.textContent+=letra;
                    usadas.push(letra);
                    errores++;
                    pintarAhorcado(errores)
                    if(errores===9){
                        imagen.setAttribute("src","https://png.pngtree.com/png-clipart/20210311/original/pngtree-you-lost-neon-game-art-png-image_6040395.jpg");
                        escribir.textContent="La palabra era "+choosed;
                        repetir.style.display="inline";
                        repetir.style.left="900px";
                        repetir.style.top="470px";
                        resultado.style.left="850px";
                        resultado.style.top="100px";
                       
                    }
                }
            }
            

        }



       
    }
}


/* ************************************************************ */
function agregarLetra(index,letra){

    switch(index){
        case 1:
            pintarLetra(letra,5,140)
        break;
        case 2:
            pintarLetra(letra,35,140)
        break;
        case 3:
            pintarLetra(letra,65,140)
        break;
        case 4:
            pintarLetra(letra,95,140)
        break;
        case 5:
            pintarLetra(letra,125,140)
        break;
        case 6:
            pintarLetra(letra,155,140)
        break;
        case 7:
            pintarLetra(letra,185,140)
        break;
        case 8:
            pintarLetra(letra,215,140)
        break;
        case 9:
            pintarLetra(letra,245,140)
        break;
        case 10:
            pintarLetra(letra,275,140)

        break;

    }


}

/* ************************************************************ */
    function pintarLetra(letra,x,y){
        pincel.strokeStyle="black";
        pincel.font="30pt Verdana";
        pincel.fillText(letra,x,y);
    }

/* ************************************************************ */

salir.addEventListener("click",function(){
    window.location.href = "index.html";
})
/* ************************************************************ */
repetir.addEventListener("click",function(){
    window.location.href = "jugar.html";
})

