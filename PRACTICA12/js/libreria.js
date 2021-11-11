window.addEventListener("load", function () {
    var txtDNI = document.getElementById("dni");
    var txtNombre = document.getElementById("nombre");
    var txtFechaNac = document.getElementById("fechanac");
    var btnGuardar = document.getElementById("guardar");

    var tabla = document.getElementById("tabla");

    txtDNI.addEventListener("keydown", function (Event)
    {
        if ((Event.key.charCodeAt(0) < 48 || Event.key.charCodeAt(0) > 58) && Event.keyCode != 8 || Event.repeat)
        {
            Event.preventDefault();
        }
    })

    txtDNI.onkeyup = function()
    {
        if(this.value.length==8){
            this.readOnly=true;
            var caracteres="TRWAGMYFPDXBNJZSQVHLCKE";
            var resto = this.value%23;
            this.value+=caracteres.charAt(resto);
            txtNombre.focus();
        }
    }

    txtDNI.onpaste=function(Event){
        if(Event.clipboardData.getData("text")!=12){
            Event.preventDefault();
        }
    }

    txtNombre.addEventListener("keydown", function(Event)
    {
        if ((Event.key.charCodeAt(0) >= 48 && Event.key.charCodeAt(0) <= 58) || Event.repeat)
        {
            Event.preventDefault();
        }
    })

    txtNombre.addEventListener("keyup", function(Event)
    {
        if (Event.keyCode == 13)
        {
            txtFechaNac.focus();
        }
    })

    txtFechaNac.addEventListener("keydown", function (Event)
    {
        if ((Event.key.charCodeAt(0) < 48 || Event.key.charCodeAt(0) > 58) && Event.keyCode != 8 || Event.repeat)
        {
            Event.preventDefault();
        }
    })

    txtFechaNac.onkeyup = function()
    {
        if(this.value.length==2)
        {
           this.value+="/";
        }
        if(this.value.length==5)
        {
           this.value+="/";
        }
    }

    btnGuardar.onclick = function () {
        var vector = [];
    
        vector.push({ "dni": txtDNI.value, "nombre": txtNombre.value, "fechanac":txtFechaNac.value });
    
        var cadena = JSON.stringify(vector);
        localStorage.setItem("personas",cadena);

        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");

        td1.innerHTML=txtDNI.value;
        td2.innerHTML=txtNombre.value;
        td3.innerHTML=txtFechaNac.value;

        tabla.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

    }

})