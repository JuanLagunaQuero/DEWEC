window.addEventListener("load", function(){

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var x = c.width/2;
    var y = c.height/2;
    var movimientox = 1.95;
    var movimientoy = -1.65;
    var x2 = c.width/4;
    var y2 = c.height/4;
    var movimientox2 = 2.4;
    var movimientoy2 = -0.3;

    function mueve(){
        ctx.clearRect(0, 0, c.width, c.height);

        ctx.beginPath();
        ctx.arc(x, y, 40, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.strokeStyle= "5","black" ;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        if(x + movimientox > c.width-40 || x + movimientox < 40) {
            movimientox = -movimientox;
        }
        
        if(y + movimientoy > c.height-40 || y + movimientoy < 40) {
            movimientoy = -movimientoy;
        }

        

        ctx.beginPath();
        ctx.arc(x2, y2, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.strokeStyle= "5","black" ;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        if(x2 + movimientox2 > c.width-20 || x2 + movimientox2 < 20) {
            movimientox2 = -movimientox2;
        }
        
        if(y2 + movimientoy2 > c.height-20 || y2 + movimientoy2 < 20) {
            movimientoy2 = -movimientoy2;
        }



        if(((x-x2)*(x-x2)) + ((y-y2)*(y-y2)) <= ((40+20)*(40+20))) {
            movimientox = -movimientox*203;
            movimientox2 = -movimientox2*0.7;
            movimientoy = -movimientoy*0.8;
            movimientoy2 = -movimientoy2*0.5;
        }


            



        x += movimientox;
        y += movimientoy;
        x2 += movimientox2;
        y2 += movimientoy2;

    }

    setInterval(mueve,5);


})
