<?php
    if(isset($_POST['usuario']) && isset($_POST['mensaje']))
    {
        $usuario=$_POST["usuario"];
        $mensaje=$_POST["mensaje"];
    
        $con = new PDO('mysql:host=localhost;dbname=foro', 'root','');
        
        $con->exec("INSERT INTO `mensajes` (`id`, `usuario`, `mensaje`, `hora`) VALUES (NULL, '${usuario}', '${mensaje}', NOW());");
        echo "bien";
    }
    else
    {
        echo "ERROR";
    }

?>