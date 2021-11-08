window.addEventListener("load",function()
{
    document.getElementById("validar").onclick=function(){

        var valor = document.getElementById('fecha_validar').value;

        var span = document.getElementById('valida');

        span.value=(valor.validafecha())?"OK":"ERROR";


    }
})

window.addEventListener("load",function()
{
    document.getElementById("calcular_edad").onclick=function(){

        var valor = document.getElementById('fecha_nac_edad').value;

        var span = document.getElementById('edad');

        span.value=(valor.calculaedad());


    }
})

window.addEventListener("load",function()
{
    document.getElementById("calcular_dv").onclick=function(){

        var valor = document.getElementById('fecha_nac_dv').value;

        var span = document.getElementById('dias_horas');

        span.value=(valor.dias_horas_vivo());


    }
})

window.addEventListener("load",function()
{
    document.getElementById("calcular_amd").onclick=function(){

        var valor1 = document.getElementById('fecha_1').value;

        var valor2 = document.getElementById('fecha_2').value;

        var span = document.getElementById('tiempo_amd');

        span.value=(diferencia_fechas(valor1,valor2));


    }
})