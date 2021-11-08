String.prototype.buscarTodas = function(subcadena="")
{
    var cadena= " " + this.valueOf() + " ";
    var coincidencias=[];
    var j=-1;
    if (cadena != "")
    {
        while (cadena.indexOf(subcadena,j)>=0)
        {
            j=cadena.indexOf(subcadena,j);

            let posanterior = cadena.lastIndexOf(" ",j);
            let possiguiente = cadena.indexOf(" ",j);
            coincidencias[coincidencias.length]=cadena.substring(posanterior+1,possiguiente);
            j++;
        }
    }
    
    return coincidencias;


}



