var poster = [];
 var test;
    window.onload =function(){
            poster =[{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Superman Returns","Year":"2006","imdbID":"tt0348150","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},{"Title":"Superman","Year":"1978","imdbID":"tt0078346","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},{"Title":"Superman II","Year":"1980","imdbID":"tt0081573","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWUzNDJjMDUtNGEzMi00YThlLTlkMmEtNjVlOGQwOWM3MjM3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Superman III","Year":"1983","imdbID":"tt0086393","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},{"Title":"Superman IV: The Quest for Peace","Year":"1987","imdbID":"tt0094074","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"},{"Title":"Superman/Batman: Apocalypse","Year":"2010","imdbID":"tt1673430","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Superman/Batman: Public Enemies","Year":"2009","imdbID":"tt1398941","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Lois & Clark: The New Adventures of Superman","Year":"1993–1997","imdbID":"tt0106057","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"},{"Title":"Superman/Doomsday","Year":"2007","imdbID":"tt0934706","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjU4MzIyZWUtNWQ4Yy00YTU4LTk5NjUtNDBiNDkxZTVlZDgwXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"}];
            cargarPeliculas();
            cargarEventos();
        }

function cargarEventos(){
    document.getElementById("buscador").addEventListener("keyup",filtro,false);
    var checkbox=document.getElementsByTagName("input");
    for(var i=0;i<checkbox.length;i++){
        if(checkbox[i].type=="checkbox"){
            checkbox[i].addEventListener("change",marcarFavorito,false);
        }
    }
}

function filtro(){
    if(document.getElementById("buscador").value.length==0){
        cargarPeliculas();
    }else{
        var almacenarResultados=[];
        for(var i=0;i<poster.length;i++){
        if(poster[i].Title.indexOf(document.getElementById("buscador").value)!=-1){
        almacenarResultados.push(poster[i]);
        mostrarPeliculas(almacenarResultados);
        }
    } 
   }
}

function mostrarPeliculas(almacenarResultados){
    if(document.getElementById("div1").firstElementChild!=null){
        while(document.getElementById("div1").firstElementChild!=null){
            document.getElementById("div1").removeChild(document.getElementById("div1").firstElementChild);
        }
    }
    for(var i=0;i<almacenarResultados.length;i++){
         var div = document.createElement("div");
                var img = document.createElement("img");
                img.setAttribute("src", almacenarResultados[i].Poster);
                var p=document.createElement("p");                
                p.textContent=almacenarResultados[i].Title;
                div.appendChild(img);
                div.appendChild(p);
                document.getElementById("div1").appendChild(div); 
    }
}



function cargarPeliculas(){
    if(document.getElementById("div1").firstElementChild!=null){
        while(document.getElementById("div1").firstElementChild!=null){
            document.getElementById("div1").removeChild(document.getElementById("div1").firstElementChild);
        }
    }
    for(i=0;i<poster.length;i++){   
                var div = document.createElement("div");
                var img = document.createElement("img");
                img.setAttribute("src", poster[i].Poster);
                var p=document.createElement("p");                
                p.textContent=poster[i].Title;
                div.appendChild(img);
                div.appendChild(p);
                var check=document.createElement("input");check.type="checkbox";check.value=poster[i].Title;check.id=i;
                div.appendChild(check);
                document.getElementById("div1").appendChild(div); 
            } 
}

function marcarFavorito(){
    var favorito=document.getElementById(this.id).id;
    var usuario=JSON.parse(localStorage.getItem("usuarioActual"));
        if(document.getElementById(this.id).checked){
        usuario.favoritos.push(poster[favorito]);
        localStorage.setItem("usuarioActual",JSON.stringify(usuario));
    }else{
        for(var i=0;i<usuario.favoritos.length;i++){
            if(usuario.favoritos[i].Title==poster[favorito].Title){
                usuario.favoritos.splice(i,1);
            }
        }
        localStorage.setItem("usuarioActual",JSON.stringify(usuario));
    }
}

