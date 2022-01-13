<?php
//phpinfo();
//exit();
    if(isset($_POST['usuario']) && isset($_POST['mensaje']) )
    {
        
        $usuario=$_POST["usuario"];
        $mensaje=$_POST["mensaje"];
    
        $con = new PDO('mysql:host=localhost;dbname=foro', 'root','');


            $archivo=$_FILES['archivo']['tmp_name'];
            $contenido_archivo= file_get_contents($archivo);
            $contenido_archivo=base64_encode($contenido_archivo);
            $contenido_archivo="data:".$_FILES['archivo']['type'].";base64, ".$contenido_archivo."";
        
            
            $con->exec("INSERT INTO `mensajes` (`id`, `usuario`, `mensaje`, `archivo`, `hora`)
                        VALUES (NULL, '${usuario}', '${mensaje}', '${contenido_archivo}',  NOW());");
            echo "OK";

    }
    else
    {
        echo "ERROR";
    }

?>