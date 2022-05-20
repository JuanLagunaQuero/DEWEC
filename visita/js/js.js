window.addEventListener("load", function () {

    var btnAcceder = document.getElementById("acceder");
    var txtUser = document.getElementById("user");
    var txtClave = document.getElementById("clave");


    btnAcceder.onclick = comprobarUsuario(txtUser, txtClave);
})

function comprobarUsuario(txtUser, txtClave) {
    return function (ev) {
        ev.preventDefault();

        var datos = "user=" + txtUser.value + "&clave=" + txtClave.value;

        //AJAX
        var ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var respuesta = JSON.parse(this.responseText);
                if (respuesta.sucess) {
                    document.getElementById("identificacion").style.display="none";

                    var plantilla = traerPlantilla("plantillas/visitas.html");
                    for (let i = 0; i < respuesta.desplazamientos.length; i++) {
                        var copia = plantilla.cloneNode(true);
                        copia.children[0].children[0].innerHTML = respuesta.desplazamientos[i];
                        copia.children[1].style.display = "none";
                        copia.children[0].children[1].onclick = pulsado;
                        copia.children[0].children[1].onmouseenter = punteroFlecha;
                        copia.children[0].children[1].onmouseleave = punteroCursor;
                        document.body.appendChild(copia);
                    }
                }
            }
        }

        ajax.open("POST", "login.php");
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.send(datos);
    }
}

function traerPlantilla(url) {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url, false);
    ajax.send();
    var textoPlantilla = ajax.responseText;

    var div = document.createElement("div");

    div.innerHTML = textoPlantilla;

    return div;

}

function pulsado() {
    var valor = this.innerHTML;
    if (valor === "+") {
        this.innerHTML = "-";
        this.parentNode.nextElementSibling.style.display = "block";
    }
    else {
        this.innerHTML = "+";
        this.parentNode.nextElementSibling.style.display = "none";
    }
}


function punteroFlecha() {
    this.style.cursor = "arrow";
}

function punteroCursor() {
    this.style.cursor = "pointer";
}