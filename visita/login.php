<?php

$obj= new stdClass();
$obj->sucess=true;
if(isset($_POST["user"]))
    $obj->user=$_POST["user"];
$obj->desplazamientos=[1,2,3];
echo json_encode($obj);
