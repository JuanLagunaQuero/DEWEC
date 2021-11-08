window.addEventListener("load", function () {

    const btnderall = document.getElementById("btnderall");
    const btnizqall = document.getElementById("btnizqall");
    const btnder = document.getElementById("btnder");
    const btnizq = document.getElementById("btnizq");
    const btnenviar = document.getElementById("btnenviar");
    const btnañadir = document.getElementById("btnañadir");

    const selectizq = document.getElementById("alumnos");
    const selectder = document.getElementById("seleccionados");

    var txttexto = document.getElementById("texto");

    btnderall.onclick = function () {
        selectder.añadirTodos(selectizq);
        selectder.ordenar();
    }

    btnizqall.onclick = function () {
        selectizq.añadirTodos(selectder);
        selectizq.ordenar();
    }

    btnder.onclick = function () {
        selectder.añadirSeleccionados(selectizq);
        selectder.ordenar();
    }

    btnizq.onclick = function () {
        selectizq.añadirSeleccionados(selectder);
        selectizq.ordenar();
    }

    btnenviar.onclick = function () {
        selectder.volcar();
    }

    btnañadir.onclick = function () {
        selectizq.añadir(txttexto.value);

        txttexto.value = "";
    }

    var alumnos = JSON.parse(localStorage.getItem("alumnos"));
    for (let i = 0; i < alumnos.length; i++) {
        var opt = document.createElement("option");
        opt.value = alumnos[i].value;
        opt.text = alumnos[i].texto;
        selectizq.appendChild(opt);
    }

})

