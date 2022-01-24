window.addEventListener("load",function(){
    const contenedor=document.getElementById("contenedor");
    //Forma 1
    /*ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(ajax.status==200 && ajax.readyState==4 ){
            pintarPreguntas(JSON.parse(ajax.responseText));
        }
    }
    ajax.open("get","php/responder.php");
    ajax.send();*/

    //2ª FORMA
    fetch("php/responder.php",{
        method:"GET"
    }).then(response => response.json())
      .catch(error=>alert("Error"+error))
      .then(response => {
          pintarPreguntas(response);
      })

    function pintarPreguntas(objJavascript){
        for (let i=0;i<objJavascript.length;i++){
            var div=document.createElement("div");
            div.innerHTML=objJavascript[i].nombre;
            div.id="preg_"+objJavascript[i].id;
            contenedor.appendChild(div);
        }
    }






})