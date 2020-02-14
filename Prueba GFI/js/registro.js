window.onload=function(){
    document.getElementById("inicio").addEventListener("click",registrar,false);
}

function registrar(){
    var usuario=document.getElementById('usuario').value; 
    if(localStorage.getItem(usuario)===null){
      var pass= document.getElementById('password').value;
      var arrayFavoritos=[];
      var datosUsuario={"usuario" : usuario, "pass" : pass, "favoritos" : arrayFavoritos};
      localStorage.setItem(usuario, JSON.stringify(datosUsuario));
      localStorage.setItem("usuarioActual",localStorage.getItem(usuario));
      window.location.href="index.html";
        }else{
     alert("El usuario ya existe"); 
    }
  }
