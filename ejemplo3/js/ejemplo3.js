$(function(){
    var buscador=$("<div>").appendTo($("body")).load("plantillas/buscarPaises.html",function(){
        var caja=$(this).find("input[type=text]").keyup(function(){
            $.getJSON("https://restcountries.com/v3.1/name/"+caja.val(),
            function(data){
                lista.children().remove();
                $.each(data,function(ind,valor){
                    $("<option></option").text(valor.translations.spa.official)
                    .appendTo(lista).click(cargarBandera(valor));
                })
            });
        })
        var lista=$(this).find("select");
        var bandera=$(this).find("#bandera");
        function cargarBandera(pais){
            return function(){
                bandera.empty().append($("<img>").attr("src",pais.flags.png));
            }
        }


        var boton=$(this).find("input[type=button]").click(function(){
            $.getJSON("https://restcountries.com/v3.1/name/"+caja.val(),
            function(data){
                lista.children().remove();
                $.each(data,function(ind,valor){
                    $("<option></option").text(valor)
                    .appendTo(lista).click(cargarBandera(valor));
                })
            })
        })

    })
});