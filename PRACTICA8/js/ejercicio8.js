window.addEventListener("load", function () {
    var empresa = document.getElementById('tipoempresa');
    var divempresa = document.getElementById('empresa');



    var persona = document.getElementById('tipopersona');
    var divpersona = document.getElementById('persona');
    var txtareaInformacion = document.getElementById("informacion");
    var btnDatos = document.getElementById('btnDatos');
    var divdatos = document.getElementById('datos');
    var selProvincia = document.getElementById("provincia");
    var selMunicipio = document.getElementById("municipio");
    var txtCodigoPostal = document.getElementById("codigopostal");
    var vehiculo = document.getElementById("vehiculo");


    btnDatos.onclick = function () {
        if (empresa.checked == true) {
            divempresa.className = "";
            divdatos.className = "";
            divpersona.className = "oculto";
            var contenido = txtareaInformacion.value;
            contenido = contenido.replaceAll("\"", "");
            var filas = contenido.split("\n");
            var provincias = [];
            var municipios = [];
            for (let i = 0; i < filas.length; i++) {
                let partes = filas[i].split(";");
                if (provincias[partes[0]] == undefined) {
                    provincias[partes[0]] = [];
                }
                provincias[partes[0]].push(partes[1]);
                if (municipios[partes[1]] == undefined) {
                    municipios[partes[1]] = [];
                }
                municipios[partes[1]].push(partes[2]);
            }

            for (let provincia in provincias) {
                selProvincia.innerHTML += "<option value='" + provincia + "'> " + provincia + "</option>";
            }
            selProvincia.onchange = function () {
                selMunicipio.innerHTML = "";
                for (let i = 0; i < provincias[this.value].length; i++) {
                    let municipio = provincias[this.value][i];
                    selMunicipio.innerHTML += "<option value='" + municipio + "'> " + municipio + "</option>";
                }
            }
            selMunicipio.onchange = function () {
                txtCodigoPostal.innerHTML = "";
                let codigopostal = municipios[this.value][0];
                txtCodigoPostal.value = codigopostal;

            }

            vehiculo.onclick = function () {
                if (validadatosempresa()==true) {
                    abreventana();
                }
                else {
                    alert("Rellene todos los datos");
                }
            }





        }
        else {
            if (persona.checked == true) {
                divpersona.className = "";
                divdatos.className = "";
                divempresa.className = "oculto";
                var contenido = txtareaInformacion.value;
                contenido = contenido.replaceAll("\"", "");
                var filas = contenido.split("\n");
                var provincias = [];
                var municipios = [];
                for (let i = 0; i < filas.length; i++) {
                    let partes = filas[i].split(";");
                    if (provincias[partes[0]] == undefined) {
                        provincias[partes[0]] = [];
                    }
                    provincias[partes[0]].push(partes[1]);
                    if (municipios[partes[1]] == undefined) {
                        municipios[partes[1]] = [];
                    }
                    municipios[partes[1]].push(partes[2]);
                }

                for (let provincia in provincias) {
                    selProvincia.innerHTML += "<option value='" + provincia + "'> " + provincia + "</option>";
                }
                selProvincia.onchange = function () {
                    selMunicipio.innerHTML = "";
                    for (let i = 0; i < provincias[this.value].length; i++) {
                        let municipio = provincias[this.value][i];
                        selMunicipio.innerHTML += "<option value='" + municipio + "'> " + municipio + "</option>";
                    }
                }
                selMunicipio.onchange = function () {
                    txtCodigoPostal.innerHTML = "";
                    let codigopostal = municipios[this.value][0];
                    txtCodigoPostal.value = codigopostal;

                }

                vehiculo.onclick = function () {
                    if (validadatospersona()==true) {
                        abreventana();
                    }
                    else {
                        alert("Rellene todos los datos");
                    }
                }
            }

        }
    }






})