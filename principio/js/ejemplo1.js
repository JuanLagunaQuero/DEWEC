//Ejercicio1 toma contacto

function clonar(){

    var div = document.querySelectorAll("body>div")[1]

    var nuevo = div.cloneNode(true)
    
    var enlace = document.getElementById("enlace")
    
    var padre = enlace.parentElement
    
    padre.insertBefore(nuevo,enlace)
    
    
    for (let i=0; i<nuevo.children.length; i++)
        { 
            nuevo.children[i].setAttribute("id",nuevo.children[i].getAttribute("id")+1)
        }
}


function cambiarContenido(contenido) {
    /*var h1 = document.getElementsByTagName("h1")[0];*/
    /*var h1 = document.getElementById("titulo");*/
    /*var h1 = document.getElementsByClassName("informacion")[0];*/
    var h1 = document.querySelector("h1");

    h1.innerHTML = contenido;
    h1.style.color = "red";
    h1.setAttribute("id", "logro");
    h1.setAttribute("class", "clas");
}

function añadirParrafos(cantidad) {
    var contenido = document.getElementById("contenido");

    for (let i = 1; i <= cantidad; i++) {
        var p = document.createElement("p");
        p.innerHTML = "PARRAFO CREADO " + i;
        p.setAttribute("class", "automatico");
        p.onclick=pulsado;
        contenido.appendChild(p);
    }
}

function pulsado()
{
    alert (this.innerHTML);
}

function numerar() {
    var parrafos = document.querySelectorAll("#contenido>p");

    for (let i = 0; i < parrafos.length; i++) {
        if (i % 2 == 0) {
            parrafos[i].style.backgroundColor = "yellow";
        }
        else {
            parrafos[i].style.backgroundColor = "green";
        }
        parrafos[i].innerHTML = (i + 1) + ". " + parrafos[i].innerHTML;
    }
}


function crearTabla(numero)
{
    var tabla = document.createElement("table");

    for (let i = 0; i <= 10; i++)
    {

        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        celda1.innerHTML=i;

        var celda2 = document.createElement("td");
        celda1.innerHTML=numero;
        fila.appendChild(celda1);

        fila.appendChild(celda2);

      

        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
}


function mostrarTabla(){
    var numero = document.getElementById("numero").value;

    if (numero != "")
    {
        var tabla = document.createElement("table");
        for (let i=1; i<=10; i++){
            var fila = document.createElement("tr");
            var celda1 = document.createElement("td");
            celda1.innerHTML=i;
            var celda2 = document.createElement("td");
            celda2.innerHTML="x";
            var celda3 = document.createElement("td");
            celda3.innerHTML=numero;
            var celda4 = document.createElement("td");
            celda4.innerHTML="=";
            var celda5 = document.createElement("td");
            celda5.innerHTML=i*numero;
            fila.style.border="hidden";

            fila.appendChild(celda1);
            fila.appendChild(celda2);
            fila.appendChild(celda3);
            fila.appendChild(celda4);
            fila.appendChild(celda5);

            if (i % 2 == 0) {
                fila.style.backgroundColor = "yellow";
            }
            else {
                fila.style.backgroundColor = "green";
            }

            tabla.appendChild(fila);
        }

        var pantalla = document.getElementById("pantalla");
        pantalla.innerHTML="";

        pantalla.appendChild(tabla);
    }
}


window.onload=function(){
    var boton = document.getElementById("boton");
    boton.onclick=mostrarTabla;
}