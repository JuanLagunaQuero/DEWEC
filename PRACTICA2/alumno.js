//Jugando con objetos en JavaScript

/*Objeto JavaScript para alumno
    Propiedades:
        Nombre
        Apellido1
        Apellido2
        fechaNacimiento
        DNI
        curso
    Metodos
        nombreCompleto
        edad
        letraDNI
        validarDNI
*/

function Alumno (nombre, apellido1, apellido2, fechaNacimiento, DNI, curso)
{
    this.nombre=nombre;
    this.apellido1=apellido1;
    this.apellido2=apellido2;
    this.fechaNacimiento=fechaNacimiento;
    this.DNI=DNI;
    this.curso=curso;
}

Alumno.prototype.toString = function()
{
    return this.nombreCompleto() + " (" + this.fechaNacimiento + ")";
}

Alumno.prototype.nombreCompleto = function()      
{
    return  this.nombre + " " + this.apellido1 + " " + this.apellido2;
}

Alumno.prototype.edad = function()
{
    var añoActual = (new Date()).getFullYear();
    var añoNac = this.fechaNacimiento.substr(-4);
    return añoActual-añoNac;
}

Alumno.prototype.letraDNI = function()
{
    return this.DNI.substr(-1);
}

Alumno.prototype.validarDNI = function()
{
    var parte_numerica = this.DNI.substr(0,this.DNI.length-1);
    return "TRWAGMYFPDXBNJZSQVHLCKE"[parte_numerica%23]==this.letraDNI();
}


Alumno.prototype.escribir = function()
{
    var respuesta = "Hola, mi nombre es " +this.nombreCompleto()+ ", ";
    respuesta+= "nací el día " +this.fechaNacimiento+ ", ";
    respuesta+= "mi DNI es <span style=color:" +((this.validarDNI())?"green" : "red")+ ">" +this.DNI+ "</span>, ";
    respuesta+="y estoy matriculado en " +this.curso+ ".";

    return respuesta;
}