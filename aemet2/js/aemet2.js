window.addEventListener("load",function(){
    var provincias=document.getElementById("provincias");
    //Descargar direccion a la que conectarnos para acceder a datos
    var estaciones=cargarProvincias(provincias);
    var vector=[];
    for (prov in estaciones){
        vector.push(prov);
    }
    vector.sort();
    for(let i=0;i<vector.length;i++){
        var opt=document.createElement("option");
        opt.value=vector[i];
        opt.innerHTML=vector[i];
        opt.onclick=pulsadaProvincia(estaciones);
        provincias.appendChild(opt);
    }
})

function pulsadaProvincia(estaciones){
    return function(){
        var provincia=this.value;
        var select=document.getElementById("estaciones");
        select.innerHTML="";
        vector=[];
        for (est in estaciones[provincia]){
            vector.push(est);
        }
        vector.sort();
        for(let i=0;i<vector.length;i++){
            var opt=document.createElement("option");
            opt.value=vector[i];
            opt.innerHTML=vector[i];
            opt.onclick=pulsadaEstacion(provincia,estaciones);
            select.appendChild(opt);
        }
    }
}
function pulsadaEstacion(provincia,estaciones){
    return function(){
        var estacion=this.value;
        console.log(estaciones[provincia][estacion]);
    }
}
function cargarProvincias(provincias){
    var estaciones={}
    var urlTemp=descargarURL();
    var datos=descargarDatos(urlTemp);
    for (let i=0;i<datos.length;i++){
        if(estaciones[datos[i].provincia]===undefined){
            estaciones[datos[i].provincia]={};
        }
        estaciones[datos[i].provincia][datos[i].nombre]=datos[i];
    }
    return estaciones;
}

function descargarURL(){
    const apiKey="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdmxAaWVzbGFzZnVlbnRlenVlbGFzLmNvbSIsImp0aSI6IjZjYzljNWZlLTU0YjUtNDg1Zi1hOGViLWFmNWY3Y2E4ZTJhNiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjUwNTI4OTY5LCJ1c2VySWQiOiI2Y2M5YzVmZS01NGI1LTQ4NWYtYThlYi1hZjVmN2NhOGUyYTYiLCJyb2xlIjoiIn0.qWdRvX5zn9_IA-etRjBYYZN6-3OhE7K2feXFKTgg8l4";
    var url="https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/?api_key="+apiKey
    var ajax=new XMLHttpRequest();
    ajax.withCredentials=true;
    ajax.open("GET",url,false);  //Conexión sincrona
    ajax.setRequestHeader("cache-control", "no-cache");
    ajax.send();
    if (ajax.status==200){
        let obj=JSON.parse(ajax.responseText);
        if (obj.descripcion==="exito"){
            return obj.datos;
        }
    }
}

function descargarDatos(url){
    var respuesta;
    var ajax=new XMLHttpRequest();
    ajax.open("GET",url,false);  //Conexión sincrona
    ajax.setRequestHeader("cache-control", "no-cache");
    ajax.send();
    if (ajax.status==200){
        let obj=JSON.parse(ajax.responseText);
        return obj;
    }
}