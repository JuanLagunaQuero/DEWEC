<?php
if (isset($_GET["usuario"]) && isset($_GET["mensaje"])) {
   $conexion = new PDO('mysql:host=localhost;dbname=chat', 'root', '');
   $conexion->query("SET NAMES utf8");

   $sql = "INSERT INTO `mensajes`(`id`, `usuario`, `fechahora`, `mensaje`) VALUES
    (NULL, '${_GET["usuario"]}', NOW(), '${_GET["mensaje"]}');";

   $registros = $conexion->exec($sql);

   if ($registros === 1) {
      echo "OK";
   } else {
      echo "ERROR";
   }
}
