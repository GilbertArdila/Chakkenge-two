let palabra=document.getElementById("palabra");
let guardar=document.getElementById("guardar");
let cancelar=document.getElementById("cancelar");
let sessionStorage =window.sessionStorage;




cancelar.addEventListener("click",function(){
    window.location.href="/index.html";
});


let array=["HTML","CSS","JAVA","PYTHON"];
guardar.addEventListener("click",function(){
  
   if(palabra.value != ""){
    var nueva=palabra.value;
    nueva=nueva.toUpperCase();
    array.push(nueva);
    sessionStorage.setItem("palabras",array);
    window.location.href="../templates/jugar.html";

   }else{
    sessionStorage.setItem("palabras",array);
    window.location.href="../templates/jugar.html";
   }
   
  
  

});