<?php
    if(isset($_GET["ultimo"]))
    {
        $siguiente=$_GET["ultimo"]+1;
    }
    else
    {
        $siguiente=1;
    }
    $ultimo=0;

    $con = new PDO('mysql:host=localhost;dbname=foro', 'root','');

    $sql = "SELECT * FROM `mensajes` WHERE id >= ${siguiente}";

    $respuesta=$con->query($sql);

    $object= new stdClass();
    $object->mensajes=[];

    $ultimo=$siguiente-1;
    while($fila=$respuesta->fetch())
    {
        $objMensaje = new stdClass();
        $objMensaje->id=$fila[0];
        $objMensaje->usuario=$fila[1];
        $objMensaje->mensaje=$fila[2];
        $objMensaje->archivo=$fila[3];
        $objMensaje->fecha=$fila[4];
        $object->mensajes[]=$objMensaje;
        if($fila[0]>$ultimo){
            $ultimo=$fila[0];
        }
    }

    $object->ultimo=$ultimo;

    echo json_encode($object);
