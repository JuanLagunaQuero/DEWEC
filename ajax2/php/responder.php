<?php
    $obj=[];
    for ($i=0;$i<10;$i++){
        $valor=new stdClass();
        $valor->nombre=" nombre".$i;
        $valor->id=$i;
        $obj[]=$valor;
    }
    echo json_encode($obj);
?>