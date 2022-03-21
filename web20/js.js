$(function () {
    var enlacesdetalle = $("a[id^=detalles]");
    enlacesdetalle.removeAttr("href");
    $.each(enlacesdetalle, function (ind, valueOfElement) {
        $(this).click(
            detalleProducto($(this).attr("id").split("_")[1])
        );

    });

    var enlacescomprar = $("a[id^=comprar]");
    enlacescomprar.removeAttr("href");
    $.each(enlacescomprar, function (indexInArray, valueOfElement) {
        $(this).click(
            comprarProducto($(this).attr("id").split("_")[1])
        );

    });

    var enlacevercarrito = $("a#ver_carrito");
    enlacevercarrito.removeAttr("href");
    $(enlacevercarrito).click(
        mostrarCarrito()
    );


    $("img[id^=imagen]").draggable({
        clone: true,
        revert: true,
    });


    $("div [id='carrito']").droppable({
        drop:function (event, ui) {
            comprarProducto(ui.draggable.attr("id").split("_")[1])
        }
    })

    var contenedorMemoria = $("<div>");

    function guardaProductos() {
        contenedorMemoria.append($("div.cuerpo").children());
    }

    function restauraProductos() {
        $("div.cuerpo").empty().append(contenedorMemoria.children());
        $("h2.titulo_zona").text("Productos de cocina");
    }

    function detalleProducto(id) {
        return function () {
            var contenedor = $("<div>").load("plantillas/detalle.html", function () {
                $.getJSON("ajax.php",
                    {
                        accion: "detalle",
                        id: id
                    },
                    function (data) {
                        contenedor.find("div.precio").text(data.precio + "€");
                        contenedor.find("p").text(data.descripcion);
                        var ruta = "index_files/" +
                            ((id < 10) ? "0" + id : id) +
                            "coc.jpg";
                        contenedor.find("img").attr("src", ruta);
                        contenedor.find("a:first").click(function (ev) {
                            ev.preventDefault();
                            comprarProducto(id);
                        })
                        contenedor.find("a:last").click(function (ev) {
                            ev.preventDefault();
                            restauraProductos();
                        })
                        $("h2.titulo_zona").text(data.nombre);
                        guardaProductos();
                        contenedor.children().appendTo($("div.cuerpo"));
                    })
            })
        }
    }

    function actualizarCarrito() {
        $.getJSON("ajax.php?accion=ver_carrito", function (data) {
            $("span#total_carrito").text(data.total);
        })
    }

    function comprarProducto(id) {
        return function () {
            $.get("ajax.php?accion=comprar&id=" + id,
                function (data) {
                    if (data == "ok") {
                        actualizarCarrito();
                    }
                }
            )
        }
    }

    function borrarProducto(id) {
        return function () {
            $.getJSON("ajax.php?accion=eliminar&id=" + id,
                function (data) {
                    if (data = "ok") {
                        mostrarCarrito();
                    }
                }
            )
        }
    }

    function aumentarProducto(id) {
        comprarProducto(id);
        mostrarCarrito();
    }

    function disminuirProducto(id) {
        return function () {
            $.getJSON("ajax.php?accion=disminuir&id=" + id,
                function (data) {
                    if (data = "ok") {
                        mostrarCarrito();
                    }
                }
            )
        }
    }

    function mostrarCarrito() {
        var contenedor = $("<div>").load("plantillas/carrito.html",
            function () {
                $.getJSON("ajax.php?accion=ver_carrito", function (data) {
                    $("span#totalcarrito").text(data.total);
                    if (data.productos.length > 0) {
                        $.each(data.productos, function (ind, valor) {
                            var producto = contenedor.find("div[id^=producto]:first")
                        })
                    }
                })
            }
        )

    }

})
