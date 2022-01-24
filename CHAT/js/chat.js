window.addEventListener("load", function () {
    var btnEnviar = document.getElementById("enviar");
    var usuario = document.getElementById("usuario");
    var mensaje = document.getElementById("mensaje");
    var archivo = document.getElementById("archivo");
    var ultimo = 0;
    const contenedor = document.getElementById("contenedor");
    btnEnviar.onclick = enviar;
    var temporizador1 = setInterval(pedirMensajes, 5000);
    

    function pedirMensajes() {
        const ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var respuesta = JSON.parse(ajax.responseText);
                if (respuesta.mensajes.length > 0) {
                    for (let i = 0; i < respuesta.mensajes.length; i++) {
                        var div = crearContenido(respuesta.mensajes[i], usuario.value)
                        contenedor.appendChild(div);
                        contenedor.scrollTop=contenedor.scrollHeight;
                    }
                }
                ultimo = respuesta.ultimo;
            }
        }
        ajax.open("GET", "php/pedir.php?ultimo=" + ultimo);
        ajax.send();
    }

    function crearContenido(mensaje, usuario) {
        const div1 = document.createElement("div");
        if (mensaje.usuario == usuario)
        {
            div1.className = "propio";
        }
        else
        {
            div1.className = "otros";
        }     
        const div2 = document.createElement("div");
        div2.className = "usuario";
        div2.innerHTML = mensaje.usuario;
        const div3 = document.createElement("div");
        div3.className = "hora";
        div3.innerHTML = mensaje.fecha;
        const div4 = document.createElement("div");
        div4.className = "texto";
        div4.innerHTML = mensaje.mensaje;
        if (mensaje.archivo!="")
        {
            var imagen = "<img src='"+mensaje.archivo+"'> ";

        }
        const div5 = document.createElement("div");
        div5.innerHTML = imagen;
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        div1.appendChild(div5);
        return div1;
    }

    function enviar(event) {
        event.preventDefault();

        if (usuario.value != "" && mensaje.value != "") {

            var formData = new FormData();
            formData.append("usuario",usuario.value);
            formData.append("mensaje",mensaje.value);

            debugger;
            if(archivo.files.length>0)
            {
                formData.append("archivo",archivo.files[0]);
            }

            fetch('php/enviar.php', { method: 'POST',  body: formData
             })
             .then(function(response) {
                if(response.ok) {
                    mensaje.value = "";
                    mensaje.focus();
                    archivo.value="";
                    //return response.text()
                } else {
                    throw "Error en la llamada Ajax";
                }
             
             })
        }
    }


})