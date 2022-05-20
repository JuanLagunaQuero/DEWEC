String.prototype.esDNI = function () {
    var respuesta = false;
    var partes = (/^(\d{8})([A-Z])$/).test(this.toUpperCase());

    if (partes == true) {
        respuesta = true;
    }

    return respuesta;

}

