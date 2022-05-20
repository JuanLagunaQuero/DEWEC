<?php

$conexion = new PDO('mysql:host=localhost;dbname=chat', 'root', '');
$conexion->query("SET NAMES utf8");

$registros = $conexion->query("SELECT * FROM `mensajes`");

$respuesta = $registros->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($respuesta);
