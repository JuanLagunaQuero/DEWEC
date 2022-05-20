function validaDNI() {
    var valor = this.value;
    if (this.nextElementSibling.nodeName == "SPAN") {
        this.parentNode.removeChild(this.nextElementSibling);
    }
    if (!esDNI(valor)) {
        this.focus();

        var span = document.createElement("span");
        span.innerHTML = "No es valido"
        span.style.color = "red";

        var padre = this.parentNode;
        padre.insertBefore(span, this.nextElementSibling);
    }
}

function validanoVacio() {
    var valor = this.value;
    if (this.nextElementSibling.nodeName == "SPAN") {
        this.parentNode.removeChild(this.nextElementSibling);
    }
    if (!noVacio(valor)) {
        this.focus();

        var span = document.createElement("span");
        span.innerHTML = "No puede estar vacío"
        span.style.color = "red";

        var padre = this.parentNode;
        padre.insertBefore(span, this.nextElementSibling);
    }
}


function validaFecha() {
    var valor = this.value;
    if (this.nextElementSibling.nodeName == "SPAN") {
        this.parentNode.removeChild(this.nextElementSibling);
    }
    if (!formatoFecha(valor)) {
        this.focus();

        var span = document.createElement("span");
        span.innerHTML = "No puede estar vacío o el formato es incorrecto"
        span.style.color = "red";

        var padre = this.parentNode;
        padre.insertBefore(span, this.nextElementSibling);
    }
}

function validaCP() {
    var valor = this.value;
    if (this.nextElementSibling.nodeName == "SPAN") {
        this.parentNode.removeChild(this.nextElementSibling);
    }
    if (!formatoCP(valor)) {
        this.focus();

        var span = document.createElement("span");
        span.innerHTML = "No puede estar vacío o el codigo postal es incorrecto"
        span.style.color = "red";

        var padre = this.parentNode;
        padre.insertBefore(span, this.nextElementSibling);
    }
}

function soloNumeros(e){
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}

function soloCincoNumeros(e){
    if (this.value.length>5)
    {
        this.value=this.value.substr(0,5);
    }
}


/* hobbies con check y validar que hay al menos uno marcado, y comprobar al hacer submit, evprventdefault */
function validaCheckbox(){
    let primerElemento = document.getElementById("futbol").checked;
    let segundoElemento = document.getElementById("leer").checked;
    if (primerElemento && segundoElemento) {
        return true;
    } else {
        document.getElementById("badCheckbox").style.display = "block";
        return false;
    }
}

function noPegar(e) {
    e.preventDefault();
    alert("esta acción está prohibida");
}

window.addEventListener("load", function () {
    var formulario = document.getElementById("formulario");

    var dni = formulario["dni"];
    dni.focus();
    dni.onblur = validaDNI;
    dni.onpaste = noPegar;

    var nombre = formulario["nombre"];
    nombre.onblur = validanoVacio;
    nombre.onpaste = noPegar;

    var apellidos = formulario["apellidos"];
    apellidos.onblur = validanoVacio;
    apellidos.onpaste = noPegar;

    var fechanac = formulario["fechanac"];
    fechanac.onblur = validaFecha;
    fechanac.onpaste = noPegar;

    var edad = formulario["edad"];
    edad.onblur = validanoVacio;
    edad.onpaste = noPegar;
    edad.onkeypress = soloNumeros;

    var cp = formulario["cp"];
    cp.onblur = validaCP;
    cp.onpaste = noPegar;
    cp.onkeydown = soloNumeros;
    cp.onkeyup = soloCincoNumeros;

    var boton = formulario["guardar"];
    boton.onclick = function(e){
        e.preventDefault();
        validaCheckbox;
    }

})