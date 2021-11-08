

function suma()
{
    document.getElementById('resu').value =
    (document.getElementById('nume1').value-0)+
    (document.getElementById('nume2').value-0);
}


tabla = function(base)
{
    return function(numero)
    {
        return base * numero;
    }
}

total = function(a,b){return a+b}(3,6)

//
//
//
//