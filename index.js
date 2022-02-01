


/*
  captamos los botónes para darles funciones
*/
var iniciar=document.getElementById("iniciar");
var agregar=document.getElementById("agregar");




iniciar.addEventListener("click",function(){

    window.location.href = "jugar.html";
    /*random(palabras);
    console.log(palabras);*/
})

agregar.addEventListener("click",function(){
    window.location.href = "agregar.html";
    /*agregarPalabra(palabras);*/



})


function agregarPalabra(palabras){

    var nuevo= prompt("Ingresa una palabra nueva");
    /*cambiamos la palabra introducida a mayuscula*/
    nuevo=nuevo.toUpperCase();
    /*agregamos la palabra al array*/
    palabras.push(nuevo);
}

function random(palabras){

    var rand=~~(Math.random()*palabras.length);
    var choose=palabras[rand]
    document.write(choose);
}



/*
capturamos el evento onkeydown para saber que tecla presiona el usuario y la mostramos en el textarea
*/
window.onkeydown= function(event){
    var letra=event.key;
    letra=letra.toUpperCase();
    console.log(letra);
    var escribe=document.getElementById('texto');
    escribe.value+=letra;

}
