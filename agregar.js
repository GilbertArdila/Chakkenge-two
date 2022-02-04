

var palabras=localStorage.getItem("palabras");
palabras=palabras.split(",");
console.log(palabras);

//captamos elementos de la página agregar palabra
var cancelar=document.getElementById("cancelar");
var nueva=document.getElementById("agregar");
var guardar=document.getElementById("guardar");

guardar.addEventListener("click",function(){
  var nuevo= nueva.value;
  
  if(nueva.value != ""){
    
    if(nuevo.length <= 10){
      
         /*cambiamos la palabra introducida a mayuscula*/
    nuevo=nuevo.toUpperCase();
    /*agregamos la palabra al array*/
    palabras.push(nuevo);
    alert("La palabra "+nuevo+" se ha agregado exitosamente")
    localStorage.setItem("palabras",palabras);
      console.log(localStorage);
    window.location.href = "index.html";
    }else{
      alert("La palabra "+nuevo+" tiene más de 10 caracteres");
      nueva.value="";
      
    }
    
  }else{
    window.location.href = "index.html";
  }
    

})

cancelar.addEventListener("click",function(){
    window.location.href = "index.html";
})