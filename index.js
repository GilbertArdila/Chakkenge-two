
let palabras=["HTML","CSS","JAVASCRIPT"];
localStorage=window.localStorage;

localStorage.setItem("palabras",palabras);

/*
  captamos los botónes para darles funciones
*/
var iniciar=document.getElementById("iniciar");
var agregar=document.getElementById("agregar");




iniciar.addEventListener("click",function(){

    window.location.href = "jugar.html";
    
})

agregar.addEventListener("click",function(){
    window.location.href = "agregar.html";
    


})









