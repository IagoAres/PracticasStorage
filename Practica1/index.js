'use STRICT'
var pelicula = "";
var ul = document.getElementById("lista");
window.onload = function () {
    //localStorage.clear;
    if (typeof (Storage) !== "undefined") {
        console.log("funciona el local storage");
    } else {
        console.log("funciona el local storage");
    }
    var btnGuardar = document.getElementById("guardar").addEventListener("click", function () {
        pelicula = document.getElementById("peliculas").value;
        localStorage.setItem(pelicula, document.getElementById("peliculas").value);
        adminLista();
        console.log({ ...localStorage })
    })

    var btnBorrar = document.getElementById("borrar").addEventListener("click", function () {
    })


}

function adminLista() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(localStorage.getItem(pelicula)));
    ul.appendChild(li);
}