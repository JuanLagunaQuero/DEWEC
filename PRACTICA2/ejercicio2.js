window.addEventListener ("load",function()
{
    var boton = document.getElementById('boton');
    boton.onclick=function(ev)
    {
        ev.preventDefault();

        var nombre = document.getElementById('nombre').value;

        var apellido1 = document.getElementById('apellido1').value;

        var apellido2 = document.getElementById('apellido2').value;

        var fechaNacimiento = document.getElementById('fechaNacimiento').value;

        var DNI = document.getElementById('DNI').value;

        var curso = document.getElementById('curso').value;

        var p = document.getElementById('display');

        var alumnoNuevo = new Alumno(nombre, apellido1, apellido2, fechaNacimiento, DNI, curso);

        p.innerHTML=alumnoNuevo.escribir();

    }

})
