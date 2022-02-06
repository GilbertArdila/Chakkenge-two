let sessionStorage =window.sessionStorage;
let array=["HTML","CSS","JAVA","PYTHON"];
sessionStorage.setItem("palabras",array);

let agregar=document.getElementById("agregar");
let iniciar=document.getElementById("iniciar");



iniciar.addEventListener("click",function(){
    window.location.href="../templates/jugar.html";
})



agregar.addEventListener("click",function(){
    window.location.href="../templates/palabras.html";
})

