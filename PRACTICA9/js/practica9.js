window.addEventListener("load", function () {
    const formulario = document.forms["form1"];
    var tabla = document.getElementById("tabla");

    const añadir = formulario.añadir;
    añadir.onclick = function () {
        var dni = formulario.dni.value;
        var nombre = formulario.nombre.value;
        var edad = formulario.edad.value;
        var respuestas = [];
        //VALIDO DNI
        if (dni.esDNI() == true) {
            respuestas.push(true);
            formulario.dni.className = "";
            formulario.dni.value = "";
        }
        else {
            respuestas.push(false);
            formulario.dni.className = "error";
        }

        //VALIDO NOMBRE
        if (nombre != "") {
            respuestas.push(true);
            formulario.nombre.className = "";
            formulario.nombre.value = "";
        }
        else {
            respuestas.push(false);
            formulario.nombre.className = "error";
        }

        //VALIDO EDAD
        if (parseInt(edad) == edad && edad >= 0) {
            respuestas.push(true);
            formulario.edad.className = "";
            formulario.edad.value = "";
        }
        else {
            respuestas.push(false);
            formulario.edad.className = "error";
        }

        if (respuestas.every(function (val, index) { return val })) {
            insertarfilas(dni, nombre, edad);
        }
    }

    function insertarfilas(dni, nombre, edad) {
        var spanBorrar = document.createElement("span");
        spanBorrar.className = "btnBorrar";
        spanBorrar.onclick = borrarFila;
        var spanEditar = document.createElement("span");
        spanEditar.className = "btnEditar";
        spanEditar.onclick = editarFila;

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        td1.innerHTML = dni;
        td2.innerHTML = nombre;
        td3.innerHTML = edad;
        td4.appendChild(spanBorrar);
        td4.appendChild(spanEditar);
        td4.className = "accion";

        tabla.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

    }

    function borrarFila() {
        var fila = this.parentElement.parentElement;
        fila.parentElement.removeChild(fila);
    }

    function editarFila() {
        guardar.className = "";
        cancelar.className = "";
        añadir.className = "oculto";
        var fila = this.parentElement.parentElement;
        var filaCabecera = fila.parentElement.previousElementSibling.children[0];
        var tds = fila.children;
        formulario.dni.value = tds[0].innerText;
        formulario.nombre.value = tds[1].innerText;
        formulario.edad.value = tds[2].innerText;
        for (let i = 0; i < tds.length; i++) {
            if (filaCabecera.children[i].hasAttribute("noeditable")) {
                formulario.dni.setAttribute("readonly", "readonly");
            }
        }

        guardar.onclick = function () {
            var dni = formulario.dni.value;
            var nombre = formulario.nombre.value;
            var edad = formulario.edad.value;
            var respuestas = [];
            //VALIDO NOMBRE
            if (nombre != "") {
                respuestas.push(true);
                formulario.nombre.className = "";
                formulario.nombre.value = "";
            }
            else {
                respuestas.push(false);
                formulario.nombre.className = "error";
            }

            //VALIDO EDAD
            if (parseInt(edad) == edad && edad >= 0) {
                respuestas.push(true);
                formulario.edad.className = "";
                formulario.edad.value = "";
            }
            else {
                respuestas.push(false);
                formulario.edad.className = "error";
            }

            if (respuestas.every(function (val, index) { return val })) {
                formulario.dni.removeAttribute("readonly");

                tds[0].innerHTML = dni;
                tds[1].innerHTML = nombre;
                tds[2].innerHTML = edad;

                guardar.className = "oculto";
                cancelar.className = "oculto";
                añadir.className = "";
                formulario.dni.value = "";


            }
        }

        cancelar.onclick = function () {
            formulario.dni.removeAttribute("readonly");

            guardar.className = "oculto";
            cancelar.className = "oculto";
            añadir.className = "";
            formulario.dni.value = "";
            formulario.nombre.value = "";
            formulario.edad.value = "";
        }
    }




    const cabDNI = document.querySelectorAll("table thead th")[0];
    cabDNI.ordenacion = 1;
    cabDNI.ondblclick = function () {
        var vector = [];
        var tBody = this.parentNode.parentNode.nextElementSibling;
        var filas = tBody.children;

        for (let i = 0; i < filas.length; i++) {
            vector.push(filas[i]);
        }
        vector.sort(comparaCeldaDNI);
        cabDNI.ordenacion *= -1;


        for (let i = 0; i < vector.length; i++) {
            tBody.appendChild(vector[i]);
        }
    }
    function comparaCeldaDNI(a, b) {
        return cabDNI.ordenacion * (a.children[0].innerHTML.localeCompare(b.children[0].innerHTML));
    }


    const cabNombre = document.querySelectorAll("table thead th")[1];
    cabNombre.ordenacion = 1;
    cabNombre.ondblclick = function () {
        var vector = [];
        var tBody = this.parentNode.parentNode.nextElementSibling;
        var filas = tBody.children;

        for (let i = 0; i < filas.length; i++) {
            vector.push(filas[i]);
        }
        vector.sort(comparaCeldaNombre);
        cabNombre.ordenacion *= -1;


        for (let i = 0; i < vector.length; i++) {
            tBody.appendChild(vector[i]);
        }
    }
    function comparaCeldaNombre(a, b) {
        return cabNombre.ordenacion * (a.children[1].innerHTML.localeCompare(b.children[1].innerHTML));
    }


    const cabEdad = document.querySelectorAll("table thead th")[2];
    cabEdad.ordenacion = 1;
    cabEdad.ondblclick = function () {
        var vector = [];
        var tBody = this.parentNode.parentNode.nextElementSibling;
        var filas = tBody.children;

        for (let i = 0; i < filas.length; i++) {
            vector.push(filas[i]);
        }
        vector.sort(comparaCeldaEdad);
        cabEdad.ordenacion *= -1;


        for (let i = 0; i < vector.length; i++) {
            tBody.appendChild(vector[i]);
        }
    }
    function comparaCeldaEdad(a, b) {
        return cabEdad.ordenacion * (a.children[2].innerHTML.localeCompare(b.children[2].innerHTML));
    }
}
)

//rellenar tabla, hago formulario con DNI, NOMBRE y EDAD, cuando pulse en añadir se borran los campos del formulario y se añaden a la tabla.
//html es: form y table con thead y tbody en la tabla una cuarta columna que ponga imagen de cruz y borre