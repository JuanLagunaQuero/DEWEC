/*EJERCICIOS
hacer array con split \n (nombre, tlf, fecha nacimiento) y ordenar cada uno de los tipos

fecha: añox10000 mesx100 y dias nada sumar
*/

window.addEventListener ("load",function()
{
    var boton = document.getElementById('nombres');
    boton.onclick=function()
    {
        var separar = document.getElementById('valores').value;

        var p = document.getElementById('ordenados');

        p.innerHTML=separar.split("\n").sort();
    }    

})   

window.addEventListener ("load",function()
{
    var boton = document.getElementById('telefonos');
    boton.onclick=function()
    {
        var separar = document.getElementById('valores').value;

        var p = document.getElementById('ordenados');

        p.innerHTML=separar.split("\n").sort(function(a, b){return a - b});
    }    

})   

window.addEventListener ("load",function()
{
    var boton = document.getElementById('fechas');
    boton.onclick=function()
    {
        var separar = document.getElementById('valores').value;

        var p = document.getElementById('ordenados');

        p.innerHTML=separar.compara_fechas;
    }    

})   