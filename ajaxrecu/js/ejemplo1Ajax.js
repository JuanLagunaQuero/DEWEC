window.addEventListener("load", function () {
    var button = document.getElementsByTagName("button")[0];
    button.onclick = cargarMensaje;
    //this.window.setInterval(cargarMensaje, 10000);
    window.setInterval(obtenerHora, 1000);
    window.setInterval(cargarAlumnos, 5000);
})


/* function cargarMensaje() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var mensaje = document.getElementById("mensaje");
            mensaje.innerHTML = ajax.responseText;
        }
    }

    ajax.open("GET", "fichero.txt");
    ajax.send();
} */

function cargarMensaje() {
    fetch("fichero.txt")
        .then(x => x.text())
        .then(y => document.getElementById("mensaje").innerHTML = y)
}

/* function cargarAlumnos() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var vector = JSON.parse(ajax.responseText);
            vector.sort();
            var listado = document.getElementById("listado");
            listado.innerHTML = "";
            for (let i = 0; i < vector.length; i++) {
                var li = document.createElement("li");
                li.innerHTML = vector[i];
                listado.appendChild(li);
            }
        }
    }

    ajax.open("GET", "listadoAlumnos.txt");
    ajax.send();
} */

function cargarAlumnos() {
    fetch("listadoAlumnos.txt")
        .then(respuesta => respuesta.json())
        .then(vector => {
            var listado = document.getElementById("listado");
            listado.innerHTML = "";
            for (let i = 0; i < vector.length; i++) {
                var li = document.createElement("li");
                li.innerHTML = vector[i];
                listado.appendChild(li);
            }
        })
}


function obtenerHora() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var hora = document.getElementById("hora");
            hora.innerHTML = ajax.responseText;
        }
    }

    ajax.open("GET", "hora.php");
    ajax.send();
}
