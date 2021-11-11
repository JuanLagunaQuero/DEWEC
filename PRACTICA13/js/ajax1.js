window.addEventListener("load", function () {
    const form = document.getElementById("form1");
    const respuesta = document.getElementById("respuesta");
    const ultimasnoticias=document.getElementById("ultimasnoticias");
    form["enviar"].onclick = function (ev) {
        ev.preventDefault();
        var nombre = form["nombre"].value;
        var apellidos = form["apellidos"].value;

        const ajax = new XMLHttpRequest();
        ajax.onload = function () {
            respuesta.innerHTML = this.responseText;
        }
        ajax.open("GET", "responder.php?nombre=" + nombre + "&apellidos=" + apellidos);
        ajax.send();

    }
    function actualiza() {
        const ajax = new XMLHttpRequest();
        ajax.onload = function () {
            ultimasnoticias.innerHTML = this.responseText;
        }
        ajax.open("GET", "ultimaNoticia.txt");
        ajax.send();
    }
    window.setInterval(actualiza, 500);
})