window.addEventListener("load", function () {
    var select = document.getElementById("provincias");

    fetch("https://www.el-tiempo.net/api/json/v2/provincias").
        then(response => response.json()).
        then(json => {
            console.log(json);            
            console.log(json.provincias);

            for (let i = 0; i < json.length; i++) {
                var opt = document.createElement("option");
                opt.innerHTML = json.provincias[i].NOMBRE_PROVINCIA;
                select.appendChild(opt);
            }
        })
})
