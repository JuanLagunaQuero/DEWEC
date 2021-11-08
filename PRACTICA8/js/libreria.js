String.prototype.calculaedad = function ()
{
    var fecha_actual = new Date();

    var partes = this.split("/");

    if (partes.length==3)
    {
        var fechaN = new Date(partes[2],partes[1]-1,partes[0]);

        var edad = fecha_actual.getFullYear() - fechaN.getFullYear();
        var mes = fecha_actual.getMonth() - fechaN.getMonth();

        if (mes < 0 || (mes === 0 && fecha_actual.getDate() < fechaN.getDate())) {
            edad--;
        }
    }

    return edad;
}

validacarnet = function(fn){
    if (fn.calculaedad()>=18)
    {
        return true;
    }
    else
    {
        return false;
    }
}

validadatos = function(){
    var provincia = document.getElementById('provincia').value;
    var municipio = document.getElementById('provincia').value;
    var codigopostal = document.getElementById('provincia').value;
    var telefono = document.getElementById('telefono').value;

    if (provincia!="" && municipio!="" && codigopostal!="" && telefono!="")
    {
        return true;
    }
    else
    {
        return false;
    }
}

validadatosempresa = function(){
    debugger;
    var rsocial = document.getElementById('r_social').value;
    if (rsocial!="" && validadatos()==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

validadatospersona = function(){
    var dni = document.getElementById('dni').value;
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var fnac = document.getElementById('fechaNacimiento').value;
    var fcarnet = document.getElementById('fechaCarnet').value;
    if (dni!="" && nombre!="" && apellidos!="" && fnac!="" && fcarnet!="" && validacarnet(fnac)==true && validadatos()==true)
    {
       return true;

    }
    else
    {
        return false;
    }

}

abreventana = function(){
    window.open("vehiculo.html", "Vehiculo");
}