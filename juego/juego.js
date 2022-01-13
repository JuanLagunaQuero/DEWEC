//Objeto Juego
function Juego(canvas){
    this.componentes=[];
    this.canvas=canvas;
    this.ctx=canvas.getContext("2d");
    this.temporizador=null;
}

Juego.prototype.limpiar=function(){
    this.ctx.clearRect(0,0,this.canvas.width,canvas.height);
}

Juego.prototype.repintar=function(){
    this.limpiar();
    for (let i=0;i<this.componentes.length;i++){
        this.componentes[i].pintar();
    }
}

Juego.prototype.empezar=function(){
    function empezar(obj){
        return function(){
            obj.repintar();
        }
    }
    if( this.temporizador===null){
     this.temporizador=window.setInterval(empezar(this),33);
    }
}

Juego.prototype.parar=function(){
    if (this.temporizador!==null){
       window.clearInterval(this.temporizador);
       this.temporizador=null;
    }
}

Juego.prototype.addComponente=function(componente){
    this.componentes.push(componente);
    componente.ind=this.componentes.length-1;
    componente.juego=this;
}
Juego.prototype.removeComponente=function(componente){
    this.componentes.splice(componente.ind,1);
}