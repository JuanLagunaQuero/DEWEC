/*RELACIÓN DE EJERCICIOS*/

//Función pow que pasados dos números eleve el primero al segundo.
function elevar(base,numero)
{
    return Math.pow(base,numero);

}

//Función que dado un número entero y un número de caracteres devuelve una cadena con ese número completado con 0 "0017".

function añade_cero (numero , caracteres)
{
    var tamaño = (numero+"").length;
    var ceros = caracteres-tamaño;
    var final = numero;
    for (i=0; i<ceros; i++)
    {
        final = "0" + final;
    }
    return final;
}

//Función que pasado el año de nacimiento me devuelva si soy mayor de edad o no.

function mayor_edad (año_nac)
{
    if ((2021-año_nac)>=18)
    {
        return "Mayor de edad";
    }
    else
    {
        return "Menor de edad";
    }
}

//Función que admita uno o dos parámetros, el primero es el año de nacimiento y el segundo el actual (por defecto 2021)
//y me diga si soy mayor de edad

function mayor_edad (año_nac,año_actual=2021)
{
    if ((año_actual-año_nac)>=18)
    {
        return "Mayor de edad";
    }
    else
    {
        return "Menor de edad";
    }
}

//Función que me devuelve la media de los valores pasados.

function media ()
{
    var n = arguments.length;
    var media = 0;
    var suma = 0;
    for (i=0; i<n; i++)
    {
        suma = suma + arguments[i];
    }

    media = suma / n;
    return media;

}

//Función min que devuelve el mínimo de los valores pasados.

function valor_minimo()
{
    var n = arguments.length;
    var min = arguments[0];
    for (i=0; i<n; i++)
    {
        if (arguments[i]>arguments[i+1])
        {
            min = arguments[i+1];
        }
        
    }
    return min;
}

//Función sort que devuelve un array con los valores pasados ordenados.
function ordenados()
{
    arguments=arguments.sort();
}

//Función sort que devuelve un array con los valores pasados ordenados pero si el ultimo valor es d tiene que ser decreciente.
function ordenados_d()
{

}


