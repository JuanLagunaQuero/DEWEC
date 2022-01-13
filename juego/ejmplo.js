var j;
window.addEventListener("load",function(){
    const c=document.getElementById("canvas");
    const g1=document.getElementById("g1");
    const g2=document.getElementById("g2");
    const g3=document.getElementById("g3");
    j=new Juego(c);
    var p1=new Pelota(30,30,10,"red");
    p1.arrancar();
    p1.v=5;
    p1.d=[Math.sqrt(2)/2,Math.sqrt(2)/2]
    var p2=new Pelota(150,120,30,"yellow");
    p2.arrancar();
    var p3=new Pelota(50,200,45,"green");
    p3.v=10;
    p3.d=[1,0];
    p3.arrancar();
    j.addComponente(p1);
    j.addComponente(p2);
    j.addComponente(p3);
    j.empezar();

    g1.onclick=function(){
        p1.girar(10);
    }
    g2.onclick=function(){
        p2.girar(10);
    }
    g3.onclick=function(){
        p3.girar(10);
    }

})