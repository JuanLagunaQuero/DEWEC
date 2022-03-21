$(function () {
    var continentes = $("#continentes");
    var paises = $("#paises");
    var resultados = $("#resultado");

    function cargarPais(pais) {
        return function () {
            resultados.empty();
            resultados.text(JSON.stringify(pais));
        }
    }

    var lista = continentes.find("option").on("click", function () {

        paises.empty();

        $.getJSON("https://restcountries.com/v3.1/region/" + $(this).val(),
            function (data, textStatus, jqXHR) {
                $.each(data, function (ind, valor) {
                    $("<option>")
                        .text(valor.translations.spa.official)
                        .click(cargarPais(valor))
                        .appendTo(paises);
                })
            }
        );
    })
})