let palabra=document.getElementById("palabra");
let guardar=document.getElementById("guardar");
let cancelar=document.getElementById("cancelar");

let palabras=sessionStorage.getItem("palabras");
palabras=palabras.split(",");
console.log(palabras);



cancelar.addEventListener("click",function(){
    window.location.href="/index.html";
});



guardar.addEventListener("click",function(){
  
   if(palabra.value != ""){
    var nueva=palabra.value;
    nueva=nueva.toUpperCase();
    palabras.push(nueva);
    sessionStorage.setItem("palabras",palabras);
    window.location.href="../templates/jugar.html";

   }else{
    sessionStorage.setItem("palabras",palabras);
    window.location.href="../templates/jugar.html";
   }
   
  
  

});