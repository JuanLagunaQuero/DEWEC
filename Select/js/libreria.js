window.addEventListener("load",function(){
   const btnDerAll=document.getElementById("btnDerAll");
   const btnIzqAll=document.getElementById("btnIzqAll");
   const btnDer=document.getElementById("btnDer");
   const btnIzq=document.getElementById("btnIzq");
   const selectIzq=document.getElementById("alumnos");
   const selectDer=document.getElementById("seleccionados");

   btnDerAll.onclick=function(){
      selectDer.annadirTodos(selectIzq);
      selectDer.ordenar();
   }
   btnIzqAll.onclick=function(){
    selectIzq.annadirTodos(selectDer);
    selectIzq.ordenar();
 }
   btnDer.onclick=function(){
    selectDer.annadirSeleccionados(selectIzq);
    selectDer.ordenar();
 }
   btnIzq.onclick=function(){
      selectIzq.annadirSeleccionados(selectDer);
      selectDer.ordenar();
}

var alumnos=JSON.parse(localStorage.getItem("alumnos"));
for (let i=0;i<alumnos.length;i++){
   var opt=document.createElement("option");
   opt.value=alumnos[i].value;
   opt.text=alumnos[i].texto;
   selectIzq.appendChild(opt);
}

})