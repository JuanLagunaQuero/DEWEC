//1 Clonar el ol que está dentro del contenedor e insertarlo detrás, cambiando la 'O' por una 'A'
function ejercicio1() {
    var ol = document.querySelector("#contenedor>ol");

    var clon = ol.cloneNode(true);

    var lis = clon.getElementsByTagName("li");

    for (let i = 0; i<lis.length; i++){
        lis[i].childNodes[0].nodeValue=lis[i].childNodes[0].nodeValue.replace("O", "A")
    } 
    
    var contenedor= ol.parentElement;

    contenedor.appendChild(clon);
}

//2 Mover el segundo 'li' al principio

function ejercicio2()
{
    var li2 = document.getElementsByTagName("li")[1];
    li2.parentElement.insertBefore(li2, li2.previousElementSibling);
}

//3 Clonar Opcion5, modificar el contenido como si fuera la opción 3 en insertarla delante de la 3 actual
function ejercicio3()
{
    var ol = document.querySelector("#contenedor>ol");

    var clon = ol.children[4].cloneNode(true);

    var lis = clon.getElementsByTagName("li");

    for (let i = 0; i<lis.length; i++){
        lis[i].childNodes[0].nodeValue=lis[i].childNodes[0].nodeValue.replace("5", "3");
    } 
     
    clon.childNodes[0].nodeValue=clon.childNodes[0].nodeValue.replace("5", "3");

    ol.insertBefore(clon, ol.children[2]);

//4 Borrar la opción 3 antigua
    ol.removeChild(clon.nextSibling);

}

//5 Organizar la opción 5 al revés 54, 53, 52, 51
function ejercicio5(){

    var hijos5 = document.querySelectorAll("ol>li>ol li");

    var vector = Array.from(hijos5)

    vector.reverse();
    for (let i=0; i<vector.length; i++)
    {
        hijos5[i].parentElement.appendChild(vector[i]);
    }
}

function rojoLi1(){
    var li1 = document.getElementsByTagName("li")[0];

    if(li1.style.color="red"){
        li1.style.color="blue";
    }
  
    

    
}

window.addEventListener ("load", function(){
    var li5 = document.getElementsByTagName("li")[4];
    li5.ondblclick=ejercicio3;

    var li3 = document.getElementsByTagName("li")[2];
    li3.onclick=function(){
        li1.removeEventListener("click", ejercicio2);
    }

    var li1 = document.getElementsByTagName("li")[0];
    li1.addEventListener("click", ejercicio2);
    li1.addEventListener("click", rojoLi1);
    

})