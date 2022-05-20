window.addEventListener("load", function () {

    var provincias = document.getElementById("provincias");

    //Descargar direccion a la que conectarnos para acceder a datos
    var estaciones = cargarProvincias(provincias);
    var vector = [];
    for (prov in estaciones) {
        vector.push(prov)
    }
    vector.sort();

    for (let i = 0; i < vector.length; i++) {
        var opt = this.document.createElement("option");
        opt.value = vector[i];
        opt.innerHTML = vector[i];
        opt.onclick = pulsadaProvincia(estaciones);
        provincias.appendChild(opt);

    }

})

function pulsadaProvincia(estaciones) {
    return function () {
        var provincia = this.value;

        var select = document.getElementById("estaciones");
        select.innerHTML = "";

        var vector = [];
        for (est in estaciones[provincia]) {
            vector.push(est)
        }
        vector.sort();

        for (let i = 0; i < vector.length; i++) {
            var opt = document.createElement("option");
            opt.value = vector[i];
            opt.innerHTML = vector[i];
            opt.onclick = pulsadaEstacion(provincia, estaciones);
            select.appendChild(opt);

        }
    }
}

function pulsadaEstacion(provincia, estaciones) {
    return function () {
        var estacion = this.value;
        console.log(estaciones[provincia][estacion])
    }
}

function cargarProvincias(provincias) {
    var estaciones = {};
    var urlTemporal = descargarUrl();
    var datos = descargarDatos(urlTemporal);

    for (let i = 0; i < datos.length; i++) {
        if (estaciones[datos[i].provincia] === undefined) {
            estaciones[datos[i].provincia] = {};
        }
        estaciones[datos[i].provincia][datos[i].nombre] = datos[i];
    }

    return estaciones;
}

function descargarUrl() {
    const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdWFubHE5QGdtYWlsLmNvbSIsImp0aSI6IjdjYzUwMjhiLTZmZjktNDI0Yi1iNGYyLTU0ODQ3MzBhMTkxNCIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjUwNTMwNzIzLCJ1c2VySWQiOiI3Y2M1MDI4Yi02ZmY5LTQyNGItYjRmMi01NDg0NzMwYTE5MTQiLCJyb2xlIjoiIn0.unbsE099sapvQWPFw-iz3K6C0hOMZ151P8hkx3RnHjQ";

    var url = "https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/?api_key=" + apiKey;

    var ajax = new XMLHttpRequest();
    ajax.withCredentials = true;
    ajax.open("GET", url, false);
    ajax.setRequestHeader("cache-control", "no-cache");
    ajax.send();

    if (ajax.status == 200) {
        let obj = JSON.parse(ajax.responseText);
        if (obj.descripcion === "exito") {
            return obj.datos;
        }
    }
}

function descargarDatos(url) {
    var respuesta;

    var ajax = new XMLHttpRequest();
    ajax.open("GET", url, false);
    ajax.setRequestHeader("cache-control", "no-cache");
    ajax.send();

    if (ajax.status == 200) {
        let obj = JSON.parse(ajax.responseText);
        return obj;

    }
}