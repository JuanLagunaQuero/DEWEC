$(function () {
    //Ejercicio1
    $("a[id^=detalle]").click(function (ev) {
        ev.preventDefault();
        detalleProducto($(this).attr("id").split("_")[1])
    })
    $("a[id^=comprar]").click(function (ev) {
        ev.preventDefault();
        comprarProducto($(this).attr("id").split("_")[1])
    })

    $("a#ver_carrito").click(function (ev) {
        ev.preventDefault();
        mostrarCarrito();
    })

    //Ejercicio2
    $("img[id^=imagen]").draggable({
        clone: true,
        revert: true,

    });
    $("div#carrito").droppable({
        drop: function (event, ui) {
            comprarProducto(ui.draggable.attr("id").split("_")[1]);
        }
    })

    //Ejercicio 3
    var contenedorMemoria = $("<div>");

    //Funcion que guarda la pantalla de articulos en el contenedor
    function guardarProductos() {
        contenedorMemoria.append($("div.cuerpo").children());
    }

    //Funcion que restura los articulos del contenedor
    function restaurarProductos() {
        $("div.cuerpo").empty().append(contenedorMemoria.children());
        $("h2.titulo_zona").text("Productos de cocina")
    }

    //Ejercicio 4
    //función que muestra el detalle de un producto
    function detalleProducto(id) {
        var cont = $("<div>").load("plantillas/detalle.html",
            function () {
                $.getJSON("ajax.php",
                    {
                        accion: "detalle",
                        id: id
                    },
                    function (data) {
                        cont.find("div.precio").text(data.precio + " €");
                        cont.find("p").text(data.descripcion);
                        var ruta = "index_files/" +
                            ((id < 10) ? "0" + id : data.id) +
                            "coc.jpg";
                        cont.find("img").attr("src", ruta);
                        cont.find("a:first").click(function (ev) {
                            ev.preventDefault();
                            comprarProducto(id);
                        })
                        cont.find("a:last").click(function (ev) {
                            ev.preventDefault();
                            restaurarProductos();
                        })
                        $("h2.titulo_zona").text(data.nombre)
                        guardarProductos();
                        cont.children().children().appendTo($("div.cuerpo"));
                    })
            }
        )

    }

    //Ejercicio 5
    function actualizarCarrito() {
        $.getJSON("ajax.php?accion=ver_carrito", function (data) {
            $("span#total_carrito").text(data.total);
        })
    }
    //función que compra un producto
    function comprarProducto(id) {
        $.get("ajax.php?accion=comprar&id=" + id,
            function (data) {
                if (data == "ok") {
                    actualizarCarrito();
                }
            })
    }

    //ejercicio 6
    function borrarProducto(id) {
        $.get("ajax.php?accion=eliminar&id=" + id,
            function (data) {
                if (data == "ok") {
                    mostrarCarrito();
                }
            })
    }
    function aumentarProducto(id) {
        comprarProducto(id);
        mostrarCarrito();
    }

    function disminuirProducto(id) {
        $.get("ajax.php?accion=disminuir&id=" + id,
            function (data) {
                if (data == "ok") {
                    mostrarCarrito();
                }
            })
    }

    //Ejercicio 7
    function mostrarCarrito() {
        var cont = $("<div>").load("plantillas/carrito.html",
            function () {
                $.getJSON("ajax.php?accion=ver_carrito", function (data) {
                    $("span#total_carrito").text(data.total);
                    var modelo = cont.find("div[id^=producto]:first");
                    //creo las cajas
                    $.each(data.productos, function (ind, valor) {
                        var id = data.productos[ind].id;
                        var producto = modelo.clone(true);
                        producto.attr("id", "producto_" + id);
                        descargarNombre(id, producto.find("h3"));
                        var valores = [data.productos[ind].precio / data.productos[ind].cantidad + " €",
                        data.productos[ind].cantidad,
                        data.productos[ind].precio + "€"];
                        producto.find("div.precio").text(function (idx) { return valores[idx] })
                        var enlaces = producto.find("a");
                        enlaces.eq(0).click(function (id) {
                            return function (ev) {
                                ev.preventDefault();
                                borrarProducto(id);
                            }
                        }(id)
                        )
                        enlaces.eq(1).click(function (id) {
                            return function (ev) {
                                ev.preventDefault();
                                aumentarProducto(id);
                            }
                        }(id)
                        )
                        enlaces.eq(2).click(function (id) {
                            return function (ev) {
                                ev.preventDefault();
                                disminuirProducto(id);
                            }
                        }(id)
                        )
                        var ruta = "index_files/" +
                            ((id < 10) ? "0" + id : id) +
                            "coc.jpg";
                        producto.find("img").attr("src", ruta);
                        modelo.after(producto);
                    })
                    modelo.remove();
                    cont.find("h3#total span").text(data.total);
                    cont.find("div.volver a").click(function (ev) {
                        ev.preventDefault();
                        restaurarProductos();
                        programar();
                    });
                    if ($("h2.titulo_zona").text() == "Productos de cocina")
                        guardarProductos();
                    $("div.cuerpo").empty();
                    cont.children().children().appendTo($("div.cuerpo"));
                    $("h2.titulo_zona").text("Carrito compra");
                })
            })
    }

    //funciones auxiliares solicitar nombre
    function descargarNombre(id, objetoJQ) {
        $.getJSON("ajax.php?accion=detalle&id=" + id,
            function (data) {
                objetoJQ.text(data.nombre);
            }
        )
    }
});