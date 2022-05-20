function pulsadoD() {
    var numPulsado = this.innerHTML;
    if (display.innerHTML == "0") {
        display.innerHTML = numPulsado;
    }
    else {
        display.innerHTML += numPulsado;
    }
}

function pulsadoPunto() {
    if (display.innerHTML == "") {
        display.innerHTML = "0.";
    }
    else {
        if (display.innerHTML.indexOf(".") == "-1") {
            display.innerHTML += ".";

        }
    }
}

function operar() {
    var operacion = this.innerHTML;
    cifra1 = display.innerHTML;
    operador = operacion;
    display.innerHTML = 0;
}

function calcular() {
    var cifra2 = display.innerHTML;
    switch (operador) {
        case "+": {
            display.innerHTML = parseFloat(cifra1) + parseFloat(cifra2);
            break;
        }
        case "-": {
            display.innerHTML = cifra1 - cifra2;
            break;
        }
        case "*": {
            display.innerHTML = cifra1 * cifra2;
            break;
        }
        case "/": {
            display.innerHTML = cifra1 / cifra2;
            break;
        }
    }
}

function saludar(){
    alert("Muchisimas gracias por utilizar la calculadora")
}

function activar(){
    var igual = document.querySelector(".calcular");
    igual.addEventListener("click", saludar);
}

function desactivar(){
    var igual = document.querySelector(".calcular");
    igual.removeEventListener("click", saludar);
}

window.addEventListener("load", function () {
    //Capturo el display
    var display = document.getElementById("display");

    //Capturo los digitos
    var digitos = document.querySelectorAll(".digito");
    /* var digitos = document.getElementsByClassName("digito"); */
    for (let i = 0; i < digitos.length; i++) {
        digitos[i].onclick = pulsadoD;
    }

    //Capturo el punto
    var punto = document.querySelector(".punto");
    punto.onclick = pulsadoPunto;

    //Capturo los operadores
    var operadores = document.getElementsByClassName("operador");
    for (let i = 0; i < operadores.length; i++) {
        operadores[i].onclick = operar;
    }

    //Capturo el igual
    var igual = document.querySelector(".calcular");
    igual.addEventListener("click", calcular);

    var btn1=document.getElementById("activar");
    var btn2=document.getElementById("desactivar");

    btn1.addEventListener("click", activar);
    btn2.addEventListener("click", desactivar);

    var cifra1 = 0;
    var operador = "";
})