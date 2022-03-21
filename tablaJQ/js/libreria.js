$(function () {
    $.getJSON("https://restcountries.com/v3.1/all", function (data) {
        var filas = [];
        $.each(data, function (indexInArray, valueOfElement) {
            filas.push([data[indexInArray].name.common, data[indexInArray].area]);
        })

        $("table").dataTable({
            data: filas,
            columns: [
                { title: "Name" },
                { title: "Area" }
            ],
            order: [1, "asc"]
        })

    })

    var bandera=$(this).find("#bandera");
        function cargarBandera(pais){
            return function(){
                bandera.empty().append($("<img>").attr("src",pais.flags.png));
            }
        }
})