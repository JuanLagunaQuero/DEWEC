//Validar una IP
    var ip = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/ig;


//1 Validar que es fecha
//CUTRE
    var expr = /^(\d\d[\/-]\d\d[\/-]\d{4})/;
//BIEN
    var exp = /^(0[1-9]|[1-2]\d|3[0-1])[\/-](0[1-9]|1[0-2])[\/-](\d{4})$/;


//2 Validar hora minutos y segundos
    var hms =  /^([01]\d|2[0-3])[:]([0-5]\d)[:]([0-5]\d)$/;


//3 La frase comienza por una palabra mayuscula y captar palabra
    var frase =/^([A-ZÑ][a-zñ]*) .*$/;


//4 Expresion regular tarjeta credito
    var tarjeta = /^(\d{4} ?){4}$/;


//5 Aula donde donde primer digito es planta segundo numero aula y letra edificio
//CUTRE
    var instit = /^\d\d[ABC] $/;
//BIEN
    var insti = /^([0-2]\d[ABC])$/;


//6 Telefono
    var tlf = /^(((0034|+34)?[ _.]?)(\d[ _.]?{9}) )$/;


//7 Fichero imagen jpg,png,gif
    var fichero = "";

    
//8 Matricula coche
    var matricula = "";


//9 Email
    var email = "";


//10 URL
    var url = "";