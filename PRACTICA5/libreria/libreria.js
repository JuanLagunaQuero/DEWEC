String.prototype.toDate=function(){

}

String.prototype.validafecha = function()
{

    var respuesta=false;

    var partes = this.split("/");

    if (partes.length==3)
    {
        var fecha = new Date(partes[2],partes[1],partes[0]);

        if (fecha.getFullYear()==partes[2] && fecha.getMonth()==(partes[1]-1) && fecha.getDate() == partes[0])
        {
            respuesta=true;
        }
    }
    
        
    return respuesta;
}

String.prototype.calculaedad = function ()
{
    var fecha_actual = new Date();

    var partes = this.split("/");

    if (partes.length==3)
    {
        var fechaN = new Date(partes[2],partes[1]-1,partes[0]);

        var edad = fecha_actual.getFullYear() - fechaN.getFullYear();
        var mes = fecha_actual.getMonth() - fechaN.getMonth();

        if (mes < 0 || (mes === 0 && fecha_actual.getDate() < fechaN.getDate())) {
            edad--;
        }
    }

    return edad;
}

String.prototype.dias_horas_vivo = function()
{
        //

        var fecha_actual = new Date().getTime();

        var partes = this.split("/");
    
        if (partes.length==3)
        {
            var fechaN = new Date(partes[2],partes[1]-1,partes[0]).getTime();
            
            var milisegundos = fecha_actual-fechaN;

            var dias = milisegundos/86400000;

            var horas = milisegundos/360000;

        }

        var respuesta = "Llevas vivo " +dias+ " dias, lo que son " +horas+ " horas";

    return respuesta;
}

String.prototype.diferencia_fechas = function(fecha1, fecha2)
{
    //entre estas dos fechas hay x años, x mes y x dias

    var f_1 = fecha1.split("/");
    var f_2 = fecha2.split("/");

    if (f_1.length==3 && f_2.length==3)
    {
        var fecha_1 = new Date(f_1[2], f_1[1]-1, f_1[0]);

        var fecha_2 = new Date(f_2[2], f_2[1]-1, f_2[0]);

        var años = "";
        var meses = "";
        var dias = "";

        if (fecha_1.getTime()>fecha_2.getTime())
        {
            años = (fecha_1.getFullYear() - fecha_2.getFullYear())
            if (fecha_1.getMonth() == fecha_2.getMonth())
            {
                
            }
        }


    }

    var respuesta = "Años: " +años+ " Meses: " +meses+ " Dias: " +dias;

    return respuesta;

}

function jubilacion()
{
    //te faltan x años, x meses y x dias para jubilarte a los 65 años
}