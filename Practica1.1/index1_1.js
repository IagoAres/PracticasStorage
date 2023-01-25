'use STRICT'
var ul = document.getElementById("lista");
window.onload = function () {
    //localStorage.clear();
    if (typeof (Storage) !== "undefined") {
        console.log("funciona el local storage");
    } else {
        console.log("funciona el local storage");
    }
    document.getElementById("guardar").addEventListener("click", function () {
        localStorage.setItem(document.getElementById("peliculas").value,document.getElementById("peliculas").value);
        console.log({ ...localStorage });
        adminLista();
    })

    document.getElementById("borrar").addEventListener("click", function () {
        localStorage.removeItem(document.getElementById("peliborrar").value);
        console.log({ ...localStorage });
        adminLista();
    })
    console.log({ ...localStorage });
    adminLista();
}

function adminLista() {
    document.querySelectorAll("li").forEach(e => {
            ul.removeChild(e);
    });

    Object.keys(localStorage).forEach(function (key) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(key));
        ul.appendChild(li);
    });
}