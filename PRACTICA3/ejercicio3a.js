window.addEventListener ("load",function()
{
    var boton = document.getElementById('buscar');
    boton.onclick=function()
    {
        var cadena = document.getElementById('cadena').value;

        var subcadena = document.getElementById('subcadena').value;

        var p = document.getElementById('parrafo');

        p.innerHTML=cadena.buscarTodas(subcadena);
    }    

})    
