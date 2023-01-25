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
        var usuario = {
            "usuario":document.getElementById("usuario").value,
            "contraseña":document.getElementById("contraseña").value
        };
        localStorage.setItem("usuario",JSON.stringify(usuario));
        console.log({ ...localStorage });
        adminLista();
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
    var li="";
    li = document.createElement("li");
    document.querySelectorAll("li").forEach(e => {
        ul.removeChild(e);
    });

    Object.values(localStorage).forEach(function (key) {
        li.appendChild(document.createTextNode(":"+key));
        ul.appendChild(li);
    });
}