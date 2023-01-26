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

    if (typeof (Storage) !== "undefined") {
        console.log("funciona el local storage");
    } else {
        console.log("no funciona el local storage");
    }

    document.getElementById("guardar").addEventListener("click", function () {
        usuario = {
            id: counter,
            usuario: document.getElementById("usuario").value,
            contraseña: document.getElementById("contraseña").value,
            string:function(){
                var arraydata = [id,usuario,contraseña];
                return arraydata;
            }
        };
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
    document.querySelectorAll("li").forEach(e => {
        ul.removeChild(e);
    });
    for (i = 0; i < localStorage.length; i++) {
        console.log(JSON.parse(localStorage.getItem(i)));

        var li = document.createElement("li").appendChild(document.createTextNode(JSON.parse(localStorage.getItem(i))));
        ul.appendChild(li);
    }



}