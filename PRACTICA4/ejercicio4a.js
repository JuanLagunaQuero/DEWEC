compara_fechas = function()
{
    var todo = document.getElementById('valores').value;

    var fechas = todo.split("\n");

    var valor = [];

    var i;

    for (i=0 ; i<fechas.length(); i++)
    {
        var partes = fechas[i].split("/");

        valor[i] = 10000*partes[2]+100*partes[1]+partes[0]*1;
    }

    return valor.sort(function(a, b){return a - b});
    

}