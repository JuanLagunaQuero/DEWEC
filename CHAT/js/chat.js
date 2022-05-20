function rellenarModelo(id, usuario, fechahora, mensaje, modelo) {
    var copia = modelo.cloneNode(true);
    copia.children[0].innerHTML = fechahora;
    copia.children[0].setAttribute("data-ultimo", id);
    copia.children[1].innerHTML = usuario;
    copia.children[2].innerHTML = mensaje;
    return copia;
}

function traerMensajes(modelo, contenedor) {
    return function () {
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {

                var mensajes = JSON.parse(ajax.responseText);
                mensajes.reverse();
                contenedor.innerHTML = "";
                for (let i = 0; i < mensajes.length; i++) {
                    contenedor.
                        appendChild(rellenarModelo(mensajes[i].id,
                            mensajes[i].usuario,
                            mensajes[i].fechahora,
                            mensajes[i].mensaje,
                            modelo));

                }
            }
        }
        ajax.open("GET", "php/leer.php");
        ajax.send();
    }
}

function enviarMensaje(cajaTexto, cajaUsuario) {
    return function (ev) {
        ev.preventDefault();
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var respuesta = ajax.responseText;
                if (respuesta == "OK") {
                    cajaTexto.value = "";
                    cajaTexto.focus();
                    cajaUsuario.value = "";
                }
                else {
                    alert("El mensaje no se ha podido insertar");
                }
            }
        }
        ajax.open("GET", "php/insertar.php?usuario=" + cajaUsuario.value + "&mensaje=" + cajaTexto.value);
        ajax.send();
    }
}


window.addEventListener("load", function () {

    var cajaUsuario = document.getElementById("usuario");
    var cajaTexto = document.getElementById("texto");
    var boton = document.getElementById("enviar");
    var contenedor = document.getElementById("contenedor");

    //Creo el modelo
    var contenedorModelo = document.createElement("div");
    contenedorModelo.appendChild(contenedor.children[0])
    modelo = contenedorModelo.children[0];

    var temp = window.setInterval(traerMensajes(modelo, contenedor), 3000);

    boton.onclick = enviarMensaje(cajaTexto, cajaUsuario);


})