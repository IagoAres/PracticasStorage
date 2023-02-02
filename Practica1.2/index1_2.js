'use STRICT'
var ul = document.getElementById("lista");
let usuario = "";
window.onload = function () {
    //localStorage.clear();
    var counter = 0;
    if (localStorage.length > 0) {
        counter = localStorage.length;
    }
    console.log(counter);

    if (typeof (Storage) == "undefined") {
        alert.log("no funciona el local storage");
    }

    document.getElementById("guardar").addEventListener("click", function () {
        usuario = {
            id: counter,
            usuario: document.getElementById("usuario").value,
            contraseña: document.getElementById("contraseña").value,
            string: function () {
                var arraydata = [id, usuario, contraseña];
                return arraydata;
            }
        };
        console.log(usuario);
        localStorage.setItem(counter, JSON.stringify(usuario));
        console.log({ ...localStorage });
        adminLista();
        counter = localStorage.length;
    })

    /*document.getElementById("borrar").addEventListener("click", function () {
        localStorage.removeItem(document.getElementById("peliborrar").value);
        console.log({ ...localStorage });
        adminLista();
    })*/
    console.log({ ...localStorage });
    adminLista();
}

function adminLista() {
    var li = document.createElement("li")
    document.querySelectorAll("li").forEach(e => {
        ul.removeChild(e);
    });
    for (i = 0; i < localStorage.length; i++) {

        var texto = JSON.parse(localStorage.getItem(i));
        console.log(texto);
        for (var x in texto) {
            li.appendChild(document.createTextNode(x + ": "));
            li.appendChild(document.createTextNode(texto[x] + ": "));
            ul.appendChild(li);
        }
        li = document.createElement("li");
    }
}