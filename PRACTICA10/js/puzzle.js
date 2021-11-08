window.addEventListener("load",function()
{
    var imagen = document.getElementById("imagenpuzzle");

    imagen.ondblclick=function(){

        var body = document.body;
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");

        var hilera0 = document.createElement("tr");
        var celda0 = document.createElement("td");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");

        var hilera1 = document.createElement("tr");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");
        var celda5 = document.createElement("td");

        var hilera2 = document.createElement("tr");
        var celda6 = document.createElement("td");
        var celda7 = document.createElement("td");
        var celda8 = document.createElement("td");

        
        var divai = document.createElement("div");
        divai.className = "ai";
        //celda0.appendChild(divai);

        var divac = document.createElement("div");
        divac.className = "ac";
        // celda1.appendChild(divac);

        var divad = document.createElement("div");
        divad.className = "ad";
        // celda2.appendChild(divad);


        var divmi = document.createElement("div");
        divmi.className = "mi";
        // celda3.appendChild(divmi); 

        var divmc = document.createElement("div");
        divmc.className = "mc";
        // celda4.appendChild(divmc); 

        var divmd = document.createElement("div");
        divmd.className = "md";
        // celda5.appendChild(divmd);


        var divbi = document.createElement("div");
        divbi.className = "bi";
        // celda6.appendChild(divbi);

        var divbc = document.createElement("div");
        divbc.className = "bc";
        // celda7.appendChild(divbc);

        var divbd = document.createElement("div");
        divbd.className = "bd";
        // celda8.appendChild(divbd);
      
        var divs=[divai,divac,divad,divbi,divbc,divbd,divmi,divmc,divmd];
        
        divs.sort(function(a,b){return Math.random()-0.5});

        var celdas=[celda0,celda1,celda2,celda3,celda4,celda5,celda6,celda7,celda8];

        for(let i=0; i<celdas.length; i++)
        {
            celdas[i].appendChild(divs[i]);
        }

        hilera0.appendChild(celda0);
        hilera0.appendChild(celda1);
        hilera0.appendChild(celda2);
        hilera1.appendChild(celda3);
        hilera1.appendChild(celda4);
        hilera1.appendChild(celda5);
        hilera2.appendChild(celda6);
        hilera2.appendChild(celda7);
        hilera2.appendChild(celda8);

        

        tblBody.appendChild(hilera0);
        tblBody.appendChild(hilera1);
        tblBody.appendChild(hilera2);
        
        tabla.appendChild(tblBody);

        body.appendChild(tabla);
            
        /* for(let i = 0; i<4; i++)
        {

            var ancho

            var div = document.createElement("div");

            var ancho= parseInt(document.getElementById("imagenpuzzle").width/columna);
        
            var alto=parseInt(document.getElementById("imagenpuzzle").height/fila);
        
            div.style.height=alto+"px";
        
            div.style.width=ancho+"px";

            div.style.backgroundPositionY=alto+"px";

            div.style.backgroundPositionX=ancho+"px";
        }

        creapiezas(4,4); */
        
    }
})