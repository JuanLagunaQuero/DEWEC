window.addEventListener("load", function(){

    const izq = document.getElementById("izq");
    const der = document.getElementById("der");
    const divs = izq.getElementsByTagName("div");

    for (let i=0; i<divs.length; i++){
        divs[i].ondragstart=function(ev){
            ev.dataTransfer.setData("text", ev.target.id);
        }
        divs[i].ondrop=function(ev){
            ev.preventDefault();
        }
    }

    der.ondragover=function(ev){
        ev.preventDefault();
    }

    izq.ondragover=function(ev){
        ev.preventDefault();
    }

    der.ondrop=function(ev){
        ev.preventDefault();
        const id =ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(id));
    }

    izq.ondrop=function(ev){
        ev.preventDefault();
        const id=ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(id));
    }
})