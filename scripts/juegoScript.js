let teclado=document.getElementById("teclado")
teclado.style.display="none";

let palabras=sessionStorage.getItem("palabras");
palabras=palabras.split(",");

var screen=document.getElementById("canvas");
var brush=screen.getContext("2d");

var nuevo=document.getElementById("nuevo");
var salir=document.getElementById("salir");
denuevo=document.getElementById("denuevo");

/* *************Evento para el botón desistir***********/
salir.addEventListener("click",function(){
  window.location.href="/index.html";
});
/* **************Evento para el botón juego nuevo***************/
nuevo.addEventListener("click",function(){
    nuevo.style.display="none";
    teclado.style.display="block";
    lienzo();
    replicarLinea(num)
    capturarLetra()
   
  
})
/* ********************Función para el botón deNuevo**********/
denuevo.addEventListener("click",function(){
    location.reload();
})
/* *************función para escoger palabra al azar***********/
function azar(palabras){
   var rand= ~~(Math.random()*palabras.length);
   var choose=palabras[rand]
   return choose;
}


var choosed=azar(palabras).toString();
console.log(choosed);
let num=choosed.length;
/* ***************************Función para pintar la pantalla inicial*****************/
function lienzo(){
    brush.fillStyle="#F1EDEC";
    brush.fillRect(0,0,800,400);
    brush.fillStyle="black";
    brush.beginPath();
    brush.moveTo(5,105);
    brush.lineTo(30,105);
    brush.lineTo(15,85);
    brush.lineTo(5,105);
    brush.strokeStyle="black";
    brush.stroke();
}
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

    

/* ****************************función para crear linea******************************** */

var a=5;
var b=140;
var x=30;
var y=140;

function crearLinea(a,b,x,y){
    
    brush.moveTo(a,b);
    brush.lineTo(x,y);
    brush.strokeStyle="black";
    brush.stroke();
}
/* ******************Función para replicar la linea****************************************** */

function replicarLinea(numero) {
    for(var i=0;i<numero;i++){
        crearLinea(a,b,x,y);
        a+=30;
        x+=30;
    }
}
/* ********************Función para hacer la cabeza**************************************** */

function crearCirculo(x,y,radio){
        
    brush.fillStyle = "black";
    brush.beginPath();
    brush.arc(x, y, radio, 0, 2*3.14);
    brush.fill();
}
/* ********************Función para pintar el ahorcado**************************************** */

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
/* *************************Función para capturar letra por teclado*********************************** */

function capturarLetra(){
   
    var escribir=document.getElementById("texto");
    escribir.textContent="";
    var permitidas=/[A-ZÑ]/;
    var usadas=[];
    let errores=0;
    var aciertos=0;
 //captura la letra por tecla
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
                                escribir.textContent="Felicitaciones, ganaste!!";
                                jugarDeNuevo();
                            }
                            
                        }
                    }
                }else{
                    escribir.textContent+=letra;
                    usadas.push(letra);
                    errores++;
                    pintarAhorcado(errores)
                    if(errores===9){
                        escribir.textContent="Lo sentimos, perdiste, la palabra era "+choosed;
                        jugarDeNuevo();
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
        brush.strokeStyle="black";
        brush.font="30pt Verdana";
        brush.fillText(letra,x,y);
    }
/* ****************función reconocer teclas en mobile************/


function input(){
   
    var permitidas=/[A-ZÑ]/;
    var usadas=[];
    let errores=0;
    var aciertos=0;
    teclado=document.getElementById("teclado");
    let letra=teclado.value;
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
                            var escribir=document.getElementById("texto");
                            escribir.textContent="Felicitaciones, ganaste!!";
                            jugarDeNuevo();
                        }
                    }
                }
             }else{
                
                usadas.push(letra);
                errores++;
                pintarAhorcado(errores)
                if(errores===9){
                    var escribir=document.getElementById("texto");
                    escribir.textContent="Lo sentimos, perdiste, la palabra era "+choosed;
                    jugarDeNuevo();
                }
             }
        }
      } 
     
                   
    }

/* ******************************letra incliuda***********************/        
    function letraIncluida(choosed,aciertos,usadas){
        
        
        for(var i in choosed){
            if(letra===choosed[i]){
                let index=parseInt(i)
                agregarLetra(index+1,letra);
                usadas.push(letra);
                index=0;
                aciertos++;
                if(aciertos===choosed.length){
                    escribir.textContent="Felicitaciones, ganaste!!";
                }
            }
        }
    }
            
/* ******************************letra no incliuda***********************/        
function letraNoIncluida(usadas,errores,escribir){
   
    escribir.textContent+=letra;
    usadas.push(letra);
    errores++;
    pintarAhorcado(errores)
    if(errores===9){
        escribir.textContent="Lo sentimos, perdiste, la palabra era "+choosed;
       
    }
}
/* Función para volver a jugar************************************/
function jugarDeNuevo(){
    
    denuevo.style.display="block";
   

    
}
 
  
