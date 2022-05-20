//Funcion que dada una cadena devuelva si es DNI o no
function esDNI(cadena) {
    var respuesta = false;
    var expDNI = (/^(\d{8})([A-Z])$/ig);

    var partes = expDNI.exec(cadena);

    if (partes) {
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";

        if (letras[partes[1] % 23] == partes[2].toUpperCase());
        respuesta = true;
    }

    return respuesta;
}

function noVacio(cadena) {
    var respuesta = false;
    if (cadena.replaceAll(" ",) != "") {
        respuesta = true;
    }

    return respuesta;
}

function formatoFecha(campo) {
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    var respuesta = false;

    if ((campo.match(RegExPattern)) && (campo != '')) {
        respuesta = true;
    }

    return respuesta;
}

function formatoCP(campo) {
    var RegExPattern = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    var respuesta = false;

    if ((campo.match(RegExPattern)) && (campo != '')) {
        respuesta = true;
    }

    return respuesta;
}