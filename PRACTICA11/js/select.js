HTMLSelectElement.prototype.añadirTodos = function (select) {
    while (select.children.length > 0) {
        select.children[0].selected = false;
        this.appendChild(select.children[0]);
    }
}

HTMLSelectElement.prototype.añadirSeleccionados = function (select) {
    //debugger;
    var tamaño = select.children.length;
    for (let i = tamaño - 1; i >= 0; i--) {
        if (select.children[i].selected == true) {
            select.children[i].selected = false;
            this.appendChild(select.children[i]);
        }
    }

}

HTMLSelectElement.prototype.ordenar = function () {
    var vector = [];
    var options = this.children;
    for (let i = 0; i < options.length; i++) {
        vector.push(options[i]);
    }

    vector.sort(function (a, b) { return a.innerHTML.localeCompare(b.innerHTML); });

    for (let i = 0; i < vector.length; i++) {
        this.appendChild(vector[i])
    }
}

HTMLSelectElement.prototype.añadir = function(texto)
{
    var option = document.createElement('option');

    option.value = `al${this.children.length}`;

    option.innerHTML = texto;

    this.appendChild(option);
}

HTMLSelectElement.prototype.volcar = function () {
    var vector = [];

    var options = this.children;
    for (let i = 0; i < options.length; i++) {
        vector.push({ "value": options[i].value, "texto": options[i].innerHTML });
    }

    var cadena = JSON.stringify(vector);
    localStorage.setItem("alumnos",cadena);
}
