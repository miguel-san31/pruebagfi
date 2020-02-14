window.onload=function(){
     document.getElementById("login").addEventListener("click",logIn,false);
}
  
  function  logIn(){
    var usuario= document.getElementById('usuario').value;
    var pass= document.getElementById('pass').value;
    if(localStorage.getItem(usuario)!=null && (JSON.parse(localStorage.getItem(usuario)).pass)===pass){ 
        localStorage.setItem("usuarioActual",localStorage.getItem(usuario));
        window.location.href="cartelera.html";
    }else{
        window.location.href="registro.html";
    }
  }