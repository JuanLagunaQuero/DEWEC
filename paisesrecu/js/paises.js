window.addEventListener("load", function () {

    var inputs = document.querySelectorAll("div.regiones input[name=region]");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onclick = descargarPaises;

    }
})

function descargarPaises() {

    var region = this.value;
    fetch("https://restcountries.com/v3.1/region/" + region).
        then(response => response.json()).
        then(json => {
            var select = document.getElementById("paises");
            paises.innerHTML = "";
            for (let i = 0; i < json.length; i++) {
                var opt = document.createElement("option");
                opt.innerHTML = json[i].translations.spa.official;
                opt.onclick = mostrarInformacion(json[i]);
                select.appendChild(opt);
            }
        })
}

function mostrarInformacion(objetoPais) {
    return function () {
        var info = document.getElementById("info");
        info.innerHTML = "";

        var nombre = document.createElement("h1");
        nombre.innerHTML = objetoPais.name.common;
        info.appendChild(nombre);

        var bandera = document.createElement("img");
        bandera.setAttribute("src", objetoPais.flags.png);
        info.appendChild(bandera);

        var poblacion = document.createElement("h2");
        poblacion.innerHTML = objetoPais.population;
        info.appendChild(poblacion);
    }
}