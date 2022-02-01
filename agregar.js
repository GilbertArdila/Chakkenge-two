/*
  declaramos un array con los elementos a adivinar
  */
let palabras=["HTML","CSS","JAVASCRIPT"];
localStorage=window.localStorage;
localStorage.setItem("palabras",palabras);
console.log(localStorage);

//captamos elementos de la página agregar palabra
var cancelar=document.getElementById("cancelar");
var nueva=document.getElementById("agregar");
var guardar=document.getElementById("guardar");

guardar.addEventListener("click",function(){
    var nuevo= nueva.value;
    /*cambiamos la palabra introducida a mayuscula*/
    nuevo=nuevo.toUpperCase();
    /*agregamos la palabra al array*/
    palabras.push(nuevo);
    alert("La palabra "+nuevo+" se ha agregado exitosamente")
    window.location.href = "index.html";

})

cancelar.addEventListener("click",function(){
    window.location.href = "index.html";
})